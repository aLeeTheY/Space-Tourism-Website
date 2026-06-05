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
    🚀 Многостраничный веб-сайт для компании космического туризма с адаптивным дизайном.
    <br />
    <br />
    <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">Дизайн (макет)</a>
    &middot;
    <a href="https://aleethey.github.io/Space-Tourism-Website/">Демо</a>
    &middot;
    <a href="https://github.com/aLeeTheY/Space-Tourism-Website/issues/new?labels=bug&template=bug-report---.md">Сообщить об ошибке</a>
  </p>

[![Русский](https://img.shields.io/badge/Русский-blue)](README.md)
[![English](https://img.shields.io/badge/English-blue)](README.EN.md)

</div>

<!-- TABLE OF CONTENTS -->
<br />
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
      <ul>
        <li><a href="#дизайн">Дизайн</a></li>
        <li>
          <a href="#предпросмотр">Предпросмотр</a>
          <ul>
            <li><a href="#interface-preview">Демонстрация интерфейса (Desktop + Mobile)</a></li>
            <li><a href="#adaptive-preview">Демонстрация адаптива (DevTools Stretch Test)</a></li>
          </ul>
        </li>
        <li>
          <a href="#ключевые-особенности">Ключевые особенности</a>
          <ul>
            <li><a href="#google-lighthouse-benchmark">Google Lighthouse Benchmark</a></li>
          </ul>
        </li>
        <li><a href="#используемые-технологии">Используемые технологии</a></li>
        <li><a href="#структура-проекта">Структура проекта</a></li>
        <li><a href="#поддерживаемые-браузеры">Поддерживаемые браузеры</a></li>
      </ul>
    </li>
    <li>
      <a href="#начало-работы">Начало работы</a>
      <ul>
        <li><a href="#предварительные-требования">Предварительные требования</a></li>
        <li><a href="#установка-зависимостей">Установка зависимостей</a></li>
        <li><a href="#сборка-статических-файлов">Сборка статических файлов</a></li>
      </ul>
    </li>
    <li>
      <a href="#использование">Использование</a>
      <ul>
        <li><a href="#доступные-команды">Доступные команды</a></li>
      </ul>
    </li>
    <li><a href="#сложности-при-разработке">Сложности при разработке</a></li>
    <li><a href="#полученные-навыки">Полученные навыки</a></li>
    <li><a href="#дорожная-карта">Дорожная карта</a></li>
    <li><a href="#лицензия">Лицензия</a></li>
    <li><a href="#контакты">Контакты</a></li>
    <li><a href="#благодарности">Благодарности</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## О проекте

Основная цель проекта — разработка многостраничного адаптивного веб-сайта для отработки архитектурных подходов с использованием **Sass** и **TypeScript**.

Проект реализован без применения сторонних UI-фреймворков или CMS с акцентом на создание чистой и масштабируемой кодовой базы. **Sass** задействован для модульной организации стилей, а **TypeScript** обеспечивает типобезопасную клиентскую логику управления интерфейсными состояниями (переключение вкладок, интерактивная пагинация и навигация).

### Дизайн

Визуальная составляющая базируется на макете [**Space Tourism**](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) от платформы [**Frontend Mentor**](https://www.frontendmentor.io/). Ключевой задачей была высокоточная (**Pixel Perfect**) реализация интерфейса и его адаптация под различные разрешения экранов с сохранением целостности исходной дизайн-системы.

### Предпросмотр

<!-- Ниже представлен **предварительный просмотр** сайта (_**Desktop + Mobile**, нажмите на изображение для перехода к демо_): -->

Ниже представлена **интерактивная демонстрация** проекта (_нажмите на любое изображение для перехода к live&#8209;демо_):

<div align="center">

#### Демонстрация интерфейса (Desktop + Mobile) <a id="interface-preview"></a>

[![Демонстрация интерфейса][interface-preview-gif]](https://aleethey.github.io/Space-Tourism-Website/)

<br />

#### Демонстрация адаптива (DevTools Stretch Test) <a id="adaptive-preview"></a>

[![Демонстрация адаптива][adaptive-preview-gif]](https://aleethey.github.io/Space-Tourism-Website/)

</div>

### Ключевые особенности

- **Адаптивный дизайн (Responsive Design)**: Полная адаптивность интерфейса для Desktop, Tablet и Mobile устройств реализована через каскадные медиа-запросы.
- **Точность Pixel Perfect**: Строгое соответствие реализованной верстки исходному дизайн-макету с соблюдением всех параметров сетки и отступов.
- **Улучшенный UI/UX**: Внедрение плавных анимаций и микро-взаимодействий для повышения интерактивности интерфейса.
- **Методология БЭМ**: Применение системы именования `Block-Element-Modifier` для обеспечения изоляции стилей и расширяемости кода.
- **Современный процесс сборки**: Использование современной инструментальной цепочки для расширения возможностей стандартных CSS и JavaScript.
- **Статическая архитектура**: Проект реализован как статическое веб-приложение без использования CMS или Server-Side Rendering (SSR).
- **Оптимизация производительности**: Высокие показатели производительности подтверждены **100/100 баллами в [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) в категории Performance** и **90+ по остальным метрикам**.
- **Универсальность шаблона**: Модульная структура проекта позволяет использовать его в качестве надежного шаблона для разработки аналогичных статических решений.
- **Кроссбраузерная стабильность CSS**: Автоматическое добавление вендорных префиксов через PostCSS + Autoprefixer обеспечивает одинаковое отображение стилей во всех [поддерживаемых браузерах](#поддерживаемые-браузеры).

#### Google Lighthouse Benchmark

В качестве подтверждения высоких показателей производительности в бенчмарке **Google Lighthouse**, ниже представлены результаты тестирования главной страницы (**Desktop + Mobile**):

<div align="center">

|                               Desktop                                |                               Mobile                               |
| :------------------------------------------------------------------: | :----------------------------------------------------------------: |
| ![Lighthouse Desktop](docs/benchmark/lighthouse__index_desktop.avif) | ![Lighthouse Mobile](docs/benchmark/lighthouse__index_mobile.avif) |

</div>

### Используемые технологии

Проект создан с использованием следующих инструментов и технологий:

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

### Структура проекта

Основные каталоги и файлы проекта:

```text
Space-Tourism-Website/
│
├── .vscode/
│   └── tasks.json            # Файл расширения `spencerwmiles.vscode-task-buttons`
│
├── docs/                     # Проектная документация
│   ├── benchmark/
│   │   ├── lighthouse__index_desktop.avif
│   │   └── lighthouse__index_mobile.avif
│   │
│   └── preview/
│       ├── adaptive_design.gif
│       └── interface.gif
│
├── public/                   # Скомпилированные файлы проекта и ассеты
│   ├── assets/               # Изображения и статические ресурсы
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
│   ├── scss/                 # Исходные Sass-файлы
│   └── ts/                   # Исходные TypeScript-файлы
│
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json              # Конфигурация проекта и зависимости
├── prettier.config.mts
├── README.EN.md
├── README.md
└── tsconfig.json             # Настройки TypeScript
```

### Поддерживаемые браузеры

Проект проверен на корректность отображения и стабильность работы скриптов в актуальных версиях следующих браузеров:

- [![Google Chrome][GoogleChrome-logo]][GoogleChrome-url]
- [![Microsoft Edge][MicrosoftEdge-logo]][MicrosoftEdge-url]
- [![Yandex][Yandex-logo]][Yandex-url]
- [![Firefox][Firefox-logo]][Firefox-url]
- [![Opera][Opera-logo]][Opera-url]

> [!IMPORTANT]
> Информация актуальна для версии **[1.2.0](https://github.com/aLeeTheY/Space-Tourism-Website/releases/tag/1.2.0)**. На момент проверки проект корректно отображался в последних стабильных версиях всех [указанных браузеров](#поддерживаемые-браузеры).
>
> **Дата последней проверки: 5 июня 2026**

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- GETTING STARTED -->

## Начало работы

_Следуйте приведённым ниже инструкциям для сборки и запуска проекта на локальном сервере._

### Предварительные требования

Установите [Node.js][NodeJS-url].

Затем скачайте данный репозиторий в виде ZIP-архива или клонируйте его с помощью [Git][Git-url]:

```sh
git clone https://github.com/aLeeTheY/Space-Tourism-Website
```

### Установка зависимостей

Перейдите в каталог проекта и установите все необходимые зависимости:

```sh
npm install
```

### Сборка статических файлов

Выполните следующую команду, чтобы скомпилировать Sass и TypeScript файлы в файлы CSS и JavaScript:

```sh
npm run build:release
```

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## Использование

После завершения этапа [**Начало работы**](#начало-работы), вы можете открыть сайт вручную, запустив файл `index.html` из папки `public/` в любом поддерживаемом браузере.

Также вы можете запустить сайт на локальном сервере (`localhost`) следующей командой:

```sh
npm run serve
```

### Доступные команды

В проекте используются следующие команды `npm`:

<div align="center">

|         Command          |                                           Description                                           |
| :----------------------: | :---------------------------------------------------------------------------------------------: |
|     `npm run clean`      |                 Удалить папки со скомпилированными файлами CSS и JS (`rimraf`)                  |
|    `npm run build:ts`    |                    Скомпилировать обычные JS-бандлы через `esbuild` (ES2017)                    |
|  `npm run build:ts:min`  |             Скомпилировать минифицированные JS-бандлы с сорсмапами через `esbuild`              |
|   `npm run build:scss`   |         Скомпилировать обычный CSS через `sass` и обработать `PostCSS` + `Autoprefixer`         |
| `npm run build:scss:min` |    Скомпилировать минифицированный CSS с сорсмапами и обработать `PostCSS` + `Autoprefixer`     |
|    `npm run watch:ts`    |            Отслеживать изменения TS-файлов и автоматически компилировать обычный JS             |
|   `npm run watch:scss`   |           Отслеживать изменения SCSS-файлов и автоматически компилировать обычный CSS           |
|     `npm run watch`      |                   Запустить вотчеры для JS и CSS параллельно (`npm-run-all`)                    |
|  `npm run build:debug`   |                    Очистить выходные папки и собрать обычные CSS и JS файлы                     |
| `npm run build:release`  |                Очистить выходные папки и собрать минифицированные CSS и JS файлы                |
|     `npm run serve`      |            Запустить локальный сервер `BrowserSync` для отслеживания папки `public/`            |
|     `npm run start`      | Выполнить сборку `build:release` и запустить локальный сервер с автоперезагрузкой (live reload) |

</div>

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## Сложности при разработке

- **Проектирование DOM-структуры**: Неочевидная иерархия элементов в макете потребовала дополнительного анализа для создания логичной и семантически корректной разметки.
- **Архитектура типографики**: Реализована система Sass-миксинов для управления шрифтами. Это позволило инкапсулировать параметры текста (размер, интерлиньяж, начертание) и переиспользовать их в стилях компонентов, избегая дублирования кода и упрощая масштабирование.
- **Архитектура Sass**: Организация многофайловой структуры стилей с четким разделением на глобальные переменные, миксины, компоненты и специфичные стили страниц.
- **Сложность адаптивной верстки**: Управление большим количеством медиа-запросов, где различия часто сводились к 1–2 свойствам, что требовало высокой точности при отладке и проверке соответствия макету.
- **Кастомизация tap-отклика**: Отключение нативных системных выделений для ссылок и интерактивных элементов на мобильных устройствах для устранения визуальных артефактов при клике.
- **Исправление «липкого» hover**: Устранение бага мобильных браузеров, при котором кнопки сохраняли состояние `:hover` после нажатия или навигации назад по истории. Проблема решена через использование медиа-запроса `@media (hover: hover)`.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

## Полученные навыки

- **Реализация UI/UX интерфейсов**: Опыт точного переноса сложных дизайн-макетов в семантическую HTML-разметку с сохранением pixel-perfect соответствия.
- **Архитектура стилей (БЭМ)**: Проектирование масштабируемой и поддерживаемой CSS-структуры по методологии БЭМ, исключающей конфликты специфичности селекторов.
- **Клиентская логика (TypeScript)**: Разработка типобезопасной логики для интерактивных компонентов (табы, пагинация) с использованием TypeScript для обеспечения стабильности и читаемости кода.
- **Адаптивная веб-верстка**: Создание отказоустойчивых адаптивных интерфейсов для многостраничных приложений с глубокой проработкой мобильного UX.
- **Оптимизация загрузки страниц**: Повышение скорости отрисовки (LCP) через внедрение формата `.webp`, умеренное сжатие ресурсов с минимальной потерей качества и использование неблокирующей загрузки скриптов (`async`/`defer`).
- **Организация рабочего процесса (Workflow)**: Профессиональное ведение Git-репозитория, работа с ветками, управление зависимостями через `npm` и документирование архитектуры проекта.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- ROADMAP -->

## Дорожная карта

- [x] Разработка HTML-документов и стилизация страниц:
  - [x] `index.html`
  - [x] `destination.html`
  - [x] `crew.html`
  - [x] `technology.html`
- [x] Реализация интерактивной логики табов и пагинации на TypeScript
- [x] Внедрение адаптивности для планшетных устройств (**Tablet**)
- [x] Внедрение адаптивности для мобильных устройств (**Mobile**)
- [x] Верификация соответствия результата дизайн-макету (**Quality Assurance**)
- [x] Подготовка технической документации и `README.md`

Полный список планируемых функций и известных проблем доступен в разделе [Issues][issues-url].

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- LICENSE -->

## Лицензия

Copyright © 2025 [aLeeTheY](https://github.com/aLeeTheY)
<br/>
Проект распространяется по лицензии [MIT][license-url]. Смотрите файл `LICENSE` для получения подробной информации.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- CONTACT -->

## Контакты

<!-- [![GitHub][GitHub-logo]](https://github.com/aLeeTheY)
[![Telegram][Telegram-logo]](https://t.me/aLeeTheY)
[![Gmail][Gmail-logo]](mailto:aleethey@gmail.com) -->

GitHub: [aLeeTheY](https://github.com/aLeeTheY)
<br/>
Telegram: [@aLeeTheY](https://t.me/aLeeTheY)
<br/>
Email: [aleethey@gmail.com](mailto:aleethey@gmail.com)

<p align="right">(<a href="#readme-top">наверх</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Благодарности

[aLeeTheY](https://github.com/aLeeTheY) выражает благодарность разработчикам и сообществам следующих проектов:

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

Без этих инструментов разработка данного проекта была бы **невозможна**.

<p align="right">(<a href="#readme-top">наверх</a>)</p>

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
