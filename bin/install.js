#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');
const https = require('https');

const base = 'https://raw.githubusercontent.com/thedalbee/roseofsharon/main';
const skillUrl = `${base}/SKILL.md`;

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetch(res.headers.location));
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Request failed: ${res.statusCode} ${url}`));
        res.resume();
        return;
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function installFile(dest, content) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content, 'utf8');
  console.log(`Installed -> ${dest}`);
}

async function main() {
  const mode = process.argv[2] || 'both';
  if (!['hermes', 'codex', 'both'].includes(mode)) {
    console.error('Usage: npx roseofsharon-korean-writing [hermes|codex|both]');
    process.exit(1);
  }

  const skill = await fetch(skillUrl);
  const home = os.homedir();

  if (mode === 'hermes' || mode === 'both') {
    installFile(path.join(home, '.hermes/skills/creative/roseofsharon-korean-writing/SKILL.md'), skill);
  }
  if (mode === 'codex' || mode === 'both') {
    installFile(path.join(home, '.codex/skills/roseofsharon-korean-writing/SKILL.md'), skill);
  }
}

main().catch(err => {
  console.error(err.message || err);
  process.exit(1);
});
