// Generates app icons without external dependencies.
// Draws a blue-violet rounded square with a white cross and an open-book base line.
import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'icons');
mkdirSync(outDir, { recursive: true });

// ---- minimal PNG encoder ----
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 6;   // color type RGBA
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ---- drawing ----
const BG = [37, 99, 235];      // blue-600
const BG_DARK = [30, 64, 175]; // blue-700 corner shading
const FG = [255, 255, 255];

function drawIcon(size) {
  const px = Buffer.alloc(size * size * 4);
  const set = (x, y, r, g, b, a = 255) => {
    const i = (y * size + x) * 4;
    px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = a;
  };

  const radius = size * 0.22;
  const inRoundedSquare = (x, y) => {
    const dx = Math.max(radius - x, x - (size - 1 - radius), 0);
    const dy = Math.max(radius - y, y - (size - 1 - radius), 0);
    return dx * dx + dy * dy <= radius * radius;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!inRoundedSquare(x, y)) { set(x, y, 0, 0, 0, 0); continue; }
      // subtle diagonal shading toward bottom-right
      const t = (x + y) / (2 * size);
      const shade = BG.map((c, k) => Math.round(c + (BG_DARK[k] - c) * t));
      set(x, y, shade[0], shade[1], shade[2]);
    }
  }

  // cross: vertical bar + horizontal bar, centered slightly above middle
  const cx = size / 2;
  const cy = size * 0.46;
  const barW = Math.max(3, Math.round(size * 0.12));
  const armH = Math.round(size * 0.34);
  const armW = Math.round(size * 0.52);
  for (let y = Math.round(cy - armH); y <= Math.round(cy + armH); y++) {
    for (let x = Math.round(cx - barW / 2); x <= Math.round(cx + barW / 2); x++) {
      if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, ...FG);
    }
  }
  for (let y = Math.round(cy - barW / 2); y <= Math.round(cy + barW / 2); y++) {
    for (let x = Math.round(cx - armW / 2); x <= Math.round(cx + armW / 2); x++) {
      if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, ...FG);
    }
  }

  // open-book baseline under the cross
  const bookY = Math.round(size * 0.78);
  const bookHalf = Math.round(size * 0.28);
  const bookThick = Math.max(2, Math.round(size * 0.035));
  for (let d = 0; d < bookThick; d++) {
    const y = bookY + d;
    const spread = d * 0.4;
    for (let x = Math.round(cx - bookHalf + spread); x <= Math.round(cx - size * 0.02); x++) if (x >= 0 && x < size) set(x, y, ...FG);
    for (let x = Math.round(cx + size * 0.02); x <= Math.round(cx + bookHalf - spread); x++) if (x >= 0 && x < size) set(x, y, ...FG);
  }

  return encodePng(size, size, px);
}

for (const size of [192, 512]) {
  writeFileSync(join(outDir, `icon-${size}.png`), drawIcon(size));
  console.log(`wrote public/icons/icon-${size}.png`);
}
