from flask import Flask, request, Response
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

####################################
##    PROBAR EL SERVICIO          ##
####################################
@app.route("/", methods=["GET"])
def test():
    json = {}
    json["message"] = "Server running ..."
    return jsonify(json)

if __name__ == "__main__":
    app.run(debug=False, port=9000)