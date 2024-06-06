from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

API_URL = 'https://services3.arcgis.com/pI4ewELlDKS2OpCN/arcgis/rest/services/SDG_6_3_2_Proportion_of_bodies_of_water_with_good_ambient_water_quality/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-138.297%2C31.345%2C-100.592%2C43.510&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json&resultRecordCount=8'

@app.route('/api/ocean-health', methods=['GET'])
def get_ocean_health():
    try:
        response = requests.get(API_URL, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        print("Dados recebidos da API externa:", data)

        features = data.get('features', [])
        processed_data = [
            {
                'location': feature['attributes'].get('ROMNAM', 'N/A'),
                'water_quality': feature['attributes'].get('obsValue', 'N/A'),
                'date': feature['attributes'].get('DATA_LAST_UPDATE', 'N/A')
            }
            for feature in features
        ]
        return jsonify(processed_data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

@app.route('/', methods=['GET'])
def home():
    return 'API is running'

if __name__ == '__main__':
    app.run(debug=True)
