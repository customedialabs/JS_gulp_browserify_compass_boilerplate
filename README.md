# gulp_browserify_compass_boilerplate

Minimal boilerplate for web projects utilizing Gulp, Browserify and Compass framework.

**Disclaimer:** There are many ways to utilize the tools above and most of the
times they depend on the project's structure.
This is just one, based on my own personal preferences and on a specific structure.
Feel free to fork and modify at will but please do not create pull requests
that refer to different uses of the tools used. Of course, pull requests for
solving potential bugs are always welcome and encouraged.


## Installation instructions

### Install Node.js
Information about installing Node.js, can be found at https://nodejs.org

### Install SASS and Compass
- [SASS](http://sass-lang.com/)
- [Compass](http://compass-style.org/)

### Install local dependencies
In your project's root folder run:
```sh
$ npm install
```
This will install locally to the project all the dependancies required for development (eg gulp, browserify, gulp-uglify, etc).


## Build instructions

This boilerplate assumes that all your source files should be located under ```src/``` folder.
Place Javascript and SCSS files under ```src/js/``` and ```src/scss/``` folders respectively.

The project's strucure is shown below:

.<br>
|-- src<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- js<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- scss<br>
|-- .gitignore<br>
|-- .jscsrc<br>
|-- .jshintrc<br>
|-- config.rb<br>
|-- gulpfile.js<br>
|-- index.dev.html<br>
|-- LICENSE<br>
|-- package.json<br>
|-- README.md

To build the bundles that will be served, there are a couple of options:

#### 1. Build for development:\*

```sh
$ npm run build:dev
```

Generates the compiled, unminified bundles of your JS and CSS files along with their source maps.

#### 2. Build for production:\*

```sh
$ npm run build:live
```

Generates the compiled, minified bundles of your JS and CSS files. Also, generates the ```index.html``` file which serves the minified bundles.

#### 3. Watch for changes:\*

```sh
$ npm run watch
```

Watches the ```src/``` folder for changes and builds the project. This one is the same as ```$ npm run build:dev``` but generates the files every time a change happens.

\* All the generated files will be located under ```dist``` folder which is generated dynamically every time you build the project.


## License

This code is [MIT](http://opensource.org/licenses/mit-license.php) licenced:

Copyright (c) 2015 George Raptis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
