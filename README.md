# Reflex

![Release](https://img.shields.io/github/release/leejordan/reflex.svg)
![npm downloads](https://img.shields.io/npm/dm/reflex-grid.svg)

a lightweight responsive flexbox grid with cross browser support, an inline-block fallback and no polyfills

*   [docs](http://leejordan.github.io/reflex/docs)
*   [demo](http://leejordan.github.io/reflex/docs/demo.html)
*   [npm](https://www.npmjs.com/package/reflex-grid)

Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable fallback for older browsers that do not support flexbox. [Browser support for flexbox](http://caniuse.com/#search=flex) is in a pretty good state right now and is growing all the time. At the time of writing, full global flexbox support is at 82.74% (excluding browsers with outdated or partial support) so I propose that it's time to start taking advantage of flexbox and accept that the inline-block fallback won't support everything.

The benefits are:

*   It's lightweight - 9KB in it's minified form and **1.6KB** gzipped
*   Where flexbox is supported, grid cells are all the same height by default
*   Reflex grid cells never push each other out of the way (as with floated grids)
*   Supports semantic elements e.g. you can use ul as a grid
*   Supports nested grids
*   Good cross browser support
*   Built with less
*   Built using BEM syntax
*   Easily customizable and extendable

Intended use:

*   Creating complex nested grids which take advantage of flexbox layout properties
*   Generating a reliable grid with dynamic content e.g. a list of products
*   An addition or replacement to your current css framework
*   A set of vendor-prefixed helper classes and LESS mixins to get your flexbox solution off the ground faster
