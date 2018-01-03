const Exercise = (index, key, title, scale, speedIncrement, baseSpeed) => {
  const exercise = {
    index: index,
    key: key,
    title: title,
    scale: scale,
    speedIncrement: speedIncrement,
    baseSpeed: baseSpeed
  };

  return exercise;
};

const createExercise = (index) => {
  let key = 'C';
  let title = 'Exercise 1';
  let scale = 'Major Scale/Ionian Mode';
  let speedIncrement = 0;
  let baseSpeed = 30;

  if (index === 1) {
    scale = 'Bach Minor Scale';
  }

  return Exercise(index, key, title, scale, speedIncrement, baseSpeed);
}

export default createExercise;
