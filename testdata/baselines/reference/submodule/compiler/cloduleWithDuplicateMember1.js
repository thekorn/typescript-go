//// [tests/cases/compiler/cloduleWithDuplicateMember1.ts] ////

//// [cloduleWithDuplicateMember1.ts]
class C {
    get x() { return 1; }
    static get x() {
        return '';
    }
    static foo() { }
}

module C {
    export var x = 1;
}
module C {
    export function foo() { }
    export function x() { }
}

//// [cloduleWithDuplicateMember1.js]
class C {
    get x() { return 1; }
    static get x() {
        return '';
    }
    static foo() { }
}
(function (C) {
    C.x = 1;
})(C || (C = {}));
(function (C) {
    function foo() { }
    C.foo = foo;
    function x() { }
    C.x = x;
})(C || (C = {}));
