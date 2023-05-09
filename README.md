# :page_with_curl: Form Challenge

:scroll: Creation of a website that will display a form.

Main features:

- Form contains three following fields:
  - **name** (text field)
  - **preparation_time** (duration field, format xx:xx:xx)
  - **type** (select field, options: pizza, soup, sandwich)
- Form displays conditionally other fields (after selecting dish type):
  - pizza: **no_of_slices** (number field) and diameter (float field)
  - soup: **spiciness_scal** (scale 1-10)
  - sandwich: **slices_of_bread** (number field)
- All fields are required (fields depending on the dish type should be required conditionally based on what type of dish is selected)

## Live demo

:computer: [Form Challenge](https://bart-form-challange.netlify.app/)

## Installation

Clone this repository and npm install:

```
git clone https://github.com/B4rt0sz/form-challenge.git
cd form-challenge
npm install --force
```

## How to run the app

You can see it immediately by following the link in the `Live demo` section or after `Installation` step you have two choices:

1. You can use `npm start` in the main app folder, to run the app in the development mode.

- It should open automatically but if not please use `http://localhost:8080` to view it in the browser.

2. You can use `npm run build`, it will build the app for the production to the `dist` folder.

- Now please go to the dist folder `cd dist` and use `npx serve`, now you can use `http://localhost:3000` to view it in the browser.

## NPM and Node versions:

NPM version 9.6.6

Node version: 18.16.0

## For the project I used:

- HTML
- CSS/SCSS
- React
- TypeScript
- Webpack
- React Final Form
- Axios

## Task took me:

Around 10-12 hours

## License

Copyright (c) 2023 Bartosz Szućko
