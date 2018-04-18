# Reflex

![Release](https://img.shields.io/npm/v/reflex-grid.svg)
![npm downloads](https://img.shields.io/npm/dm/reflex-grid.svg)

A lightweight responsive flexbox grid with cross browser support, an inline-block fallback and no polyfills

- [Full documentation](http://reflexgrid.com)
- [Examples](http://reflexgrid.com/docs/examples.html)
- [npm](https://www.npmjs.com/package/reflex-grid)

Reflex gives you the ability to take advantage of flexbox for laying out a grid while having a reliable inline-block fallback for older browsers.

At the time of writing, [browser support for flexbox](http://caniuse.com/#search=flex) is at 96.63% so I propose that it's time to start taking advantage of flexbox and accept that the inline-block fallback won't support everything.

Where flexbox isn't supported, your basic grid structure will remain intact and most of the layout classes still work. Try the [examples](http://reflexgrid.com/docs/examples.html) page out in a browser that does not support flexbox (such as Internet Explorer 9) to see for yourself!

## Why use reflex?

- It's lightweight - 20KB in it's minified form and 2.5KB gzipped
- Where flexbox is supported, columns are all the same height by default
- Reflex grid cells never push each other out of the way (as with floated grids)
- Supports semantic elements e.g. you can use ul as a grid
- Supports nested grids
- Good cross browser support
- Built with Sass/SCSS
- Easily customizable and extendable

## Intended use

- Creating complex nested flexbox grids which take advantage of flexbox layout properties
- Using a flexbox layout inside a CSS grid page layout
- Generating a flexbox grid with dynamic content of varying height e.g. a list of products
- An addition or replacement for your current css layout framework
- A set of vendor-prefixed mixins and helper classes to get your flexbox solution off the ground faster

## Usage

### Use as CSS

You can use the compiled css directly by downloading either the [minified](https://raw.githubusercontent.com/leejordan/reflex/master/css/reflex.min.css) or [non-minified](https://raw.githubusercontent.com/leejordan/reflex/master/css/reflex.css) version.

### Clone via github

You could clone this repo which would allow you to modify the variables and build your own version of this grid. You can modify things like the number of columns or the breakpoints.

### Use with npm

If you're familiar with npm you can use `npm install reflex-grid` to have a look around, or add it as a dependency to your node project.

## Version 2 information

This is version 2 of reflex grid and is not compatible with version 1. Many things have changed in version 2 which will need addressing if you want to update. I wrote a [blog post about version 2](http://lendmeyourear.net/reflex-grid-version-2.html) changes if you're interested in learning more

- All class names have dropped the `grid__` and `grid--` prefixes but are otherwise unchanged
- Columns are no longer flexbox by default. They can be converted to flexbox containers with the `col-grid` class
- There is far better support for older browsers, particularly the ie10 implementation of flexbox
- Added container classes
- Added better support for "cards" as well as some example code
- Is now only built with SCSS. Older versions had both LESS and SCSS implementations but this was too much to support.



