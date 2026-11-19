# SkyNest Co-Living Spaces – Website Project

A five-page demonstration website for **SkyNest Co-Living Spaces**, a fictional co-living
business in Dubai. Built with **React** for a BTEC IT assignment.

> All business details, prices and packages are fictional and for demonstration only.

---

## 1. How to run the website

You need **Node.js** installed (version 18 or newer). Check with `node -v` in a terminal.

1. Open the `skynest-v2` folder (the improved version) or the `skynest-v1` folder (the original)
   in **Visual Studio Code** (File → Open Folder…).
2. Open the terminal in VS Code (View → Terminal).
3. The first time only, install the project's packages:
   ```
   npm install
   ```
4. Start the website:
   ```
   npm run dev
   ```
5. Your browser opens **http://localhost:5173**. If it does not, copy that address into your browser.
6. To stop the website, click in the terminal and press **Ctrl + C**.

An internet connection is needed for the photos, fonts and map.

Other commands:

| Command | What it does |
|---|---|
| `npm run dev` | Runs the website for development (updates when you save a file) |
| `npm run build` | Creates the finished, optimised website in a `dist` folder |
| `npm run preview` | Shows the finished `dist` version in the browser |

---

## 2. Folder structure

```
website scool/
├── README.md                 ← this file
├── docs/
│   ├── CHANGE-LOG.md         ← record of every version and modification
│   ├── TESTING-CHECKLIST.md  ← tests to carry out and record results
│   └── SCREENSHOT-GUIDE.md   ← list of screenshots to capture for the assignment
├── evidence/
│   ├── version-1/            ← V1 full-page screenshots + saved copies of all 5 pages
│   ├── version-2/            ← V2 full-page screenshots, saved pages, test results
│   └── comparisons/          ← before/after pairs 01–14 (same screen size and position)
├── skynest-v1/               ← VERSION 1 – Initial Design (kept unchanged)
├── skynest-v2/               ← VERSION 2 – Improved Design (after feedback)
└── _old-nexus-draft/         ← an earlier unrelated draft (not part of SkyNest)
```

Version 2 is a separate copy, so both versions can be run and compared. To run both at once,
start Version 1 first (it uses port 5173); Vite then gives Version 2 the next free port
(for example 5174) and shows the address in the terminal. The structure below is Version 1.
Version 2 adds `Photo.jsx`, `MobileContactBar.jsx` and `src/data/facilities.js`. See
`docs/CHANGE-LOG.md` for every change.

### Inside `skynest-v1/`

```
skynest-v1/
├── index.html              ← the single HTML page React runs inside
├── package.json            ← project name, commands and dependencies
├── vite.config.js          ← settings for Vite (the development server)
├── public/
│   └── favicon.svg         ← the small logo in the browser tab
└── src/
    ├── main.jsx            ← starting point: loads styles and the App
    ├── App.jsx             ← shared layout (header, footer) and the list of pages
    ├── components/         ← reusable building blocks
    │   ├── Header.jsx      ← logo, navigation, mobile menu
    │   ├── Footer.jsx      ← footer on every page
    │   ├── Logo.jsx        ← SkyNest logo (roof, nest and bird)
    │   ├── Button.jsx      ← one button style used everywhere
    │   ├── PageBanner.jsx  ← heading + photo at the top of inner pages
    │   ├── IconCard.jsx    ← card with icon (benefits, facilities…)
    │   ├── PackageCard.jsx ← one accommodation package
    │   ├── ComparisonTable.jsx ← package comparison table
    │   ├── FaqAccordion.jsx    ← clickable FAQ questions
    │   ├── EnquiryForm.jsx     ← contact form + validation
    │   ├── Icon.jsx        ← the line icons
    │   └── ScrollToTop.jsx ← scrolls to the top when the page changes
    ├── pages/              ← one file per page
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Packages.jsx
    │   ├── Faq.jsx
    │   ├── Contact.jsx
    │   └── NotFound.jsx    ← shown for addresses that do not exist
    ├── data/               ← the content, kept separate from the layout
    │   ├── packages.js     ← package names, prices, features, comparison rows
    │   ├── faqs.js         ← FAQ questions and answers
    │   ├── images.js       ← every photo address and its alt text
    │   └── siteInfo.js     ← email, phone, location, hours
    ├── hooks/
    │   └── usePageTitle.js ← sets the browser tab title
    └── styles/
        ├── global.css      ← colours, fonts, buttons, layout helpers
        └── pages.css       ← styles for individual pages
```

Each component has its own `.css` file next to it (for example `Header.css`).

### How it fits together (simple explanation)

- **React components** are reusable pieces. For example, `PackageCard` is written once and
  used three times, once for each package.
- **React Router** switches between pages without reloading (`/`, `/about`, `/packages`,
  `/faq`, `/contact`).
- **Data files** hold the text and prices. To change a price, edit `src/data/packages.js` and
  both the cards and the comparison table update automatically.
- **useState** is used for things that change on screen: the mobile menu (open/closed),
  the FAQ (which answers are open) and the form (what the user typed, any errors).

---

## 3. Key features

| Feature | Where | How it works |
|---|---|---|
| Mobile menu | `Header.jsx` | "Menu" button toggles the links; closes with Escape or after choosing a page |
| FAQ accordion | `FaqAccordion.jsx` | Each question is a `<button>`; `aria-expanded` and `hidden` show/hide the answer |
| Enquire Now → form | `PackageCard.jsx`, `Contact.jsx` | Link adds `?package=comfort`; the Contact page reads it and pre-selects the package |
| Form validation | `EnquiryForm.jsx` | `validate()` checks each field and returns error messages |
| Demo confirmation | `EnquiryForm.jsx` | Shown after valid submission; nothing is sent or stored (no backend) |
| Comparison table | `ComparisonTable.jsx` | Scrolls sideways inside its box on small screens; first column stays fixed |

### Accessibility features

- Semantic HTML: `header`, `nav`, `main`, `footer`, `section`, `article`, real `button`s and tables.
- One `h1` per page and headings in order (no skipped levels).
- "Skip to main content" link (press **Tab** once on any page).
- Visible teal focus outline on every link, button and field.
- Alt text on every meaningful image.
- Every form field has a `<label>`. Errors use text, an icon and a thicker border, not
  only colour, and are linked to their field with `aria-describedby`.
- The current page in the menu is underlined as well as coloured, and marked with `aria-current`.
- Respects the "reduce motion" setting on the user's device.

---

## 4. Credits

- Photos: [Unsplash](https://unsplash.com) (free to use under the Unsplash licence).
- Icons: drawn in the style of [Feather Icons](https://feathericons.com) (MIT licence).
- Fonts: Inter and Plus Jakarta Sans from Google Fonts.
- Map: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
