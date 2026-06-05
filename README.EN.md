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
    🚀 Multi-page website for the Space Tourism company with adaptive layout.
    <br />
    <br />
    <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">Design (Layout)</a>
    &middot;
    <a href="https://aleethey.github.io/Space-Tourism-Website/">Live Demo</a>
    &middot;
    <a href="https://github.com/aLeeTheY/Space-Tourism-Website/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  </p>

[![Русский](https://img.shields.io/badge/Русский-blue)](README.md)
[![English](https://img.shields.io/badge/English-blue)](README.EN.md)

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
        <li>
          <a href="#preview">Preview</a>
          <ul>
            <li><a href="#interface-preview">Interface Showcase (Desktop + Mobile)</a></li>
            <li><a href="#adaptive-preview">Adaptive Design Showcase (DevTools Stretch Test)</a></li>
          </ul>
        </li>
        <li>
          <a href="#key-features">Key Features</a>
          <ul>
            <li><a href="#google-lighthouse-benchmark">Google Lighthouse Benchmark</a></li>
          </ul>
        </li>
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

The main goal of the project is to develop a multi-page responsive website to practice architectural approaches using **Sass** and **TypeScript**.

The project was built without any third-party UI frameworks or CMS, focusing instead on creating a clean and scalable codebase. **Sass** is utilized for modular style organization, while **TypeScript** ensures type-safe client-side logic for managing UI states (tab switching, interactive pagination, and navigation).

### Design

The visual component is based on the [**Space Tourism**](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) mockup from the [**Frontend Mentor**](https://www.frontendmentor.io/) platform. The key objective was a high-fidelity (**Pixel Perfect**) interface implementation and its adaptation to various screen resolutions while maintaining the integrity of the original design system.

### Preview

<!-- Below you can see a **website preview** (_**Desktop + Mobile**, click the image to open the live demo_): -->

Below is an **interactive demonstration** of the project (_click on any preview image to open the live demo_):

<div align="center">

#### Interface Showcase (Desktop + Mobile) <a id="interface-preview"></a>

[![Interface Showcase][interface-preview-gif]](https://aleethey.github.io/Space-Tourism-Website/)

<br />

#### Adaptive Design Showcase (DevTools Stretch Test) <a id="adaptive-preview"></a>

[![Adaptive Design Showcase][adaptive-preview-gif]](https://aleethey.github.io/Space-Tourism-Website/)

</div>

### Key Features

- **Responsive Design**: Comprehensive interface adaptation for Desktop, Tablet, and Mobile viewports via CSS media queries.
- **Pixel Perfect Fidelity**: High-precision implementation ensuring 1:1 design-to-code consistency across all layouts.
- **Enhanced UI/UX**: Implementation of smooth transitions and micro-interactions to optimize user engagement.
- **BEM Methodology**: Utilization of `Block-Element-Modifier` naming convention for style isolation and maintainability.
- **Modern Build Workflow**: Deployment of modern tooling to extend standard CSS/JS capabilities and streamline development.
- **Static Architecture**: Engineered as a client-side static application without reliance on CMS or Server-Side Rendering (SSR).
- **Performance Optimization**: Achieved a **100/100 [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) Performance score** and **90+ across all other benchmarks**.
- **Template Versatility**: Clean, modular project structure designed for easy adaptation as a boilerplate for future static sites.
- **Cross‑browser CSS Stability**: Automated vendor prefixing via PostCSS + Autoprefixer ensures consistent rendering across all [supported browsers](#supported-browsers).

#### Google Lighthouse Benchmark

To confirm the high performance scores in the \***\*Google Lighthouse** benchmark, the main page test results are presented below (**Desktop + Mobile**):

<div align="center">

|                               Desktop                                |                               Mobile                               |
| :------------------------------------------------------------------: | :----------------------------------------------------------------: |
| ![Lighthouse Desktop](docs/benchmark/lighthouse__index_desktop.avif) | ![Lighthouse Mobile](docs/benchmark/lighthouse__index_mobile.avif) |

</div>

### Built With

The project was built using the following tools and technologies:

- **Environment**:
  - [![Node.js][NodeJS-logo]][NodeJS-url]
    - [![npm][Npm-logo]][Npm-url]

- **Frontend**:
  - [![HTML][HTML-logo]][HTML-url]
  - [![Sass][Sass-logo]][Sass-url]
  - [![TypeScript][TypeScript-logo]][TypeScript-url]

- **Build Tools**:
  - [![esbuild][esbuild-logo]][esbuild-url]
  - [![BrowserSync][BrowserSync-logo]][BrowserSync-url]
  - [![PostCSS][PostCSS-logo]][PostCSS-url]
    - [![Autoprefixer][Autoprefixer-logo]][Autoprefixer-url]
      - [![Browserslist][Browserslist-logo]][Browserslist-url]

- **Code Quality**:
  - [![EditorConfig][EditorConfig-logo]][EditorConfig-url]
  - [![Prettier][Prettier-logo]][Prettier-url]

- **Version Control**:
  - [![Git][Git-logo]][Git-url]

### Project Structure

Main directories and files:

```text
Space-Tourism-Website/
│
├── .vscode/
│   └── tasks.json            # Extension file for `spencerwmiles.vscode-task-buttons`
│
├── docs/                     # Project documentation
│   ├── benchmark/
│   │   ├── lighthouse__index_desktop.avif
│   │   └── lighthouse__index_mobile.avif
│   │
│   └── preview/
│       ├── adaptive_design.gif
│       └── interface.gif
│
├── public/                   # Compiled project files and production assets
│   ├── assets/               # Images and static resources
│   ├── css/
│   ├── js/
│   │
│   ├── apple-touch-icon.png
│   ├── crew.html
│   ├── destination.html
│   ├── favicon-96x96.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── index.html
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── sitemap.xml
│   ├── technology.html
│   ├── web-app-manifest-192x192.png
│   └── web-app-manifest-512x512.png
│
├── src/
│   ├── scss/                 # Source Sass files
│   └── ts/                   # Source TypeScript files
│
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json              # Project configuration and dependencies
├── prettier.config.mts
├── README.EN.md
├── README.md
└── tsconfig.json             # TypeScript configuration settings
```

### Supported Browsers

The project has been tested for correct rendering and script stability in the latest stable versions of the following browsers:

- [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
- [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
- [![Yandex][Yandex-logo]][Yandex-url]
- [![Firefox][Firefox-logo]][Firefox-url]
- [![Opera][Opera-logo]][Opera-url]

> [!IMPORTANT]
> This information applies to version **[1.2.0](https://github.com/aLeeTheY/Space-Tourism-Website/releases/tag/1.2.0)**. At the time of verification, the project was rendered correctly in the latest stable versions of all [supported browsers](#supported-browsers).
>
> **Last verification date: June 5, 2026**

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

|         Command          |                                    Description                                     |
| :----------------------: | :--------------------------------------------------------------------------------: |
|     `npm run clean`      |                 Remove compiled CSS and JS directories (`rimraf`)                  |
|    `npm run build:ts`    |                 Compile regular JS bundles via `esbuild` (ES2017)                  |
|  `npm run build:ts:min`  |             Compile minified JS bundles with sourcemaps via `esbuild`              |
|   `npm run build:scss`   |    Compile regular CSS via `sass`, then process with `PostCSS` + `Autoprefixer`    |
| `npm run build:scss:min` | Compile minified CSS with sourcemaps, then process with `PostCSS` + `Autoprefixer` |
|    `npm run watch:ts`    |                     Watch TS files and auto-compile regular JS                     |
|   `npm run watch:scss`   |                   Watch SCSS files and auto-compile regular CSS                    |
|     `npm run watch`      |                Run JS and CSS watchers in parallel (`npm-run-all`)                 |
|  `npm run build:debug`   |           Clean output directories, then build regular CSS and JS files            |
| `npm run build:release`  |           Clean output directories, then build minified CSS and JS files           |
|     `npm run serve`      |           Start `BrowserSync` local server watching the `public/` folder           |
|     `npm run start`      |        Execute `build:release` and launch the local server with live reload        |

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development Challenges

- **DOM Structure Design**: The non-obvious element hierarchy in the layout required additional analysis to establish a logical and semantically correct markup structure.
- **Typography Architecture**: Implemented a system of Sass mixins for font management. This allowed text parameters (size, line-height, weight) to be encapsulated and reused across component styles, preventing code duplication and streamlining scalability.
- **Sass Architecture**: Organized a multi-file style structure with a clear separation of global variables, mixins, components, and page-specific styles.
- **Responsive Layout Complexity**: Managing a large volume of media queries, where differences often came down to just 1–2 properties, demanded high precision during debugging and layout verification.
- **Tap-Response Customization**: Disabled native system highlight overlays for links and interactive elements on mobile devices to eliminate visual artifacts upon clicking.
- **Fixing the "Sticky" Hover Effect**: Resolved a common mobile browser bug where buttons retained their `:hover` state after being tapped or when navigating back through history. The issue was fixed by utilizing the `@media (hover: hover)` media query.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Key Skills

- **UI/UX Implementation**: Gained experience in accurately translating complex design layouts into semantic HTML markup while maintaining pixel-perfect fidelity.
- **Style Architecture (BEM)**: Designed a scalable and maintainable CSS structure using the BEM methodology, effectively eliminating selector specificity conflicts.
- **Client-Side Logic (TypeScript)**: Developed type-safe logic for interactive components (tabs, pagination) using TypeScript to ensure code stability and readability.
- **Responsive Web Design**: Created resilient responsive interfaces for multi-page applications with a deep focus on mobile UX.
- **Page Load Optimization**: Improved loading performance (LCP) by adopting the `.webp` format, applying balanced asset compression with minimal quality loss, and leveraging non-blocking script loading (`async`/`defer`).
- **Workflow Organization**: Developed professional skills in Git repository management, branching workflows, handling dependencies via `npm`, and documenting project architecture.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] HTML document development and page styling:
  - [x] `index.html`
  - [x] `destination.html`
  - [x] `crew.html`
  - [x] `technology.html`
- [x] Implementation of interactive tabs and pagination logic in TypeScript
- [x] Integration of responsiveness for tablet devices (**Tablet**)
- [x] Integration of responsiveness for mobile devices (**Mobile**)
- [x] Verification of design layout compliance (**Quality Assurance**)
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

<!-- [![GitHub][GitHub-logo]](https://github.com/aLeeTheY)
[![Telegram][Telegram-logo]](https://t.me/aLeeTheY)
[![Gmail][Gmail-logo]](mailto:aleethey@gmail.com) -->

GitHub: [aLeeTheY](https://github.com/aLeeTheY)
<br/>
Telegram: [@aLeeTheY](https://t.me/aLeeTheY)
<br/>
Email: [aleethey@gmail.com](mailto:aleethey@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

[aLeeTheY](https://github.com/aLeeTheY) expresses gratitude to the developers and communities of the following projects:

- [Figma](https://www.figma.com/)
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
- [Browsersync](https://browsersync.io/)
- [EditorConfig](https://editorconfig.org/)
- [Prettier](https://prettier.io/)
- [PostCSS](https://postcss.org/)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [browserslist](https://github.com/browserslist/browserslist)

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
[PostCSS-logo]: https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white
[PostCSS-url]: https://postcss.org/
[Autoprefixer-logo]: https://img.shields.io/badge/Autoprefixer-DD3A0A?style=for-the-badge&logo=autoprefixer&logoColor=white
[Autoprefixer-url]: https://github.com/postcss/autoprefixer
[Browserslist-logo]: https://custom-icon-badges.demolab.com/badge/browserslist-1d1d1d?logo=browserslist&style=for-the-badge
[Browserslist-url]: https://github.com/browserslist/browserslist
[esbuild-logo]: https://img.shields.io/badge/esbuild-%23FFCF00.svg?style=for-the-badge&logo=esbuild&logoColor=black
[esbuild-url]: https://esbuild.github.io/
[BrowserSync-logo]: https://custom-icon-badges.demolab.com/badge/BrowserSync-F24747?logo=browsersync-white&style=for-the-badge
[BrowserSync-url]: https://browsersync.io/
[Prettier-logo]: https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black
[Prettier-url]: https://prettier.io/
[EditorConfig-logo]: https://custom-icon-badges.demolab.com/badge/EditorConfig-010101?logo=editorconfig&style=for-the-badge
[EditorConfig-url]: https://editorconfig.org/
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
[interface-preview-gif]: docs/preview/interface.gif
[adaptive-preview-gif]: docs/preview/adaptive_design.gif

<!-- ! 🚀 ┌──────────────────────────────────────┐ -->
<!-- ! 🚀 │       GIF MERGE & OPTIMIZATION       │ -->
<!-- ! 🚀 └──────────────────────────────────────┘ -->
<!-- ! ⚠️ WARNING: Input GIFs must have the EXACT SAME HEIGHT, or FFmpeg will fail! -->

<!-- * 🛠️ STEP 1: HORIZONTAL MERGE (FFmpeg) -->
<!-- * ffmpeg -i desktop.gif -i mobile.gif -filter_complex "[0]pad=iw+12:ih:0:0:color=0x00000000[left];[left][1]hstack,fps=20,split[x][z];[x]palettegen=stats_mode=diff[p];[z][p]paletteuse=dither=bayer:bayer_scale=3" combined.gif -->

<!-- * Under the hood: -->
<!-- * 💡 [0]pad=iw+12 -> adds a 12px transparent gap between GIFs -->
<!-- * 💡 hstack       -> stacks horizontally (use vstack for vertical) -->
<!-- * 💡 fps=20       -> caps the framerate -->

<!-- ? ⚡ STEP 2: COMPRESSION (Gifsicle) -->
<!-- ? gifsicle -O3 combined.gif -o combined_optimized.gif -->

<!-- ? Under the hood: -->
<!-- ? 💡 -O3 -> enables maximum optimization level (drastically drops file size) -->
