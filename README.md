# Figurkoder.se
This started as a project in the course [2dv607 - RIA-development with JavaScript](https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/) at [Linnaeus University](https://coursepress.lnu.se/program/webbprogrammerare/)

## Installation
After cloning the repository, install dependencies:
```
cd <repo folder>
npm install
```

Now you can run your local server with live preview:
```
npm start
```
Server is located at http://localhost:3000

To build a static version of the project run:
```
npm run build
```

Note that all source code is located under `src/`

## Roadmap
 - Add "restart"-buttons to the Result component. Using them the user can either try the same mnemomic image's again or practice them again.
 - When going back from the Result's the settings should be kept.
 - Add a setting for turning vibrations on and off.
 - Make the app offline-first and make the whole app avalible offline.
