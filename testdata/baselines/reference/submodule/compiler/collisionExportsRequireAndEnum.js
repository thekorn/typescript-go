//// [tests/cases/compiler/collisionExportsRequireAndEnum.ts] ////

//// [collisionExportsRequireAndEnum_externalmodule.ts]
export enum require { // Error
    _thisVal1,
    _thisVal2,
}
export enum exports { // Error
    _thisVal1,
    _thisVal2,
}
module m1 {
    enum require {
        _thisVal1,
        _thisVal2,
    }
    enum exports {
        _thisVal1,
        _thisVal2,
    }
}
module m2 {
    export enum require { 
        _thisVal1,
        _thisVal2,
    }
    export enum exports {
        _thisVal1,
        _thisVal2,
    }
}

//// [collisionExportsRequireAndEnum_globalFile.ts]
enum require {
    _thisVal1,
    _thisVal2,
}
enum exports {
    _thisVal1,
    _thisVal2,
}
module m3 {
    enum require {
        _thisVal1,
        _thisVal2,
    }
    enum exports {
        _thisVal1,
        _thisVal2,
    }
}
module m4 {
    export enum require {
        _thisVal1,
        _thisVal2,
    }
    export enum exports {
        _thisVal1,
        _thisVal2,
    }
}

//// [collisionExportsRequireAndEnum_externalmodule.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exports = exports.require = void 0;
var require;
(function (require) {
    require[require["_thisVal1"] = 0] = "_thisVal1";
    require[require["_thisVal2"] = 1] = "_thisVal2";
})(require || (exports.require = require = {}));
var exports;
(function (exports) {
    exports[exports["_thisVal1"] = 0] = "_thisVal1";
    exports[exports["_thisVal2"] = 1] = "_thisVal2";
})(exports || (exports.exports = exports = {}));
var m1;
(function (m1) {
    let require;
    (function (require) {
        require[require["_thisVal1"] = 0] = "_thisVal1";
        require[require["_thisVal2"] = 1] = "_thisVal2";
    })(require || (require = {}));
    let exports;
    (function (exports) {
        exports[exports["_thisVal1"] = 0] = "_thisVal1";
        exports[exports["_thisVal2"] = 1] = "_thisVal2";
    })(exports || (exports = {}));
})(m1 || (m1 = {}));
var m2;
(function (m2) {
    let require;
    (function (require) {
        require[require["_thisVal1"] = 0] = "_thisVal1";
        require[require["_thisVal2"] = 1] = "_thisVal2";
    })(require = m2.require || (m2.require = {}));
    let exports;
    (function (exports) {
        exports[exports["_thisVal1"] = 0] = "_thisVal1";
        exports[exports["_thisVal2"] = 1] = "_thisVal2";
    })(exports = m2.exports || (m2.exports = {}));
})(m2 || (m2 = {}));
//// [collisionExportsRequireAndEnum_globalFile.js]
var require;
(function (require) {
    require[require["_thisVal1"] = 0] = "_thisVal1";
    require[require["_thisVal2"] = 1] = "_thisVal2";
})(require || (require = {}));
var exports;
(function (exports) {
    exports[exports["_thisVal1"] = 0] = "_thisVal1";
    exports[exports["_thisVal2"] = 1] = "_thisVal2";
})(exports || (exports = {}));
var m3;
(function (m3) {
    let require;
    (function (require) {
        require[require["_thisVal1"] = 0] = "_thisVal1";
        require[require["_thisVal2"] = 1] = "_thisVal2";
    })(require || (require = {}));
    let exports;
    (function (exports) {
        exports[exports["_thisVal1"] = 0] = "_thisVal1";
        exports[exports["_thisVal2"] = 1] = "_thisVal2";
    })(exports || (exports = {}));
})(m3 || (m3 = {}));
var m4;
(function (m4) {
    let require;
    (function (require) {
        require[require["_thisVal1"] = 0] = "_thisVal1";
        require[require["_thisVal2"] = 1] = "_thisVal2";
    })(require = m4.require || (m4.require = {}));
    let exports;
    (function (exports) {
        exports[exports["_thisVal1"] = 0] = "_thisVal1";
        exports[exports["_thisVal2"] = 1] = "_thisVal2";
    })(exports = m4.exports || (m4.exports = {}));
})(m4 || (m4 = {}));
