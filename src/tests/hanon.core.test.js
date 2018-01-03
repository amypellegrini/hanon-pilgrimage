import test from 'tape';
import Hanon from '../hanon.core';

test('Hanon core module', nest => {
  nest.test('. Exercise API', assert => {
    const message = 'It should expose an API to create exercises.';

    const actual = Hanon.hasOwnProperty('createExercise');
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});