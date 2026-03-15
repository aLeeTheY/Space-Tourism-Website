<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

![GitHub Last Commit][last-commit-shield]
![GitHub Repo Size][repo-size-shield]

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Space Tourism Website</h1>

  <p align="center">
    🚀 Responsive Space Tourism multipage site. Built with Sass & TypeScript. Pixel Perfect & 100/100 Lighthouse Performance.
    <br />
    <br />
    <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">Design (Layout)</a>
    &middot;
    <a href="https://aleethey.github.io/Space-Tourism-Website/">Live Demo</a>
    &middot;
    <a href="https://github.com/aLeeTheY/Space-Tourism-Website/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  </p>

[![Русский](https://img.shields.io/badge/Русский-blue)](README.md)
[![English](https://img.shields.io/badge/English-blue)](README.ENG.md)

</div>

<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#design">Design</a></li>
        <li><a href="#preview">Preview</a></li>
        <li><a href="#key-features">Key Features</a></li>
        <ul>
          <li><a href="#google-lighthouse-benchmark">Google Lighthouse Benchmark</a></li>
        </ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#supported-browsers">Supported Browsers</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#build-static-files">Build Static Files</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#available-commands">Available Commands</a></li>
      </ul>
    </li>
    <li><a href="#development-challenges">Development Challenges</a></li>
    <li><a href="#key-skills">Key Skills</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the Project

The primary goal of this project is to develop a multi-page responsive application to practice architectural patterns using **Sass** and **TypeScript**.

The project is implemented without external UI frameworks or CMS, focusing on a clean and scalable codebase. **Sass** is utilized for modular style organization, while **TypeScript** provides type-safe client-side logic for interface state management (tabs, pagination).

### Design

The UI is based on the [**Space Tourism**](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) design provided by [**Frontend Mentor**](https://www.frontendmentor.io/). The main objective was a high-fidelity (Pixel Perfect) implementation of the interface and its adaptation across various display resolutions while maintaining design system integrity.

### Preview

Below you can see a **website preview** (_**Desktop + Mobile**, click the image to open the live demo_):

<div align="center">

[![Website Preview][website-preview]](https://aleethey.github.io/Space-Tourism-Website/)

</div>

### Ключевые особенности

- **Responsive Design**: Comprehensive interface adaptation for Desktop, Tablet, and Mobile viewports via CSS media queries.
- **Pixel Perfect Fidelity**: High-precision implementation ensuring 1:1 design-to-code consistency across all layouts.
- **Enhanced UI/UX**: Implementation of smooth transitions and micro-interactions to optimize user engagement.
- **BEM Methodology**: Utilization of `Block-Element-Modifier` naming convention for style isolation and maintainability.
- **Modern Build Workflow**: Deployment of modern tooling to extend standard CSS/JS capabilities and streamline development.
- **Static Architecture**: Engineered as a client-side static application without reliance on CMS or Server-Side Rendering (SSR).
- **Performance Optimization**: Achieved a **100/100 [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) Performance score** and **90+ across all other benchmarks**.
- **Template Versatility**: Clean, modular project structure designed for easy adaptation as a boilerplate for future static sites.

#### Google Lighthouse Benchmark

To verify the performance excellence in the **Google Lighthouse** benchmark, the testing results are presented below (**Desktop + Mobile**):

<div align="center">

|                             Desktop                              |                             Mobile                             |
| :--------------------------------------------------------------: | :------------------------------------------------------------: |
| ![Lighthouse Desktop](project/lighthouse_benchmark__desktop.png) | ![Lighthouse Mobile](project/lighthouse_benchmark__mobile.png) |

</div>

### Built With

The project was built using the following tools and technologies:

- **FRONTEND**:
  - [![HTML][HTML-logo]][HTML-url]
  - [![Sass][Sass-logo]][Sass-url]
  - [![TypeScript][TypeScript-logo]][TypeScript-url]

  - **BUILD TOOLS**:
    - [![Node.js][NodeJS-logo]][NodeJS-url]
    - [![Npm][Npm-logo]][Npm-url]

- **VERSION CONTROL SYSTEM**:
  - [![Git][Git-logo]][Git-url]

### Project Structure

Main directories and files:

```text
Space-Tourism-Website/
│
├── .vscode/
│   └── tasks.json            # extension file for `spencerwmiles.vscode-task-buttons`
│
├── project/                  # miscellaneous project files
│   ├── preview/
│   │
│   ├── lighthouse_benchmark__desktop.png
│   └── lighthouse_benchmark__mobile.png
│
├── public/                   # compiled project files and assets
│   ├── assets/               # images and static resources
│   ├── css/
│   ├── js/
│   │
│   ├── crew.html
│   ├── destination.html
│   ├── favicon.ico
│   ├── index.html
│   └── technology.html
│
├── src/
│   ├── scss/                 # source Sass files
│   └── ts/                   # source TypeScript files
│
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json              # project configuration and dependencies
├── README.ENG.md
├── README.md
└── tsconfig.json             # TypeScript configuration
```

### Supported Browsers

The project has been tested for correct rendering and script stability in the latest stable versions of the following browsers:

- [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
- [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
- [![Yandex][Yandex-logo]][Yandex-url]
- [![Firefox][Firefox-logo]][Firefox-url]
- [![Opera][Opera-logo]][Opera-url]

> [!IMPORTANT]
> This information applies to version **[1.1.0](https://github.com/aLeeTheY/Space-Tourism-Website/releases/tag/1.1.0)**. At the time of verification, the project was rendered correctly in the latest stable versions of all [supported browsers](#supported-browsers).
>
> **Last verification date: March 16, 2026**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

_Follow the instructions below to build and run the project on a local server._

### Prerequisites

Install [Node.js][NodeJS-url].

Then download this repository as a ZIP archive or clone it using [Git][Git-url]:

```sh
git clone https://github.com/aLeeTheY/Space-Tourism-Website
```

### Installation

Navigate to the project directory and install all required dependencies:

```sh
npm install
```

### Build Static Files

Run the following command to compile Sass and TypeScript files into CSS and JavaScript:

```sh
npm run build:release
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

After completing the [Getting Started](#getting-started) steps, you can open the site manually by launching the `index.html` file from the `public/` folder in any supported browser.

Alternatively, you can start the site on a local server (`localhost`) with the following command:

```sh
npm run serve
```

### Available Commands

The project uses the following `npm` commands:

<div align="center">

|         Command          |                                       Description                                       |
| :----------------------: | :-------------------------------------------------------------------------------------: |
|     `npm run clean`      |                     Remove all previously compiled CSS and JS files                     |
|    `npm run build:ts`    |                                Compile regular JS files                                 |
|  `npm run build:ts:min`  |                                Compile minified JS files                                |
|  `npm run build:ts:all`  |                       Compile both regular and minified JS files                        |
|   `npm run build:scss`   |                                Compile regular CSS files                                |
| `npm run build:scss:min` |                               Compile minified CSS files                                |
| `npm run build:scss:all` |                       Compile both regular and minified CSS files                       |
|    `npm run watch:ts`    |               Automatically compile regular JS files when TS files change               |
|  `npm run watch:ts:min`  |              Automatically compile minified JS files when TS files change               |
|  `npm run watch:ts:all`  |      Automatically compile both regular and minified JS files when TS files change      |
|   `npm run watch:scss`   |          Automatically compile regular CSS files when SCSS (Sass) files change          |
| `npm run watch:scss:min` |         Automatically compile minified CSS files when SCSS (Sass) files change          |
| `npm run watch:scss:all` | Automatically compile both regular and minified CSS files when SCSS (Sass) files change |
|     `npm run watch`      |               Automatically compile JS and CSS when TS/SCSS files change                |
|  `npm run build:debug`   |                Build regular JS and CSS simultaneously (for development)                |
| `npm run build:release`  |                        Build minified JS and CSS for production                         |
|     `npm run serve`      |              Start a local server (`localhost`, for development / testing)              |
|     `npm run start`      |                Build JS and CSS in `release` mode + start a local server                |

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development Challenges

- **DOM Structure Engineering**: Resolved ambiguities in the design layout to build a logical and semantically correct document object model.
- **Typography Architecture**: Implemented a system of Sass mixins to manage fonts. This allowed for encapsulating text properties (font-size, line-height, weight) and reusing them across component styles, eliminating code redundancy and simplifying scaling.
- **Sass Modularization**: Established a multi-file architecture to strictly isolate global assets, components, and page-specific styles.
- **Responsive Complexity**: Managed granular style changes across various breakpoints, ensuring layout precision where differences were limited to single CSS properties.
- **Tap Highlight Suppression**: Disabled native mobile browser overlays on link-based buttons (`<a>`) to achieve clean, custom interaction feedback.
- **Sticky Hover Mitigation**: Resolved an issue where buttons retained their hover state during back navigation on touch devices by implementing `@media (hover: hover)` logic.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Key Skills

- **UI/UX Implementation**: Precision-driven conversion of complex design layouts into semantic HTML with a focus on pixel-perfect accuracy.
- **BEM Methodology**: Architecting scalable and maintainable CSS structures using BEM to prevent specificity conflicts.
- **Client-side Logic (TypeScript)**: Developed type-safe logic for interactive UI components (tabs, pagination) using TypeScript to ensure code stability and maintainability.
- **Responsive Web Design**: Engineering robust adaptive interfaces for multi-page applications with a mobile-first approach.
- **Performance Optimization**: Improved rendering speed (LCP) by implementing `.webp` imagery, balanced asset compression with minimal quality loss, and non-blocking script execution (`async/defer`).
- **Workflow & CI/CD**: Professional Git version control, dependency management via `npm`, and comprehensive project documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Development of HTML documents and page styling:
  - [x] `index.html`
  - [x] `destination.html`
  - [x] `crew.html`
  - [x] `technology.html`
- [x] Implementation of interactive tab and pagination logic using TypeScript
- [x] Responsive adaptation for **Tablet** viewports
- [x] Responsive adaptation for **Mobile** viewports
- [x] Design fidelity verification and **QA**
- [x] Preparation of technical documentation and `README.md`

The full list of planned features and known issues is available in the [Issues][issues-url] section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Copyright © 2025 [aLeeTheY](https://github.com/aLeeTheY)
<br/>
Distributed under the [MIT][license-url] License. See `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

GitHub: [aLeeTheY](https://github.com/aLeeTheY)
<br/>
Email: [aleethey@gmail.com](mailto:aleethey@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

[aLeeTheY](https://github.com/aLeeTheY) expresses gratitude to the developers and communities of the following projects:

- [Figma](https://www.figma.com/)
- [Frontend Mentor](https://www.frontendmentor.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Chocolatey](https://chocolatey.org/)
- [FFmpeg](https://www.ffmpeg.org/)
- [gifsicle](https://github.com/kohler/gifsicle)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)

Without these tools, the development of this project would have been **impossible**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/aLeeTheY/Space-Tourism-Website.svg?style=for-the-badge
[contributors-url]: https://github.com/aLeeTheY/Space-Tourism-Website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aLeeTheY/Space-Tourism-Website.svg?style=for-the-badge
[forks-url]: https://github.com/aLeeTheY/Space-Tourism-Website/network/members
[stars-shield]: https://img.shields.io/github/stars/aLeeTheY/Space-Tourism-Website.svg?style=for-the-badge
[stars-url]: https://github.com/aLeeTheY/Space-Tourism-Website/stargazers
[issues-shield]: https://img.shields.io/github/issues/aLeeTheY/Space-Tourism-Website.svg?style=for-the-badge
[issues-url]: https://github.com/aLeeTheY/Space-Tourism-Website/issues
[license-shield]: https://img.shields.io/github/license/aLeeTheY/Space-Tourism-Website.svg?style=for-the-badge
[license-url]: https://github.com/aLeeTheY/Space-Tourism-Website/blob/main/LICENSE
[last-commit-shield]: https://img.shields.io/github/last-commit/aLeeTheY/Space-Tourism-Website?style=for-the-badge
[repo-size-shield]: https://img.shields.io/github/repo-size/aLeeTheY/Space-Tourism-Website?style=for-the-badge
[HTML-logo]: https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge
[HTML-url]: https://html.spec.whatwg.org/
[Sass-logo]: https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge
[Sass-url]: https://sass-lang.com/
[TypeScript-logo]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge
[TypeScript-url]: https://www.typescriptlang.org/
[Git-logo]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=for-the-badge
[Git-url]: https://git-scm.com/
[NodeJS-logo]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge
[NodeJS-url]: https://nodejs.org/
[Npm-logo]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=for-the-badge
[Npm-url]: https://www.npmjs.com/
[Opera-logo]: https://img.shields.io/badge/Opera-FF1B2D?logo=Opera&logoColor=white&style=for-the-badge
[Opera-url]: https://www.opera.com/
[GoogleChrome-logo]: https://img.shields.io/badge/Google%20Chrome-4285F4?logo=GoogleChrome&logoColor=white&style=for-the-badge
[GoogleChrome-url]: https://www.google.com/chrome/
[MicrosoftEdge-logo]: https://custom-icon-badges.demolab.com/badge/Microsoft%20Edge-2771D8?logo=edge-white&logoColor=white&style=for-the-badge
[MicrosoftEdge-url]: https://www.microsoft.com/en-us/edge/
[Firefox-logo]: https://img.shields.io/badge/Firefox-FF7139?logo=firefoxbrowser&logoColor=white&style=for-the-badge
[Firefox-url]: https://www.firefox.com/
[Yandex-logo]: https://custom-icon-badges.demolab.com/badge/Yandex%20Browser-F03911?logo=yandex-browser&style=for-the-badge
[Yandex-url]: https://browser.yandex.com/
[website-preview]: project/preview/preview.gif
