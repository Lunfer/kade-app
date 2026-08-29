import Constants from 'expo-constants';

/**
 * Backend URL resolution, dev vs. device.
 *
 * The pitfall from Rhoi: react-native-dotenv env vars kept resolving to
 * 127.0.0.1 on a physical device, because that address means "this phone",
 * not "the dev machine running the backend". Two things fix it properly:
 *
 * 1. Use Expo's native EXPO_PUBLIC_* env var support (.env files read by
 *    the Expo CLI/Metro directly) instead of react-native-dotenv. No babel
 *    plugin, no separate caching layer to get out of sync.
 * 2. In dev, when no explicit override is set, derive the host from
 *    Constants.expoConfig.hostUri -- that's the address the Metro bundler
 *    is actually being served from, i.e. exactly the LAN IP this device
 *    just used to load the app. It is correct on whatever network you're
 *    on, with no manual IP to update when you switch wifi.
 *
 * EXPO_PUBLIC_API_URL, when set, always wins -- use it for the Android
 * emulator (http://10.0.2.2:8000, the emulator's alias for the host's
 * localhost) or for pointing a dev build at a deployed backend.
 */
export function getApiBaseUrl(): string {
  const explicit = process.env.EXPO_PUBLIC_API_URL;
  if (explicit) return explicit.replace(/\/+$/, '');

  if (__DEV__) {
    const port = process.env.EXPO_PUBLIC_API_PORT ?? '8000';
    const hostUri = Constants.expoConfig?.hostUri ?? (Constants as any).expoGoConfig?.debuggerHost;
    if (hostUri) {
      const host = String(hostUri).split(':')[0];
      return `http://${host}:${port}`;
    }
    return `http://localhost:${port}`;
  }

  throw new Error(
    'EXPO_PUBLIC_API_URL is not set. Production builds must define it (see .env.example) -- there is no dev server host to fall back to.'
  );
}
