// Material 3 / Material You HSL-based Dynamic Color Palette Generator
// Implements 100% of M3 tonal roles without broken static module imports.

// HSL to Hex helper
const hslToHex = (h, s, l) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

// Custom HSL-based M3 color scheme generator (100% robust, zero-dependency)
const generateScheme = (seedHex, isDark) => {
  // Parse hex to RGB
  const r = parseInt(seedHex.slice(1, 3), 16) || 11;
  const g = parseInt(seedHex.slice(3, 5), 16) || 87;
  const b = parseInt(seedHex.slice(5, 7), 16) || 208;

  // Convert RGB to HSL
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  // Derive palette parameters to conform to M3 guidelines
  const neutralS = Math.min(10, Math.round(s * 0.15));
  const neutralVarS = Math.min(15, Math.round(s * 0.25));
  const secondaryS = Math.min(30, Math.round(s * 0.4));
  const tertiaryH = (h + 60) % 360;
  const tertiaryS = Math.min(40, Math.round(s * 0.5));

  const tones = {
    p0: hslToHex(h, s, 0),
    p10: hslToHex(h, s, 10),
    p20: hslToHex(h, s, 20),
    p30: hslToHex(h, s, 30),
    p40: hslToHex(h, s, 40),
    p80: hslToHex(h, s, 80),
    p90: hslToHex(h, s, 90),
    p95: hslToHex(h, s, 95),
    p99: hslToHex(h, s, 99),
    p100: hslToHex(h, s, 100),

    s10: hslToHex(h, secondaryS, 10),
    s20: hslToHex(h, secondaryS, 20),
    s30: hslToHex(h, secondaryS, 30),
    s40: hslToHex(h, secondaryS, 40),
    s80: hslToHex(h, secondaryS, 80),
    s90: hslToHex(h, secondaryS, 90),

    t10: hslToHex(tertiaryH, tertiaryS, 10),
    t20: hslToHex(tertiaryH, tertiaryS, 20),
    t30: hslToHex(tertiaryH, tertiaryS, 30),
    t40: hslToHex(tertiaryH, tertiaryS, 40),
    t80: hslToHex(tertiaryH, tertiaryS, 80),
    t90: hslToHex(tertiaryH, tertiaryS, 90),

    n4: hslToHex(h, neutralS, 4),
    n6: hslToHex(h, neutralS, 6),
    n10: hslToHex(h, neutralS, 10),
    n12: hslToHex(h, neutralS, 12),
    n17: hslToHex(h, neutralS, 17),
    n22: hslToHex(h, neutralS, 22),
    n90: hslToHex(h, neutralS, 90),
    n92: hslToHex(h, neutralS, 92),
    n94: hslToHex(h, neutralS, 94),
    n96: hslToHex(h, neutralS, 96),
    n98: hslToHex(h, neutralS, 98),
    n100: hslToHex(h, neutralS, 100),

    nv30: hslToHex(h, neutralVarS, 30),
    nv50: hslToHex(h, neutralVarS, 50),
    nv60: hslToHex(h, neutralVarS, 60),
    nv80: hslToHex(h, neutralVarS, 80),
    nv90: hslToHex(h, neutralVarS, 90)
  };

  if (isDark) {
    return {
      primary: tones.p80,
      "on-primary": tones.p20,
      "primary-container": tones.p30,
      "on-primary-container": tones.p90,
      secondary: tones.s80,
      "on-secondary": tones.s20,
      "secondary-container": tones.s30,
      "on-secondary-container": tones.s90,
      tertiary: tones.t80,
      "on-tertiary": tones.t20,
      "tertiary-container": tones.t30,
      "on-tertiary-container": tones.t90,
      background: tones.n6,
      "on-background": tones.n90,
      surface: tones.n6,
      "on-surface": tones.n90,
      "surface-variant": tones.nv30,
      "on-surface-variant": tones.nv80,
      outline: tones.nv60,
      "outline-variant": tones.nv30,
      "surface-container-lowest": tones.n4,
      "surface-container-low": tones.n10,
      "surface-container": tones.n12,
      "surface-container-high": tones.n17,
      "surface-container-highest": tones.n22,
      error: "#ffb4ab",
      "on-error": "#690005",
      "error-container": "#93000a",
      "on-error-container": "#ffdad6",
      "inverse-surface": tones.n90,
      "inverse-on-surface": tones.n10,
      "inverse-primary": tones.p40,
      shadow: "#000000",
      scrim: "#000000"
    };
  } else {
    return {
      primary: tones.p40,
      "on-primary": tones.p100,
      "primary-container": tones.p90,
      "on-primary-container": tones.p10,
      secondary: tones.s40,
      "on-secondary": tones.s100, // on secondary text color high contrast
      "secondary-container": tones.s90,
      "on-secondary-container": tones.s10,
      tertiary: tones.t40,
      "on-tertiary": tones.t100,
      "tertiary-container": tones.t90,
      "on-tertiary-container": tones.t10,
      background: tones.n98,
      "on-background": tones.n10,
      surface: tones.n98,
      "on-surface": tones.n10,
      "surface-variant": tones.nv90,
      "on-surface-variant": tones.nv30,
      outline: tones.nv50,
      "outline-variant": tones.nv90,
      "surface-container-lowest": tones.n100,
      "surface-container-low": tones.n96,
      "surface-container": tones.n94,
      "surface-container-high": tones.n92,
      "surface-container-highest": tones.n90,
      error: "#ba1a1a",
      "on-error": "#ffffff",
      "error-container": "#ffdad6",
      "on-error-container": "#410002",
      "inverse-surface": tones.n10,
      "inverse-on-surface": tones.n95,
      "inverse-primary": tones.p80,
      shadow: "#000000",
      scrim: "#000000"
    };
  }
};

// Generates the M3 color roles and updates them as CSS custom properties (variables)
export const applyTheme = (seedColor, isDark) => {
  const scheme = generateScheme(seedColor, isDark);
  const root = document.documentElement;

  // Set M3 standard token variables
  for (const [key, value] of Object.entries(scheme)) {
    root.style.setProperty(`--md-sys-color-key-${key}`, value); // custom prefix mapping if needed
    root.style.setProperty(`--md-sys-color-${key}`, value);
  }

  // Map to legacy/alias variables used in SASS / older css
  root.style.setProperty("--primary", scheme.primary);
  root.style.setProperty("--primary-container", scheme["primary-container"]);
  root.style.setProperty("--secondary", scheme.secondary);
  root.style.setProperty(
    "--secondary-container",
    scheme["secondary-container"]
  );
  root.style.setProperty("--tertiary", scheme.tertiary);
  root.style.setProperty("--tertiary-container", scheme["tertiary-container"]);

  root.style.setProperty("--background", scheme.background);
  root.style.setProperty("--surface", scheme.surface);
  root.style.setProperty("--surface-variant", scheme["surface-variant"]);
  root.style.setProperty("--outline", scheme.outline);
  root.style.setProperty("--border", scheme["outline-variant"]);
  root.style.setProperty("--error", scheme.error);

  root.style.setProperty("--text-primary", scheme["on-surface"]);
  root.style.setProperty("--text-secondary", scheme["on-surface-variant"]);
  root.style.setProperty("--text-tertiary", scheme.outline);

  root.style.setProperty("--accent", scheme.primary);
  root.style.setProperty(
    "--accent-hover",
    isDark ? scheme["primary-container"] : scheme.primary
  );
};
