# Editor of the Text

## Description

This application is a text editor that runs in the browser. This is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

This text editor implements methods for getting and storing data to an IndexedDB database. A package called idb is used, which is a lightweight wrapper around the IndexedDB API. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Technologies](#technologies)
- [Questions](#questions)


## Installation
The packages required are:

```md
dependencies:
    express: 4.17.1,
    if-env: 1.0.4
  
devDependencies: 
    concurrently: 5.2.0,
    nodemon: 2.0.4

  ```