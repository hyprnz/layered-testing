"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeMoq = require("typemoq");
const chai_1 = require("chai");
class MoqsIt {
    // Use chai to test for deep equality so we get a useful diff in WebStorm.
    deepEquals(expected) {
        return TypeMoq.It.is((actual) => chai_1.expect(actual).eql(expected) && true);
    }
    isValue(value) {
        return TypeMoq.It.isValue(value);
    }
    isAny() {
        return TypeMoq.It.isAny();
    }
    is(predicate) {
        return TypeMoq.It.is(predicate);
    }
}
exports.MoqsIt = MoqsIt;
// Shortcuts to defining mocks with strict, where possible.
// Strict means that an exception is thrown if a call is made with an argument that has no setup.
// Loose means that undefined is returned automatically, which we don't want.
class Moqs {
    constructor() {
        this.verifies = [];
    }
    ofFn(f) {
        const mock = TypeMoq.Mock.ofInstance(f, TypeMoq.MockBehavior.Strict);
        this.verifies.push(mock);
        return mock;
    }
    ofType(targetConstructor, ...targetConstructorArgs) {
        const shouldOverrideTarget = false;
        const mock = TypeMoq.Mock.ofType(targetConstructor, TypeMoq.MockBehavior.Strict, shouldOverrideTarget, ...targetConstructorArgs);
        this.verifies.push(mock);
        return mock;
    }
    ofInterface() {
        const mock = TypeMoq.Mock.ofType(undefined, TypeMoq.MockBehavior.Strict);
        this.verifies.push(mock);
        return mock;
    }
    verifyAll(done) {
        this.verifies.forEach(v => v.verifyAll());
        if (done) {
            done();
        }
        return null;
    }
    notPromise(mock) {
        mock
            .setup(p => p.then)
            .returns(() => undefined);
    }
}
Moqs.It = new MoqsIt();
Moqs.Times = TypeMoq.Times;
exports.Moqs = Moqs;
