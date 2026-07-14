// Generates themed SVG imagery for Mombasa Breeze Hospital.
// Run: node scripts/generate-images.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public", "images");

function write(rel, svg) {
  const p = join(pub, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, `${svg.trim()}\n`, "utf8");
}

// ── Theme gradient pairs (hsl from globals.css) ──────────────────────────────
const pairs = [
  ["hsl(176 54% 30%)", "hsl(206 55% 42%)"],
  ["hsl(206 55% 42%)", "hsl(176 45% 42%)"],
  ["hsl(14 78% 52%)", "hsl(176 54% 30%)"],
  ["hsl(176 45% 42%)", "hsl(206 46% 68%)"],
  ["hsl(206 46% 68%)", "hsl(14 78% 65%)"],
  ["hsl(176 54% 30%)", "hsl(14 78% 52%)"],
  ["hsl(14 78% 65%)", "hsl(206 55% 42%)"],
  ["hsl(206 55% 42%)", "hsl(14 78% 52%)"],
];

const SAND = "hsl(42 35% 95%)";
const WHITE = "#ffffff";

// ── Icon path library (lucide-derived, 24x24) ───────────────────────────────
const ICONS = {
  heart: [
    "M19 14c1.49-1.46 3-3.21 3-5.02a5.5 5.5 0 0 0-11 0c0 1.81 1.51 3.56 3 5.02",
    "M5 14c-1.49-1.46-3-3.21-3-5.02a5.5 5.5 0 0 1 11 0c0 1.81-1.51 3.56-3 5.02",
  ],
  baby: [
    "M9 12h.01",
    "M15 12h.01",
    "M12 9h.01",
    "M12 15h.01",
    "M12 5C17 5 17 17 12 17S7 17 7 12 7 5 12 5",
    "M9.5 9.5c.8 0 1.5-.7 1.5-1.5S10.3 6.5 9.5 6.5",
    "M14.5 9.5c.8 0 1.5-.7 1.5-1.5S15.3 6.5 14.5 6.5",
  ],
  pill: [
    "M10.5 20.5 10 21",
    "M13.5 20.5 14 21",
    "M21 15H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Z",
    "M7 9v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2",
    "M17 9v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2",
  ],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"],
  droplet: ["M12 2.5S5 10 5 14a7 7 0 0 0 14 0c0-4-7-11.5-7-11.5Z"],
  activity: ["M3 12h4l3 8 4-16 3 8h4"],
  ambulance: [
    "M21 14H3",
    "M3 6h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3",
    "M7 17a2 2 0 1 0 0 .01",
    "M17 17a2 2 0 1 0 0 .01",
  ],
  stethoscope: [
    "M11 2v2",
    "M5 2v2",
    "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
    "M8 15a6 6 0 0 0 12 0",
    "M20 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0",
  ],
  sprout: [
    "M12 22V11",
    "M12 11C12 5 6 4 3 6c0 6 6 7 9 5",
    "M12 11c0-4 6-5 9-3-0 6-6 7-9 3",
  ],
};

function iconGroup(icon, cx, cy, size, color = WHITE, sw = 1.5) {
  const scale = size / 24;
  const tx = cx - 12 * scale;
  const ty = cy - 12 * scale;
  const paths = ICONS[icon].map((d) => `<path d="${d}" />`).join("");
  return `<g transform="translate(${tx} ${ty}) scale(${scale})" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${paths}</g>`;
}

// ── Doctor avatar (portrait card) ────────────────────────────────────────────
function doctorSVG(doc, idx) {
  const [c1, c2] = pairs[idx % pairs.length];
  const initials = doc.name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const id = `g${idx}`;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 560" role="img" aria-label="${doc.name}, ${doc.specialty}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="${id}r" cx="0.3" cy="0.25" r="0.9">
      <stop offset="0" stop-color="rgba(255,255,255,0.35)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
  </defs>
  <rect width="480" height="560" fill="url(#${id})"/>
  <rect width="480" height="560" fill="url(#${id}r)"/>
  <g opacity="0.12" fill="${WHITE}">
    <circle cx="80" cy="90" r="60"/>
    <circle cx="420" cy="470" r="90"/>
  </g>
  <circle cx="240" cy="215" r="150" fill="${WHITE}" opacity="0.14"/>
  <circle cx="240" cy="215" r="138" fill="${WHITE}"/>
  <g>
    <circle cx="240" cy="195" r="56" fill="hsl(42 35% 95%)"/>
    <path d="M148 360 C148 286 194 246 240 246 C286 246 332 286 332 360 Z" fill="hsl(42 35% 95%)"/>
    <path d="M240 252 L214 304 L266 304 Z" fill="${c1}"/>
    <path d="M208 300 C208 344 272 344 272 300" fill="none" stroke="hsl(14 78% 52%)" stroke-width="7" stroke-linecap="round"/>
    <circle cx="240" cy="300" r="9" fill="hsl(14 78% 52%)"/>
  </g>
  <g transform="translate(338 150)" fill="${c1}">
    <rect x="-2" y="0" width="28" height="28" rx="8"/>
    <path d="M12 -7 v22 M1 4 h22" stroke="${WHITE}" stroke-width="4" stroke-linecap="round"/>
  </g>
  <text x="240" y="465" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="34" font-weight="600" fill="${WHITE}">${initials}</text>
  <text x="240" y="495" text-anchor="middle" font-family="Manrope, system-ui, sans-serif" font-size="15" letter-spacing="1.5" fill="${WHITE}" opacity="0.85">${doc.specialty.toUpperCase()}</text>
</svg>`;
}

// ── Blog illustration ────────────────────────────────────────────────────────
function blogSVG(post, idx, icon) {
  const [c1, c2] = pairs[(idx + 2) % pairs.length];
  const id = `b${idx}`;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${post.category}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#${id})"/>
  <circle cx="650" cy="120" r="240" fill="${WHITE}" opacity="0.07"/>
  <circle cx="120" cy="430" r="180" fill="${WHITE}" opacity="0.05"/>
  <g opacity="0.18" fill="${WHITE}">
    <circle cx="700" cy="380" r="6"/><circle cx="640" cy="420" r="4"/>
    <circle cx="120" cy="120" r="5"/><circle cx="180" cy="80" r="3"/>
    <circle cx="500" cy="60" r="4"/><circle cx="60" cy="300" r="3"/>
  </g>
  ${iconGroup(icon, 400, 250, 180)}
  <text x="400" y="450" text-anchor="middle" font-family="Manrope, system-ui, sans-serif" font-size="20" font-weight="600" letter-spacing="3" fill="${WHITE}" opacity="0.9">${post.category.toUpperCase()}</text>
</svg>`;
}

// ── Hero / coastline scene ───────────────────────────────────────────────────
function sceneSVG(w, h) {
  const id = "scene";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Mombasa Breeze Hospital coastline scene"><defs><linearGradient id="${id}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(176 54% 30%)"/><stop offset="0.55" stop-color="hsl(206 55% 42%)"/><stop offset="1" stop-color="hsl(206 46% 68%)"/></linearGradient><linearGradient id="${id}sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(176 45% 42%)"/><stop offset="1" stop-color="hsl(206 55% 42%)"/></linearGradient><radialGradient id="${id}sun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="hsl(42 90% 85%)"/><stop offset="1" stop-color="hsl(42 90% 85% / 0)"/></radialGradient></defs><rect width="${w}" height="${h}" fill="url(#${id}sky)"/><circle cx="${w * 0.78}" cy="${h * 0.26}" r="${h * 0.28}" fill="url(#${id}sun)"/><circle cx="${w * 0.78}" cy="${h * 0.26}" r="${h * 0.07}" fill="hsl(42 90% 88%)" opacity="0.9"/><rect y="${h * 0.62}" width="${w}" height="${h * 0.38}" fill="url(#${id}sea)" opacity="0.55"/><g opacity="0.25" stroke="${WHITE}" stroke-width="3" fill="none"><path d="M0 ${h * 0.66} Q ${w * 0.25} ${h * 0.62} ${w * 0.5} ${h * 0.66} T ${w} ${h * 0.66}"/><path d="M0 ${h * 0.74} Q ${w * 0.25} ${h * 0.7} ${w * 0.5} ${h * 0.74} T ${w} ${h * 0.74}"/></g><g transform="translate(${w * 0.32} ${h * 0.34})" fill="${WHITE}" opacity="0.96"><rect x="0" y="40" width="170" height="150" rx="10"/><rect x="24" y="70" width="30" height="30" rx="3"/><rect x="70" y="70" width="30" height="30" rx="3"/><rect x="116" y="70" width="30" height="30" rx="3"/><rect x="24" y="120" width="30" height="30" rx="3"/><rect x="70" y="120" width="30" height="30" rx="3"/><rect x="116" y="120" width="30" height="30" rx="3"/><rect x="74" y="-2" width="22" height="44" rx="4"/><path d="M85 -22 v40 M66 -2 h38" stroke="hsl(14 78% 52%)" stroke-width="9" stroke-linecap="round"/></g><g transform="translate(${w * 0.7} ${h * 0.5})" opacity="0.95"><rect x="0" y="60" width="14" height="90" rx="6" fill="hsl(42 35% 88%)"/><path d="M7 60 C -30 30 -10 -20 30 -10 C 60 -30 95 10 60 50 C 70 70 40 80 7 60 Z" fill="hsl(42 45% 82%)"/></g><path d="M0 ${h} L0 ${h * 0.9} Q ${w * 0.25} ${h * 0.82} ${w * 0.5} ${h * 0.9} T ${w} ${h * 0.9} L ${w} ${h} Z" fill="${SAND}"/><path d="M0 ${h} L0 ${h * 0.95} Q ${w * 0.25} ${h * 0.9} ${w * 0.5} ${h * 0.95} T ${w} ${h * 0.95} L ${w} ${h} Z" fill="hsl(41 30% 78%)"/></svg>`;
}

// ── Build ────────────────────────────────────────────────────────────────────
const doctors = [
  { name: "Dr. Catherine Wanjiku", specialty: "General Medicine" },
  { name: "Dr. Ahmed Salim", specialty: "Emergency Medicine" },
  { name: "Dr. Mary Akinyi", specialty: "Obstetrics & Gynecology" },
  { name: "Dr. Patrick Otieno", specialty: "Pediatrics" },
  { name: "Dr. Fatima Hussein", specialty: "Radiology" },
  { name: "Dr. Samuel Kiprop", specialty: "General Surgery" },
  { name: "Dr. Esther Nyambura", specialty: "Laboratory Medicine" },
  { name: "Dr. Rashid Mwinyi", specialty: "Pharmacy" },
];
for (let i = 0; i < doctors.length; i++) {
  write(`doctors/doctor-${i + 1}.svg`, doctorSVG(doctors[i], i));
}

const blogs = [
  { category: "Health Policy", icon: "shield" },
  { category: "Diabetes", icon: "droplet" },
  { category: "Women's Health", icon: "baby" },
  { category: "Child Health", icon: "baby" },
  { category: "Heart Health", icon: "activity" },
  { category: "Nutrition", icon: "sprout" },
  { category: "Mental Health", icon: "heart" },
  { category: "Emergency Care", icon: "ambulance" },
  { category: "Preventive Care", icon: "stethoscope" },
];
const blogFiles = [
  "sha-healthcare",
  "diabetes-care",
  "childbirth-guide",
  "immunizations",
  "hypertension",
  "immune-nutrition",
  "mental-health",
  "emergency-room",
  "health-checkups",
];
for (let i = 0; i < blogs.length; i++) {
  write(`blog/${blogFiles[i]}.svg`, blogSVG(blogs[i], i, blogs[i].icon));
}

write("hero-coastline.svg", sceneSVG("hero", 1600, 1000, "hero"));
write("about-scene.svg", sceneSVG("about", 1200, 800, "about"));

console.log("Generated images in public/images");
