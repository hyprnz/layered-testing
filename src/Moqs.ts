import * as TypeMoq from "typemoq";
import {Times} from "typemoq";
import {CtorWithArgs} from "typemoq/Common/Ctor";
import {expect} from "chai";

export class MoqsIt {
    // Use chai to test for deep equality so we get a useful diff in WebStorm.
    deepEquals<T>(expected: T): T {
        return TypeMoq.It.is<T>((actual: T) => expect(actual).eql(expected) && true);
    }

    isValue(value: any) {
        return TypeMoq.It.isValue(value);
    }

    isAny() {
        return TypeMoq.It.isAny();
    }

    is<T>(predicate: (x: T) => boolean) {
        return TypeMoq.It.is(predicate);
    }
}

// Shortcuts to defining mocks with strict, where possible.
// Strict means that an exception is thrown if a call is made with an argument that has no setup.
// Loose means that undefined is returned automatically, which we don't want.

export class Moqs {
    verifies: Array<any> = [];

    ofFn<U>(f: U): TypeMoq.IMock<U> {
        const mock = TypeMoq.Mock.ofInstance(f, TypeMoq.MockBehavior.Strict);
        this.verifies.push(mock);
        return mock;
    }

    ofType<U>(targetConstructor?: CtorWithArgs<U>, ...targetConstructorArgs: Array<any>): TypeMoq.IMock<U> {
        const shouldOverrideTarget = false;
        const mock = TypeMoq.Mock.ofType<U>(targetConstructor, TypeMoq.MockBehavior.Strict, shouldOverrideTarget, ...targetConstructorArgs);
        this.verifies.push(mock);
        return mock;
    }

    ofInterface<U>(): TypeMoq.IMock<U> {
        const mock = TypeMoq.Mock.ofType<U>(undefined, TypeMoq.MockBehavior.Strict);
        this.verifies.push(mock);
        return mock;
    }

    verifyAll(done?: any) {
        this.verifies.forEach(v => v.verifyAll());
        if (done) {
            done();
        }
        return null;
    }

    notPromise(mock: TypeMoq.IMock<any>) {
        mock
            .setup(p => p.then)
            .returns(() => undefined);
    }

    public static It: MoqsIt = new MoqsIt();
    public static Times = TypeMoq.Times;
}

