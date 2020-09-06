interface ExerciseValues {
  value1: Array<number>;
  value2: number;
}

const parseArguments = (args: Array<string>): ExerciseValues => {
  if (args.length < 4) throw new Error("Not enough arguments");

  return {
    value1: args.slice(3).map((a) => Number(a)),
    value2: Number(args[2]),
  };
};

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

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
// console.log(calculateExercises([3, 0, 7, 4.5, 0, 3, 5], 2));

export {};

try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateExercises(value1, value2));
} catch (e) {
  console.log("error, something bad happened, message: ", e.message);
}
