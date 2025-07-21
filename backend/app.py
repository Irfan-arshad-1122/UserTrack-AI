from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model
model = joblib.load("model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        behavior_count = data.get("behavior_count")

        # Validate input
        if behavior_count is None:
            return jsonify({"error": "Missing behavior_count"}), 400

        prediction = model.predict(np.array([[behavior_count]]))
        result = int(prediction[0])  # Convert from NumPy int64

        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
