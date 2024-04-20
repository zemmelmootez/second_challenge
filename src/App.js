import React, { useState } from "react";

const BodyShapeIndicator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBMI] = useState(null);
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (height === "" || weight === "" || age === "") {
      alert("Please enter height, weight, and age.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setResult("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setResult("Normal Weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }
  };

  return (
    <div>
      <h2>Body Shape Indicator</h2>
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default BodyShapeIndicator;
