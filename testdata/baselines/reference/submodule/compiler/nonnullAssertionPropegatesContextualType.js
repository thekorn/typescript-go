//// [tests/cases/compiler/nonnullAssertionPropegatesContextualType.ts] ////

//// [nonnullAssertionPropegatesContextualType.ts]
let rect2: SVGRectElement = document.querySelector('.svg-rectangle')!; // Error: Element

//// [nonnullAssertionPropegatesContextualType.js]
let rect2 = document.querySelector('.svg-rectangle'); // Error: Element
