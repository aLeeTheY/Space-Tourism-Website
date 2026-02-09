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

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Space Tourism Website</h1>

  <p align="center">
    Многостраничный адаптивный сайт вымышленной компании космического туризма.<br />
    Сделан по макету из Figma — чистый HTML + SCSS + TypeScript, без фреймворков.
    <br />
    <br />
    <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">Дизайн (макет)</a>
    &middot;
    <a href="https://aLeeTheY.github.io/Space-Tourism-Website/">Демо</a>
    &middot;
    <a href="https://github.com/aLeeTheY/Space-Tourism-Website/issues/new?labels=bug&template=bug-report---.md">Сообщить об ошибке</a>
  </p>
  <br />

  [![Русский](https://img.shields.io/badge/Русский-blue)](README.md)
  [![English](https://img.shields.io/badge/English-blue)](README.en-US.md)

</div>

<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
      <ul>
        <li><a href="#используемые-технологии">Используемые технологии</a></li>
        <li><a href="#поддерживаемые-браузеры">Поддерживаемые браузеры</a></li>
      </ul>
    </li>
    <li>
      <a href="#начало-работы">Начало работы</a>
      <ul>
        <li><a href="#предварительные-требования">Предварительные требования</a></li>
        <li><a href="#компиляция-статических-файлов">Компиляция статических файлов</a></li>
      </ul>
    </li>
    <li><a href="#использование">Использование</a></li>
    <li><a href="#лицензия">Лицензия</a></li>
    <li><a href="#автор">Автор</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## О проекте

Этот проект является частью моего портфолио и демонстрирует мои навыки в создании сайтов по макетам, предоставленным заказчиком — как в [Figma](https://www.figma.com/), так и в [Photoshop](https://www.adobe.com/products/photoshop.html).

Основной целью было создать чистую, высокопроизводительную фронтенд-архитектуру без использования сторонних UI-фреймворков или CMS-бэкенда.

Ключевые технические особенности:

- **Адаптивность**: реализована исключительно с помощью медиа-запросов CSS.
- **Контент**: весь контент статический (без [WordPress][WordPress-url] и аналогичных CMS).
- **Процесс сборки**: исходные файлы [Sass/SCSS][Sass-url] и [TypeScript][TypeScript-url] компилируются в стандартные [CSS][CSS-url] и [JavaScript][JavaScript-url]. Такой подход позволяет поддерживать порядок в исходном коде и делает проект универсальной основой для других фронтенд-решений.

Ниже можно посмотреть **превью сайта** (_нажмите на картинку, чтобы перейти к демо_):

<div align="center">

[![Превью сайта - Space Tourism Website][website-preview]](https://aLeeTheY.github.io/Space-Tourism-Website/)

</div>

### Используемые технологии

Сайт создан с использованием следующих технологий:

- [![HTML][HTML-logo]][HTML-url]
- [![CSS][CSS-logo]][CSS-url]
- [![JavaScript][JavaScript-logo]][JavaScript-url]
- [![Sass][Sass-logo]][Sass-url]
- [![TypeScript][TypeScript-logo]][TypeScript-url]
- [![Node.js][Node.js-logo]][Node.js-url]
- [![Git][Git-logo]][Git-url]

### Поддерживаемые браузеры

Ниже приведён список браузеров, в которых сайт был протестирован и отображается корректно:

- [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
- [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
- [![Yandex][Yandex-logo]][Yandex-url]
- [![Firefox][Firefox-logo]][Firefox-url]
- [![Opera][Opera-logo]][Opera-url]

<br />

> [!IMPORTANT]
> Совместимость с браузерами проверялась для версии сайта **1.0.4**. На момент проверки, сайт корректно отображался в актуальных версиях [всех вышеперечисленных браузеров](#поддерживаемые-браузеры).
>
> **Дата последней проверки: 10 февраля 2026**

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- GETTING STARTED -->

## Начало работы

_Пожалуйста, выполните шаги ниже, чтобы собрать и запустить сайт локально._

### Предварительные требования

Сначала установите [Node.js][Node.js-url]. Затем скачайте этот репозиторий в виде ZIP-архива или клонируйте его с помощью [Git][Git-url] в нужную папку. Для клонирования используйте следующую команду:

- git

    ```sh
    git clone https://github.com/aLeeTheY/Space-Tourism-Website
    ```

Перейдите в папку проекта в терминале и выполните следующую команду для установки всех необходимых зависимостей:

- npm

    ```sh
    npm install
    ```

### Компиляция статических файлов

_Пожалуйста, выполните следующие шаги для компиляции статических файлов сайта._

Чтобы скомпилировать файлы Sass/SCSS в CSS, и TypeScript в JavaScript, выполните следующую команду (предупреждения компилятора можно игнорировать):

- npm

    ```sh
    npm run build:release
    ```

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- USAGE EXAMPLES -->

## Использование

После выполнения шагов из раздела [**Начало работы**](#начало-работы) вы можете открыть сайт вручную, запустив файл **_index.html_** из папки **_public/_** в любом [поддерживаемом браузере](#поддерживаемые-браузеры).

Также, вы можете запустить сайт на локальном сервере следующей командой:

- npm

    ```sh
    npm run serve
    ```

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- LICENSE -->

## Лицензия

Copyright © 2025 [Владимир Никулин](https://github.com/aLeeTheY).<br />
Проект распространяется по лицензии [MIT][license-url].

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- CONTACT -->

## Автор

👤 **Владимир Никулин**

- Github: [@aLeeTheY](https://github.com/aLeeTheY)
- Email: [mail.jorey@gmail.com](mailto:mail.jorey@gmail.com)

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[HTML-logo]: https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge
[HTML-url]: https://html.spec.whatwg.org/
[CSS-logo]: https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff&style=for-the-badge
[CSS-url]: https://www.w3.org/TR/css/#css
[JavaScript-logo]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Sass-logo]: https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge
[Sass-url]: https://sass-lang.com/
[TypeScript-logo]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge
[TypeScript-url]: https://www.typescriptlang.org/
[Node.js-logo]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge
[Node.js-url]: https://nodejs.org/
[Git-logo]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=for-the-badge
[Git-url]: https://git-scm.com/
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
[website-preview]: public/assets/images/website_preview.gif
[Opera-logo]: https://img.shields.io/badge/Opera-FF1B2D?logo=Opera&logoColor=white&style=for-the-badge
[Opera-url]: https://www.opera.com/
[GoogleChrome-logo]: https://img.shields.io/badge/Google%20Chrome-4285F4?logo=GoogleChrome&logoColor=white&style=for-the-badge
[GoogleChrome-url]: https://www.google.com/chrome/
[MicrosoftEdge-logo]: https://custom-icon-badges.demolab.com/badge/Microsoft%20Edge-2771D8?logo=edge-white&logoColor=white&style=for-the-badge
[MicrosoftEdge-url]: https://www.microsoft.com/en-us/edge/
[Firefox-logo]: https://img.shields.io/badge/Firefox-FF7139?logo=firefoxbrowser&logoColor=white&style=for-the-badge
[Firefox-url]: https://www.firefox.com/
[Yandex-logo]: https://img.shields.io/badge/Yandex%20Browser-fc3f1d?style=for-the-badge&logo=yandex&logoColor=white
[Yandex-url]: https://browser.yandex.com/
[WordPress-url]: https://wordpress.com/
