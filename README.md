# ImmersionTime ! [![Build Status](https://travis-ci.com/Dugnychon/ImmersionTime.svg?token=p5pFoFaqAiLRDSEHnrdp&branch=master)](https://travis-ci.com/Dugnychon/ImmersionTime) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6fc05f8e22cf4ba1b00fafde61f788f2)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Dugnychon/ImmersionTime&amp;utm_campaign=Badge_Grade)
Project aimed to help Efrei students choose their Immersion (abroad study) destination.

## Install

### Prerequisites

-   Node 10.X.X with npm

### Project setup

    npm install

### Compiles and hot-reloads for development

    npm run serve

### Compiles and minifies for production

    npm run build

### Run your tests

    npm run test

No tests implemented at the moment.

### Lints and fixes files

    npm run lint

Not implemented at the moment.

## Compatibility

### Browser targets

-   Chrome 70+
-   Edge 44+
-   Firefox 61+
-   Test only on Chrome (PC/Android)

### Development

-   Windows 10 October 18
-   Ubuntu 12+ on Travis CI (see .travis.yml for configuration)

### IDE

-   Webstorm 2018.3
-   VS Code

## Deploy

### CI

To skip a build, put "\[skip travis]" or "\[skip ci]" in the title of your commit.
Ex: "\[skip ci] Update Readme"

### Deploy to GH Pages

 This app is a Single Page App, but uses routing.
 We cannot modify the behaviour of the server, so we copy index.html to 404.html,
 the page served by github for a 404. So the app always works.

#### Issues ?

-   SEO, if HTTP header is of type 404...
