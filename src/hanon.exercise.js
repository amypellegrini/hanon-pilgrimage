const Exercise = (index) => {
  if (!index) index = 0; 

  const exercise = {
    index,
    key: 'C',
    title: 'Exercise 1',
    scale: 'Major Scale/Ionian Mode'
  };

  return exercise;
};

export default Exercise;
