//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames33_ES5.ts] ////

//// [computedPropertyNames33_ES5.ts]
function foo<T>() { return '' }
class C<T> {
    bar() {
        var obj = {
            [foo<T>()]() { }
        };
        return 0;
    }
}

//// [computedPropertyNames33_ES5.js]
function foo() { return ''; }
class C {
    bar() {
        var obj = {
            [foo()]() { }
        };
        return 0;
    }
}
