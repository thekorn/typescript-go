//// [tests/cases/conformance/types/objectTypeLiteral/callSignatures/identicalCallSignatures2.ts] ////

//// [identicalCallSignatures2.ts]
// Normally it is an error to have multiple overloads with identical signatures in a single type declaration.
// Here the multiple overloads come from multiple bases.

interface Base<T> {
    (x: number): string;
}

interface I extends Base<string>, Base<number> { }

interface I2<T> extends Base<string>, Base<number> { }

//// [identicalCallSignatures2.js]
