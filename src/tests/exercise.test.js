import test from "tape";
import createExercise from "../exercise";

test("Exercise module", nest => {
  nest.test("should create an exercise when called", assert => {
    const message = "the returned exercise should be a string";

    const exercise = createExercise();
    const actual = typeof exercise;
    const expected = "string";

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test("first exercise title", assert => {
    const message = 'it should be "Hanon Exercise Nr.1"';

    const exercise = createExercise();
    const actual = exercise.title;
    const expected = "Exercise 1";

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test("first exercise key", assert => {
    const message = "it should be in the key of C";

    const exercise = createExercise();
    const actual = exercise.key;
    const expected = "C";

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test("first exercise scale", assert => {
    const message = "it should be the Major scale";

    const exercise = createExercise();
    const actual = exercise.scale;
    const expected = "Major scale";

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test(". First exercise speed increment", assert => {
    const message = "Speed increment should be 0.";

    const exercise = createExercise();
    const actual = exercise.speedIncrement;
    const expected = 0;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test(". First exercise base speed", assert => {
    const message = "Base speed should be 30 beats per minute.";

    const exercise = createExercise();
    const actual = exercise.baseSpeed;
    const expected = 30;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test(". Second exercise properties (index 1)", assert => {
    const message = "Should also have index, key, title, and scale properties.";

    const exercise = createExercise(1);
    const actual = exercise.hasOwnProperty("index");
    exercise.hasOwnProperty("key") &&
      exercise.hasOwnProperty("title") &&
      exercise.hasOwnProperty("speedIncrement") &&
      exercise.hasOwnProperty("scale");

    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test(". Second exercise scale", assert => {
    const message = "It should be Bach Minor Scale.";

    const exercise = createExercise(1);
    const actual = exercise.scale;
    const expected = "Bach Minor Scale";

    assert.equal(actual, expected, message);
    assert.end();
  });
});
