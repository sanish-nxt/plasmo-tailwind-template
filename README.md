# Plasmo + Tailwind CSS Template

A minimal browser extension template with [Plasmo](https://www.plasmo.com/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- ⚡ Plasmo Framework for browser extensions
- 🎨 Tailwind CSS with JIT mode
- 📦 TypeScript support
- 🔧 Prettier with import sorting
- 🎯 Multi-browser support (Chrome, Firefox, Edge)

## Getting Started

### Installation

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

```bash
npm run dev
```

This will start the development server and watch for changes. Load the extension from `build/chrome-mv3-dev` in Chrome or `build/firefox-mv2-dev` in Firefox.

### Building

For Chrome/Edge:
```bash
npm run build
```

For Firefox:
```bash
npm run build:firefox
```

### Packaging

For Chrome/Edge:
```bash
npm run package
```

For Firefox:
```bash
npm run package:firefox
```

## Project Structure

```
├── src/
│   ├── popup.tsx       # Main popup component
│   └── style.css       # Tailwind CSS imports
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── .prettierrc.mjs     # Prettier configuration
```

## Customization

### Tailwind CSS

All Tailwind classes are prefixed with `plasmo-` to avoid conflicts. Modify `tailwind.config.js` to customize your theme.

### Manifest Permissions

Update the `manifest` section in `package.json` to add permissions your extension needs.

## Learn More

- [Plasmo Documentation](https://docs.plasmo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
