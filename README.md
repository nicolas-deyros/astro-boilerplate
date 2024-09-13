# Astro Boilerplate

This project is based on the [ixartz](https://github.com/ixartz) [Astro Boilerplate](https://github.com/ixartz/Astro-boilerplate/tree/main) but uses the most updated versions of Husky, Commitlint, and Eslint.

Also took the liberty of adding some extras like:

- Styleint
- Prettier
- Astro DB
- MDX support
- Prefetch
- Partytown
- Sitemap

## 🗂️ Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .husky/
├── .vscode/
├── db/
├── public/
├── src/
│   └── components/
│   └── layouts/
│   └── pages/
│       └── index.astro
│   └── styles/
│       └── global.css
│   └── env.d.ts
└── .gitignore
└── .prettierrc.mjs
└── astro.config.mjs
└── commitlint.config.js
└── eslint.config.js
└── package-lock.json
└── package.json
└── README.md
└── stylelint.config.js
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Based on its file name, each page is exposed as a route.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Took the liberty of adding some extra folders like `components/`, `layouts/`, and `styles/` following the structure suggested by [Astro documentation](https://docs.astro.build/en/basics/project-structure/)

### Astro Integration

The project includes the following Astro integration packages:

1. [@astrojs/db](https://docs.astro.build/en/guides/integrations-guide/db/)
2. [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
3. [@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/)
4. [@astrojs/prefetch](https://docs.astro.build/en/guides/prefetch/)
5. [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## 🧞 Commands

All commands run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run eslint to find and fix JS bugs               |
| `npm run prettier`        | Run prettier in order to format your code        |
| `npm run stylelint`       | Run Stylint to find and fix CSS bugs             |
| `npm run prepare`         | Run Husky to lint your commit                    |

## Learn More

- [Astro documentation](https://docs.astro.build)
- [Husky documentation](https://typicode.github.io/husky/)
- [Commitlint documentation](https://commitlint.js.org/)
- [Prettier documentation](https://prettier.io/)
- [Eslint documentation](https://eslint.org/)
- [Stylelint documentation](https://stylelint.io/)

## Installation Steps

These are the steps done to reproduce this repository.

### 1. Install Astro Minimal latest version

```sh
npm create astro@latest -- --template minimal
```

### 2. Add Astro DB, MDX, PartyTown, Sitemap

```sh
npx astro add db mdx partytown sitemap
```

### 3. Setup Prettier

```sh
npm install --save-dev prettier prettier-plugin-astro
```

Create a .prettierrc.mjs config file at the root of your project and add prettier-plugin-astro to it.

```js
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
```

Add the prettier script to your `package.json` file

```json
"prettier": "prettier . --write",
```

### 4. Setup Stylelint

[Read Astro Styletint Documentation](https://github.com/ota-meshi/stylelint-config-html)

```sh
npm init stylelint
npm install --save-dev postcss-html stylelint-config-html
```

Create the `stylelint.config.js` file

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-html", "stylelint-config-html/astro"],
  rules: {},
  ignoreFiles: ["**/*.json", "*.config.*", "**/*.md", "**/env.*.*", "**/db/**"],
};
```

Add the stylelint script to your `package.json` file

```json
 "stylelint": "stylelint . -f verbose",
```

### 5. Setup Eslint

- [Read Astro Eslint Documentation](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/)
- [Read a11y Documentation](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#rule-strictness-in-different-modes)

```sh
npm init @eslint/config@latest
npm install --save-dev eslint-plugin-astro @typescript-eslint/parser eslint-plugin-jsx-a11y
```

Edith the `eslint.config.js` file

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,tsx,astro}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
];
```

Add the lint script to your `package.json` file

```json
"lint": "eslint . --fix",
```

### 6. Setup Husky and Commitlint

- [Husky documentation](https://typicode.github.io/husky/)
- [Commitlint documentation](https://commitlint.js.org/)

```sh
npm install --save-dev husky
npx husky init
# Add commit message linting to commit-msg hook
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

npm install --save-dev @commitlint/{cli,config-conventional}

# On Windows, run the following code instead of the previous one

npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

Config the `pre-commit` file of the `.husky/`

```sh
npm run prettier
npm run stylelint
npm run lint
```

Once you run `sh git commit -m 'your commit msg'` this will trigger Prettier, Stylelint, and Eslint NPM scripts

Config the `commit-msg` file of the `.husky/`

```sh
npx --no -- commitlint --edit \
```

It will trigger commitlint. Commits should follow the (Conventional Commits)[https://www.conventionalcommits.org/en/v1.0.0/]

> **Notes:**
>  Adding TailwindCSS

If you would like to add TailwindCSS to you project instead of building your own CSS, follow these steps:

1. Add Tailwind to Astro

```sh
npx astro add tailwind
```

This will create a `tailwind.config.mjs` file and integrate tailwind() in `astro.config.mjs`.

2. Add Prettier Tailwind Plugin

```sh
npm install --save-dev prettier-plugin-tailwindcss
```

Update the .prettierrc.mjs file to include the "prettier-plugin-tailwindcss"

```js
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
```
