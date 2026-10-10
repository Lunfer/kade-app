// Adds 1 to expo.android.versionCode in app.json (run by `npm run release`, so every release build gets a new code).
const fs = require('fs');
const path = require('path');

const file = process.argv[2] || path.join(__dirname, '..', 'app.json'); // optional path arg, used to test on a copy
const text = fs.readFileSync(file, 'utf8');
const match = text.match(/"versionCode":\s*(\d+)/);
if (!match) throw new Error(`bump-version-code: no "versionCode" in ${file}`);

const next = Number(match[1]) + 1;
fs.writeFileSync(file, text.replace(match[0], match[0].replace(match[1], next))); // text edit keeps formatting and line endings
console.log(`versionCode ${match[1]} -> ${next}`);
