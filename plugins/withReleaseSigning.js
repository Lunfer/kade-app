const { withAppBuildGradle } = require('@expo/config-plugins');

// Expo's `expo prebuild` regenerates android/app/build.gradle from scratch
// every time (android/ is gitignored, not hand-maintained), and the
// generated `release` buildType signs with the DEBUG keystore by default
// ("signingConfig signingConfigs.debug"). Google Play rejects any AAB/APK
// signed with the debug key, even for internal testing, so this can't be a
// one-off hand edit to build.gradle -- same lesson as withNdkVersionFix.js.
//
// This plugin adds a `release` signingConfig that reads its four values
// from Gradle properties (MYAPP_UPLOAD_STORE_FILE / STORE_PASSWORD /
// KEY_ALIAS / KEY_PASSWORD) and points buildTypes.release at it instead of
// the debug config. It does NOT put secrets anywhere in this repo or in
// android/gradle.properties (which is also wiped every prebuild) --
// those four properties must be set in the user's machine-global
// ~/.gradle/gradle.properties (Windows: C:\Users\<you>\.gradle\gradle.properties),
// which Gradle merges into every project automatically and which prebuild
// never touches. See ANDROID_RELEASE_SIGNING.md for the setup steps.
module.exports = function withReleaseSigning(config) {
  return withAppBuildGradle(config, (config) => {
    if (config.modResults.language !== 'groovy') {
      throw new Error('withReleaseSigning only supports Groovy build.gradle files');
    }

    let contents = config.modResults.contents;

    if (contents.includes('signingConfigs.release')) {
      // Already patched (idempotent guard).
      return config;
    }

    const debugConfigBlock = `        debug {\n            storeFile file('debug.keystore')\n            storePassword 'android'\n            keyAlias 'androiddebugkey'\n            keyPassword 'android'\n        }\n    }`;

    if (!contents.includes(debugConfigBlock)) {
      throw new Error(
        'withReleaseSigning: could not find the expected debug signingConfigs block in android/app/build.gradle - template may have changed.'
      );
    }

    const releaseConfigBlock =
      `        debug {\n            storeFile file('debug.keystore')\n            storePassword 'android'\n            keyAlias 'androiddebugkey'\n            keyPassword 'android'\n        }\n` +
      `        release {\n` +
      `            // Values come from ~/.gradle/gradle.properties (machine-global,\n` +
      `            // never wiped by prebuild, never committed). See\n` +
      `            // ANDROID_RELEASE_SIGNING.md. Injected by plugins/withReleaseSigning.js.\n` +
      `            storeFile file(MYAPP_UPLOAD_STORE_FILE)\n` +
      `            storePassword MYAPP_UPLOAD_STORE_PASSWORD\n` +
      `            keyAlias MYAPP_UPLOAD_KEY_ALIAS\n` +
      `            keyPassword MYAPP_UPLOAD_KEY_PASSWORD\n` +
      `        }\n    }`;

    contents = contents.replace(debugConfigBlock, releaseConfigBlock);

    const releaseBuildTypeMarker =
      `        release {\n            // Caution! In production, you need to generate your own keystore file.\n            // see https://reactnative.dev/docs/signed-apk-android.\n            signingConfig signingConfigs.debug`;

    if (!contents.includes(releaseBuildTypeMarker)) {
      throw new Error(
        'withReleaseSigning: could not find the expected release buildType block in android/app/build.gradle - template may have changed.'
      );
    }

    contents = contents.replace(
      releaseBuildTypeMarker,
      `        release {\n            // Signed with the upload key (see plugins/withReleaseSigning.js), not the debug keystore.\n            signingConfig signingConfigs.release`
    );

    config.modResults.contents = contents;
    return config;
  });
};
