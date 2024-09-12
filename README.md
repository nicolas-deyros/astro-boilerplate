# Astro Boilerplate

## 🚀 Project Structure

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

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Astro Integration

The project includes:

1. [Astro DB](https://docs.astro.build/en/guides/integrations-guide/db/)
2. [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)
3. [Partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            |
| `npm run prettier`        |
| `npm run stylelint`       |
| `npm run prepare`         |

## Learn More

- [Astro documentation](https://docs.astro.build)
- [Husky documentation](https://typicode.github.io/husky/)
- [Commitlint documentation](https://commitlint.js.org/)
- [Prettier documentation](https://prettier.io/)
- [Eslint documentation](https://eslint.org/)
- [Stylelint documentation](https://stylelint.io/)
- [Astro documentation](https://docs.astro.build)

## Installation Steps

This are the steps done to reproduce this repository

1. Install Astro minimal latest version

```sh
npm create astro@latest -- --template minimal
```
