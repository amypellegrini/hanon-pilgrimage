import test from "tape";
import Hanon from "../";

test("Hanon module", nest => {
  nest.test("exercise generator API", assert => {
    const message = "it should expose an API to create exercises";

    const hanonInstance = new Hanon();

    const actual = hanonInstance.hasOwnProperty("createExercise");
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
