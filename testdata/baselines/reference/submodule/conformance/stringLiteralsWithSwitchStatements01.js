//// [tests/cases/conformance/types/literal/stringLiteralsWithSwitchStatements01.ts] ////

//// [stringLiteralsWithSwitchStatements01.ts]
let x: "foo";
let y: "foo" | "bar"; 

switch (x) {
    case "foo":
        break;
    case "bar":
        break;
    case y:
        y;
        break;
}


//// [stringLiteralsWithSwitchStatements01.js]
let x;
let y;
switch (x) {
    case "foo":
        break;
    case "bar":
        break;
    case y:
        y;
        break;
}
