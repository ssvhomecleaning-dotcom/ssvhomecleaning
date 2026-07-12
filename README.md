# SSV Home Cleaning Services — Premium V5 Website

A multi-page, SEO-optimized website for SSV Home Cleaning Services (Hyderabad, Telangana), built for Google Search, Google Ads, and Meta Ads.

## What's included

```
SSV-Home-Cleaning/
├── index.html            Homepage
├── about.html
├── services.html
├── gallery.html
├── contact.html           (lead form → thank-you.html)
├── privacy-policy.html
├── terms.html
├── thank-you.html          Use as your Google Ads / Meta conversion page
├── 404.html
├── robots.txt
├── sitemap.xml
├── manifest.json
├── assets/
│   ├── css/style.css       Global design tokens & layout
│   ├── css/responsive.css  Mobile breakpoints
│   ├── js/script.js        Nav, FAQ, counters, gallery filter, quote modal, click tracking
│   ├── images/              Placeholder photos (see below)
│   └── icons/favicon.png
└── README.md (this file)
```

## 1. Placeholder images — replace before launch

Every photo on the site is currently a **branded placeholder** generated locally (no stock photography license needed), sized to the exact dimensions each slot uses. Replace them with real photos **using the same filenames** and the site will update automatically:

| Filename | Used for | Recommended size |
|---|---|---|
| `hero-cleaning.jpg` | Homepage hero | 900×600 |
| `service-deep-cleaning.jpg` | Deep cleaning card | 800×450 |
| `service-kitchen.jpg` | Kitchen cleaning card | 800×450 |
| `service-bathroom.jpg` | Bathroom cleaning card | 800×450 |
| `service-sofa.jpg` | Sofa cleaning card | 800×450 |
| `service-water-tank.jpg` | Water tank cleaning card | 800×450 |
| `service-apartment.jpg` | Apartment/villa cleaning card | 800×450 |
| `about-team.jpg` | About page | 700×500 |
| `before-kitchen.jpg` / `after-kitchen.jpg` | Gallery pair | 500×350 each |
| `before-bathroom.jpg` / `after-bathroom.jpg` | Gallery pair | 500×350 each |
| `before-living.jpg` / `after-living.jpg` | Gallery pair | 500×350 each |
| `icons/favicon.png` | Browser tab icon | 192×192 |

**Real photos of your own team and work will do more for ad approval and conversion than any stock photo** — Meta and Google both favor landing pages that look authentic.

## 2. Testimonials are placeholders — replace before running ads

The three testimonials on the homepage are illustrative sample text, clearly marked in the code. **Do not publish or advertise fabricated reviews** — both Google and Meta prohibit fake testimonials, and it can also expose you to consumer-protection issues in India. Swap them for real customer feedback (a screenshot-style quote from WhatsApp with permission, or a Google review) before going live with ads.

## 3. Set your real domain

Search-and-replace `ssvhomecleaning.in` across all files if your actual domain differs, and update `sitemap.xml`, `robots.txt`, and the canonical/OG tags accordingly.

## 4. Wire up conversion tracking (needed for Google Ads & Meta Ads)

`script.js` already pushes events to `window.dataLayer` and calls `fbq('trackCustom', …)` for:
- `call_click` — when a visitor taps a `tel:` link
- `whatsapp_click` — when a visitor taps a WhatsApp link
- `quote_form_submit` / `contact_form_submit` — when a form is submitted
- `lead_thank_you_view` — fires on `thank-you.html` load

To actually receive these:
1. Add Google Tag Manager's snippet (or gtag.js) to the `<head>` of every page.
2. Add the Meta Pixel base code to the `<head>` of every page.
3. In Google Ads, create a conversion action reading the `call_click`, `whatsapp_click`, and `thank-you.html` pageview.
4. In Meta Events Manager, map the custom events the same way.

Set `contact.html` and `thank-you.html` as your Google Ads "final URL" landing pages once tracking is confirmed working (use GTM Preview mode / Meta Pixel Helper to check before spending on ads).

## 5. Before submitting ads for review

- [ ] Real domain + working HTTPS
- [ ] Real photos replacing all placeholders
- [ ] Real testimonials (or remove the section)
- [ ] Privacy Policy and Terms pages reviewed for accuracy
- [ ] Phone number and WhatsApp number confirmed working
- [ ] GTM / Meta Pixel installed and firing (test in each platform's debug tool)
- [ ] Site tested on an actual phone for tap-target size and load speed

## 6. Performance notes

- Images are lazy-loaded except the hero (loaded eagerly for fast first paint).
- Fonts are preconnected and loaded with `display=swap`.
- CSS/JS are already split into small, cacheable files — minify them with any build tool (e.g. `esbuild`, `cssnano`) as a final step before deployment if you want a small extra speed boost.

## 7. Local SEO coverage

The site targets these Hyderabad-area keywords in copy, meta tags, and structured data: Gachibowli, Hitech City, Madhapur, Kondapur, Miyapur, Kukatpally, Jubilee Hills, Banjara Hills, Secunderabad, Uppal, LB Nagar, Manikonda, Nallagandla, Attapur. These currently live as a "Service Areas" section and FAQ answer rather than 14 separate pages — that keeps the site from looking thin/duplicated to Google. If you want dedicated per-area landing pages later (useful for very targeted Google Ads campaigns), they can be built from the `services.html` template with area-specific copy.
