import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();

// import { calculateBmi, BmiValues } from "./bmiCalculator";

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  const bmi = calculateBmi(height, weight);
  if (isNaN(height) || isNaN(weight))
    res.status(400).send({
      error: "malformatted parameters",
    });
  else res.send({ height, weight, bmi });
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
