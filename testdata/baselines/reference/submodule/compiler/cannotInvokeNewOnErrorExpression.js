//// [tests/cases/compiler/cannotInvokeNewOnErrorExpression.ts] ////

//// [cannotInvokeNewOnErrorExpression.ts]
module M
{
    class ClassA {}
}
var t = new M.ClassA[];

//// [cannotInvokeNewOnErrorExpression.js]
var M;
(function (M) {
    class ClassA {
    }
})(M || (M = {}));
var t = new M.ClassA[];
