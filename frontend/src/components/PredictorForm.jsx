import React, { useState } from 'react';
import axios from 'axios';

function PredictorForm() {
  const [behaviorCount, setBehaviorCount] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/predict", {
        behavior_count: parseInt(behaviorCount)
      });
      setResult(res.data.prediction === 1 ? "Churn" : "No Churn");
    } catch (err) {
      alert("Error: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Behavior Count:
        <input
          type="number"
          value={behaviorCount}
          onChange={(e) => setBehaviorCount(e.target.value)}
          required
        />
      </label>
      <button type="submit">Predict</button>

      {result !== null && (
        <h2 style={{ marginTop: '1rem' }}>Prediction: {result}</h2>
      )}
    </form>
  );
}

export default PredictorForm;
