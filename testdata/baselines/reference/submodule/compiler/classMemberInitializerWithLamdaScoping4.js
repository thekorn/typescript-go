//// [tests/cases/compiler/classMemberInitializerWithLamdaScoping4.ts] ////

//// [classMemberInitializerWithLamdaScoping3_0.ts]
export var field1: string;

//// [classMemberInitializerWithLamdaScoping3_1.ts]
declare var console: {
    log(msg?: any): void;
};
export class Test1 {
    constructor(private field1: string) {
    }
    messageHandler = () => {
        console.log(field1); // Should be error that couldnt find symbol field1
    };
}

//// [classMemberInitializerWithLamdaScoping3_0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.field1 = void 0;
//// [classMemberInitializerWithLamdaScoping3_1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1 = void 0;
class Test1 {
    field1;
    constructor(field1) {
        this.field1 = field1;
    }
    messageHandler = () => {
        console.log(field1); // Should be error that couldnt find symbol field1
    };
}
exports.Test1 = Test1;
