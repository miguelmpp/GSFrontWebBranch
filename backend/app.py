from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

API_URL = 'https://services3.arcgis.com/pI4ewELlDKS2OpCN/arcgis/rest/services/SDG_6_3_2_Proportion_of_bodies_of_water_with_good_ambient_water_quality/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-138.297%2C31.345%2C-100.592%2C43.510&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json&resultRecordCount=8'

def fetch_data_from_api(url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise SystemExit(e)

def process_data(data):
    features = data.get('features', [])
    processed_data = [
        {
            'location': feature['attributes'].get('ROMNAM', 'N/A'),
            'water_quality': feature['attributes'].get('obsValue', 'N/A'),
            'date': feature['attributes'].get('DATA_LAST_UPDATE', 'N/A')
        }
        for feature in features
    ]
    return processed_data

def write_to_file(data, filename='data.json'):
    import json
    with open(filename, 'w') as file:
        json.dump(data, file)

@app.route('/api/ocean-health', methods=['GET'])
def get_ocean_health():
    try:
        data = fetch_data_from_api(API_URL)
        processed_data = process_data(data)
        write_to_file(processed_data)  # Escrever os dados em um arquivo
        return jsonify(processed_data)
    except SystemExit as e:
        return jsonify({"error": str(e)}), 500

@app.route('/', methods=['GET'])
def home():
    return 'API is running'

if __name__ == '__main__':
    app.run(debug=True)
