<div align="center">
<img src="public/icon-128.png" alt="logo"/>
<h1> Chrome Extension Boilerplate with<br/>React + Vite + TypeScript</h1>

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)

</div>

## Table of Contents

- [Intro](#intro)
- [Features](#features)
- [Tools](#tools)
- [Installation](#installation)
  - [Procedures](#procedures)
- [Screenshots](#screenshots)
  - [NewTab](#newtab)
  - [Popup](#popup)  
- [Documents](#documents)


## Intro <a name="intro"></a>

> The focus of this extension is to provide address information from a real estate page.

## Features <a name="features"></a>

-   User Authentication: Users can sign in to the Chrome extension using their Google credentials, and the Google Sign-In API is used to handle the authentication flow.

-   Data Scraping: The extension scrapes data from the Redfin website, including the address, price, and taxes, using JavaScript and DOM manipulation.

-   Data Display: The scraped data is displayed in a popup window, using HTML and CSS to create a simple user interface that displays the data in a clear and organized manner.

-   Data Storage: The extension creates a CSV file that you can downlaod and save to your computer, which contains the scraped data.

-   Usage Tracking: The extension tracks the number of times the user has used the scraper during their current session and displays the count in the popup window.

## Tools <a name="features"></a>
[boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite) 

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- HRR(Hot Rebuild & Refresh/Reload)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>
1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest** 
3. Run `yarn install` or `npm i` (check your node version >= 16.6, recommended >= 18)
4. Run `yarn dev` or `npm run dev`
5. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
6. If you want to build in production, Just run `yarn build` or `npm run build`.

## Documents <a name="documents"></a>
- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)



---
## Thanks To

