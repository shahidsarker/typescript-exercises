const calculateExercises = (hours: Array<number>, target: number): object => {
  const periodLength = hours.length;
  const trainingDays = hours.filter((h) => h !== 0).length;
  const average = hours.reduce((a, c) => a + c) / periodLength;
  const success = average >= target;
  let rating;
  let ratingDescription;
  if (average < target / 2) {
    rating = 1;
    ratingDescription = "pretty bad";
  } else if (average < target) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 3;
    ratingDescription = "doing great!";
  }
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
console.log(calculateExercises([3, 0, 7, 4.5, 0, 3, 5], 2));
