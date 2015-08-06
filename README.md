# Reflex

a lightweight responsive flexbox grid with cross browser support, an inline-block fallback and no polyfills

*   [docs](http://leejordan.github.io/reflex/docs)
*   [demo](http://leejordan.github.io/reflex/docs/demo.html)

Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable fallback for older browsers that do not support flexbox.[Browser support for flexbox](http://caniuse.com/#search=flex) is in a pretty good state right now and is growing all the time. At the time of writing, full global flexbox support is at 81.74% (excluding browsers with outdated or partial support) so I propose that it's acceptable to start taking advantage of flexbox and accept that the inline-block fallback won't support everything. You'll still have a working grid on older browsers (all the way back to ie7), just not all of the cool flexbox stuff that doesn't have an inline-block equivalent such as`order`

The benefits are:

*   It's lightweight - 8.5KB in it's minified form and**1.6KB gzipped**
*   Where flexbox is supported, grid cells are all the same height by default
*   Grid grid__col-cells never push each other out of the way (as with floated grids)
*   Good cross browser support

It's intended to be used as:

*   A means of generating a reliable grid with dynamic content e.g. a list of products
*   A replacement or addition to your current css framework
*   A set of vendor-prefixed helper classes and LESS mixins to get your flexbox solution off the ground faster
