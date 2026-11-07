#!/usr/bin/env python3
"""Build data/branding.js from the two clipboard logo images."""
import base64, os

ROOT = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.dirname(ROOT)
with open(os.path.join(os.path.expanduser('~'), '.workbuddy-ai', 'clipboard-images',
                       'clipboard-2026-10-03T17-43-07-593Z-646db468.png'), 'rb') as f:
    lotus = base64.b64encode(f.read()).decode('ascii')
with open(os.path.join(os.path.expanduser('~'), '.workbuddy-ai', 'clipboard-images',
                       'clipboard-2026-10-03T17-43-07-595Z-5edfe555.png'), 'rb') as f:
    wordmark = base64.b64encode(f.read()).decode('ascii')

template = r"""/* ============================================================================
   BRANDING  --  Brand assets + identity for Brenda Le Wellness
   ----------------------------------------------------------------------------
   This module exposes BRAND with:
     - logo_lotus / logo_wordmark : embedded PNG data URIs
     - name / credentials         : shown on the handout header
     - colors / fonts             : accent palette + typography
   Logos are embedded as data URIs so the app stays a single self-contained
   file (no external image dependencies, no broken-link risk).
   To swap logos: replace the two PNG files in clipboard-images then rerun.
   ========================================================================== */
const BRAND = {
  name: 'Brenda Le Wellness',
  credentials: 'Brenda Le, RD',
  contact: '',

  /* Accent palette -- used by CSS variables and PDF handout */
  colors: {
    primary:  '#495a58',  // deep sage green -- headings, lines
    accent:   '#d4967d',  // warm peach -- kicker, focus highlights
    neutral:  '#dcd9d0',  // soft sand -- subtle backgrounds, dividers
    ink:      '#2a3432',  // body text
    muted:    '#7a847f',  // secondary text
    bg:       '#faf8f4',  // page background
    panel:    '#ffffff'
  },

  /* Typography -- Lora for headings, Source Sans Pro for body. */
  fonts: {
    heading: "'Lora', Georgia, 'Times New Roman', serif",
    body:    "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },

  /* Embedded logos (PNG data URIs) */
  logo_lotus:    'data:image/png;base64,__LOTUS__',
  logo_wordmark: 'data:image/png;base64,__WORDMARK__'
};

if (typeof window !== 'undefined') window.BRAND = BRAND;
"""
out = template.replace('__LOTUS__', lotus).replace('__WORDMARK__', wordmark)
with open(os.path.join(PROJ, 'data', 'branding.js'), 'w', encoding='utf-8') as f:
    f.write(out)
print('data/branding.js written,', os.path.getsize(os.path.join(PROJ, 'data', 'branding.js')), 'bytes')