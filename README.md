# Reflex

![Release](https://img.shields.io/npm/v/reflex-grid.svg)
![npm downloads](https://img.shields.io/npm/dm/reflex-grid.svg)

A lightweight responsive flexbox grid with cross browser support, an inline-block fallback and no polyfills

*   [docs](http://leejordan.github.io/reflex/docs)
*   [demo](http://leejordan.github.io/reflex/docs/demo.html)
*   [npm](https://www.npmjs.com/package/reflex-grid)

Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable fallback for older browsers that do not support flexbox. [Browser support for flexbox](http://caniuse.com/#search=flex) is in a pretty good state right now and is growing all the time. At the time of writing, global flexbox support is at 95.31% so I propose that it's time to start taking advantage of flexbox and accept that the inline-block fallback won't support everything.

Where flexbox isn't supported, your basic grid structure will remain intact and most of the layout classes still work. Try the [docs](http://leejordan.github.io/reflex/docs) or [demo](http://leejordan.github.io/reflex/docs/demo.html) pages out in a non-flexbox browser to see for yourself!

## The benefits are:

*   It's lightweight - 12KB in it's minified form and **1.7KB** gzipped
*   Where flexbox is supported, grid cells are all the same height by default
*   Reflex grid cells never push each other out of the way (as with floated grids)
*   Supports semantic elements e.g. you can use ul as a grid
*   Supports nested grids
*   Good cross browser support
*   Built with less
*   Built using BEM syntax
*   Easily customizable and extendable

## Intended use:

*   Creating complex nested grids which take advantage of flexbox layout properties
*   Generating a reliable grid with dynamic content e.g. a list of products
*   An addition or replacement to your current css framework
*   A set of vendor-prefixed helper classes and LESS mixins to get your flexbox solution off the ground faster

## Usage

### Compiled CSS
You can use the compiled css directly by downloading either the [minified](https://raw.githubusercontent.com/leejordan/reflex/master/css/reflex.min.css) or [non-minified](https://raw.githubusercontent.com/leejordan/reflex/master/css/reflex.css) version.

### Via github
You could clone this repo via [github](https://github.com/leejordan/reflex) which would allow you to modify the variables such as the number of columns or the breakpoints.

### Via npm
`npm install reflex-grid`



