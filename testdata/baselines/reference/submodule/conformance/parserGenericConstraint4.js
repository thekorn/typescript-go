//// [tests/cases/conformance/parser/ecmascript5/Generics/parserGenericConstraint4.ts] ////

//// [parserGenericConstraint4.ts]
class C<T extends List<List<T> > > {
}

//// [parserGenericConstraint4.js]
class C {
}
