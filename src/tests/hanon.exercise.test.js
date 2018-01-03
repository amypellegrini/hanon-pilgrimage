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
    const expected = 'C Major';

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

  nest.test('. ');
});
