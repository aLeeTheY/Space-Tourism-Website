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
    🚀 A multi-page responsive website layout for a fictional space tourism company.
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

The primary goal of this project is to build a multi-page responsive website to practice skills with **Sass** and **TypeScript**.

The project is implemented without frameworks or CMS, focusing on a clean and understandable architecture.  
**Sass** is used to organize and scale the styles, while **TypeScript** handles the client-side logic for tab switching.

### Design

The site design is based on the [**Space Tourism**](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) layout, created in [**Figma**](https://www.figma.com/) and provided by the [**Frontend Mentor**](https://www.frontendmentor.io/) platform.

The main task was to reproduce the proposed interface with maximum accuracy and adapt it to different screen resolutions.

### Preview

Below you can see a **website preview** (_**Desktop + Mobile**, click the image to open the live demo_):

<div align="center">

[![Website Preview][website-preview]](https://aleethey.github.io/Space-Tourism-Website/)

</div>

### Key Features

- **Responsive Design**: Fully adapted for Desktop, Tablet, and Mobile using CSS media queries.
- **Pixel Perfect**: Layout matches the design mockup as closely as possible.
- **UX/UI**: Smooth animations enhance the visual experience.
- **BEM Methodology**: CSS class naming follows the Block-Element-Modifier methodology.
- **Build Process**: Modern tools simplify development and extend the capabilities of standard CSS and JavaScript.
- **Static Content**: No CMS or server-side page generation is used.
- **Lightweight**: Scores **100/100 in [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) Performance** and **90+ in other metrics**.
- **Template Versatility**: The project can serve as a template for other static websites.

#### Google Lighthouse Benchmark

To verify the Lighthouse scores, here are the results (**Desktop + Mobile**):

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
│   └── preview/
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
> This information applies to version **[1.0.5](https://github.com/aLeeTheY/Space-Tourism-Website/releases/tag/1.0.5)**. At the time of verification, the project was rendered correctly in the latest stable versions of all [supported browsers](#supported-browsers).
>
> **Last verification date: February 10, 2026**

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

- **Element Positioning**: The design mockup did not always make it obvious which hierarchy to use when building the DOM structure.
- **Typography**: Typography classes needed to be separated from other styles to avoid code duplication.
- **Multi-file Sass**: A well-organized structure of Sass files was required to separate component and page styles.
- **Responsiveness**: Developing the responsive version required considering a large number of elements whose styles change depending on the device. Some differences amounted to only 1–2 CSS properties, making it harder to identify and fix discrepancies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Key Skills

- **UI/UX Design**: Working with ready-made design mockups and translating them into HTML/CSS.
- **BEM Methodology**: Creating a clear and scalable CSS class structure using BEM methodology.
- **TypeScript**: Implementing client-side logic for tab switching.
- **Responsive Layout**: Developing a multi-page responsive interface.
- **Documentation & GitHub**: Writing documentation and README.md files using Markdown, version control with Git.
- **Dependency Management & Build**: Using `npm` for dependency management and project builds.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Develop HTML documents and CSS styling for pages:
  - [x] `index.html`
  - [x] `destination.html`
  - [x] `crew.html`
  - [x] `technology.html`
- [x] Implement responsiveness for **Tablet**
- [x] Implement responsiveness for **Mobile**
- [x] Verify that the result matches the design mockup
- [x] Prepare documentation for GitHub

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
