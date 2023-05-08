# :page_facing_up: React with TypeScript Webpack 5 Template

:scroll: Webpack 5 template with React 18 with TypeScript 5 using Babel 7, HMR, Sass and PostCSS with a hot dev server and an optimized production build.

## Installation

Clone this repository and npm install:

```
git clone https://github.com/B4rt0sz/react-typescript-webpack-5-template.git
cd react-typescript-webpack-5-template
npm install
```

Alternative:

```
Use the green Template Button on top right of this repository.
```

#### Remember:

```
add .env.development and .env.production to your .gitignore!
```

## Usage

### Development server

```
npm start
```

You can view the development server at `localhost:8080` (You can change port in ./config/webpack.dev.js).

### Production build

```
npm run build
```

## Features

- [Webpack 5](https://webpack.js.org/)
- [React 18](https://reactjs.org/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Babel 7](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## Dependencies

### React

- [`react`](https://www.npmjs.com/package/react) - React is a JavaScript library for creating user interfaces. For creating React components
- [`react-dom`](https://www.npmjs.com/package/react-dom) - This package serves as the entry point to the DOM and server renderers for React
- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) - This package serves as DOM for React Router

### Babel

- [`@babel-runtime`](https://babeljs.io/docs/babel-runtime) - Contains Babel modular runtime helpers

## devDependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### TypeScript

- [`typescript`](https://www.typescriptlang.org/) - Adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS
- [`@types/react`](https://www.npmjs.com/package/@types/react) - Contains type definitions for React
- [`@types/react-dom`](https://www.npmjs.com/package/@types/react-dom) - Contains type definitions for react-dom
- [`@types/react-router-dom`](https://www.npmjs.com/package/@types/react-router-dom) - Contains type definitions for react-router-dom

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - Babel preset for all React plugins
- [`@babel/plugin-transform-runtime `](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Enables the re-use of Babel's injected helper code to save on codesize
- [`@babel/preset-typescript`](https://babel.dev/docs/babel-preset-typescript) - Recommended if you use TypeScript

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Loader to process CSS with PostCSS
- [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - Optimize and minimize CSS assets
- [`react-refresh`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - HMR using React Fast Refresh
- [`@pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - Dependency for `react-refresh-webpack-plugin` plugin
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copies individual files or entire directories, which already exist, to the build directory
- [`dotenv-webpack`](https://github.com/mrsteele/dotenv-webpack) - Supports dotenv and other environment variables
- [`image-minimizer-webpack-plugin`](https://github.com/webpack-contrib/image-minimizer-webpack-plugin) - Plugin and Loader to optimize (webp 90%) all images using [`sharp`](https://github.com/lovell/sharp)
- [`fork-ts-checker-webpack-plugin`](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) - Runs TypeScript type checker on a separate process

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`@babel/eslint-parser`](https://github.com/babel/babel-eslint) - Lint all valid Babel code with the ESLint
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implment prettier rules
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Implment import rules
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias) - Simple Node.js module import resolution plugin for `eslint-plugin-import`
- [`@babel/eslint-plugin`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin) - Companion rules for `@babel/eslint-parser`
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Runs Prettier as an ESLint rule
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - ESLint plugin enforces the Rules of Hooks
- [`eslint-plugin-eslint-comments`](https://github.com/mysticatea/eslint-plugin-eslint-comments) - Additional ESLint rules for ESLint directive comments
- [`prettier`](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - Provides lint rules for TypeScript codebases
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) - Leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code

## Author

Bartosz Szućko

## License

This project is open source and available under the [MIT License](LICENSE).
