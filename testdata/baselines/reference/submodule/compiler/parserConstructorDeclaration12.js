//// [tests/cases/compiler/parserConstructorDeclaration12.ts] ////

//// [parserConstructorDeclaration12.ts]
class C {
  constructor<>() { }
  constructor<> () { }
  constructor <>() { }
  constructor <> () { }
  constructor< >() { }
  constructor< > () { }
  constructor < >() { }
  constructor < > () { }
}

//// [parserConstructorDeclaration12.js]
class C {
    constructor() { }
    constructor() { }
    constructor() { }
    constructor() { }
    constructor() { }
    constructor() { }
    constructor() { }
    constructor() { }
}
