import test from "ava";
import {Kubosho} from "./index";

test(t => {
    const testClass = new Kubosho.Sandbox.TestClass();
    t.true(testClass.foo() === "foo");
});
