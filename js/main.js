const getPositiveRandomInteger = (min, max) => {
  min = Math.floor(Math.abs(min));
  max = Math.floor(Math.abs(max));

  const gap = Math.abs(max - min);
  let randomInt;

  if (max > min) {
    randomInt = Math.round(gap * Math.random()) + min;
  } else {
    randomInt = Math.round(gap * Math.random()) + max;
  };

  return randomInt;
};

const getRandomPositiveFloatInteger = (min, max, float = 1) => {
    const randomInt = getPositiveRandomInteger(min, max);
    const maxFloat = 100;

    return +(randomInt + Math.random())
      .toFixed(parseInt(float) > maxFloat ? maxFloat : parseInt(float))
}