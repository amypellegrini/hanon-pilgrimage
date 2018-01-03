import test from 'tape';
import createExercise from '../hanon.exercise';

test('Exercise module', nest => {
  nest.test('. Exercise class', assert => {
    const message = 'it should return a new exercise when called.';

    const exercise = createExercise(); 
    const actual = typeof exercise === 'object';
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. First exercise key', assert => {
    const message = 'Exercise at index 0 shuold be in the key of C';

    const exercise = createExercise(); 
    const actual = exercise.key;
    const expected = 'C';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. First exercise title', assert => {
    const message = 'It should be "Hanon Exercise 1".';

    const exercise = createExercise(); 
    const actual = exercise.title;
    const expected = 'Exercise 1';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. First exercise scale', assert => {
    const message = 'It should be the Major Scale/Ionian Mode.';

    const exercise = createExercise(); 
    const actual = exercise.scale;
    const expected = 'Major Scale/Ionian Mode';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. First exercise speed increment', assert => {
    const message = 'Speed increment should be 0.';

    const exercise = createExercise(); 
    const actual = exercise.speedIncrement;
    const expected = 0;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. First exercise base speed', assert => {
    const message = 'Base speed should be 30 beats per minute.';

    const exercise = createExercise(); 
    const actual = exercise.baseSpeed;
    const expected = 30;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Second exercise properties (index 1)', assert => {
    const message = 'Should also have index, key, title, and scale properties.';

    const exercise = createExercise(1);
    const actual =  exercise.hasOwnProperty('index')
                    exercise.hasOwnProperty('key') &&
                    exercise.hasOwnProperty('title') &&
                    exercise.hasOwnProperty('speedIncrement') &&
                    exercise.hasOwnProperty('scale');

    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Second exercise scale', assert => {
    const message = 'It should be Bach Minor Scale.';

    const exercise = createExercise(1);
    const actual = exercise.scale;
    const expected = 'Bach Minor Scale';

    assert.equal(actual, expected, message);
    assert.end();
  });
});
