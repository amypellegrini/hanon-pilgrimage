import test from "tape";
import Hanon from "../dist/hanon";

test("Module build", nest => {
  nest.test("it should be present", assert => {
    const actual = !!Hanon;
    const expected = true;
    const message = "Hanon module should not be undefined";

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test("it should be instantiable", assert => {
    const hanonInstance = new Hanon();

    const actual = typeof hanonInstance;
    const expected = "object";
    const message = "new Hanon() should return an object";

    assert.equal(actual, expected, message);
    assert.end();
  });
});
