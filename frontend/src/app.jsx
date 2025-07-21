import React from 'react';
import PredictorForm from './components/PredictorForm';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Customer Churn Predictor</h1>
      <PredictorForm />
    </div>
  );
}

export default App;
