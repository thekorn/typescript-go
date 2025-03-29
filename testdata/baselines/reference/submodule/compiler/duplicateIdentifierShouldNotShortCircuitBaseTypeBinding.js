//// [tests/cases/compiler/duplicateIdentifierShouldNotShortCircuitBaseTypeBinding.ts] ////

//// [duplicateIdentifierShouldNotShortCircuitBaseTypeBinding_0.ts]
export interface IPoint {}

export module Shapes {

    export class Point implements IPoint {}

}

//// [duplicateIdentifierShouldNotShortCircuitBaseTypeBinding_1.ts]
//var x = new Shapes.Point();
//interface IPoint {}

//module Shapes {

//    export class Point implements IPoint {}

//}

//// [duplicateIdentifierShouldNotShortCircuitBaseTypeBinding_0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shapes = void 0;
var Shapes;
(function (Shapes) {
    class Point {
    }
    Shapes.Point = Point;
})(Shapes || (exports.Shapes = Shapes = {}));
//// [duplicateIdentifierShouldNotShortCircuitBaseTypeBinding_1.js]
//var x = new Shapes.Point();
//interface IPoint {}
//module Shapes {
//    export class Point implements IPoint {}
//}
