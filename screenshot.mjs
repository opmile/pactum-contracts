import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:5173';
const label = process.argv[3] || '';

const dir = './screenshots/temp';
fs.mkdirSync(dir, { recursive: true });

const existing = fs.readdirSync(dir)
  .filter(f => f.endsWith('.png'))
  .map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] || '0'))
  .filter(n => !isNaN(n));

const next = existing.length ? Math.max(...existing) + 1 : 1;
const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: path.join(dir, filename), fullPage: true });
await browser.close();

console.log(`Saved: ${path.join(dir, filename)}`);