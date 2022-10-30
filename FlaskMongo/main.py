from crypt import methods
from flask import Flask, request, Response
from flask import jsonify
from flask_cors import CORS

from Controladores.PartidoControlador import PartidoControlador
from Controladores.CandidatoControlador import CandidatoControlador



app = Flask(__name__)
cors = CORS(app)


##############################
##     VARIABLES GLOBALES   ##
##############################
miControladorPartido = PartidoControlador()
miControladorCandidato = CandidatoControlador()

####################################
##    PROBAR EL SERVICIO          ##
####################################
@app.route("/", methods=["GET"])
def test():
    json = {}
    json["message"] = "Server running ..."
    return jsonify(json)

#####################################
##      ENDPOINT PARTIDOS          ##
#####################################
@app.route("/partidos", methods=["GET"])
def getPartidos():
    json = miControladorPartido.index()
    return jsonify(json)

@app.route("/partidos", methods=["POST"])
def crearPartido():
    data = request.get_json()
    json = miControladorPartido.create(data)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=["GET"])
def getPartido(id):
    json = miControladorPartido.show(id)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=["PUT"])
def modificarPartido(id):
    data = request.get_json()
    json = miControladorPartido.update(id, data)
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=["DELETE"])
def eliminarPartido(id):
    json = miControladorPartido.delete(id)
    return jsonify(json)

#####################################
##      ENDPOINT CANDIDATOS        ##
#####################################
@app.route("/candidatos", methods = ["GET"])
def getCandidatos():
    json = miControladorCandidato.index()
    return jsonify(json)

@app.route("/candidatos", methods =["POST"])
def crearCandidato():
    data = request.get_json()
    json = miControladorCandidato.create(data)
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>", methods = ["GET"])
def getCandidato(id_candidato):
    json = miControladorCandidato.show(id_candidato)
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>", methods = ["PUT"])
def modificarCandidato(id_candidato):
    data = request.get_json()
    json = miControladorCandidato.update(id_candidato, data)
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>", methods = ["DELETE"])
def eliminarCandidato(id_candidato):
    json = miControladorCandidato.delete(id_candidato)
    return jsonify(json)

@app.route("/candidatos/<string:id_candidato>/partido/<string:id_partido>", methods=["PUT"])
def asignarPartidoCandidato(id_candidato, id_partido):
    json = miControladorCandidato.asignarCandidato(id_candidato, id_partido)
    return jsonify(json)


if __name__ == "__main__":
    app.run(debug=False, port=9000)