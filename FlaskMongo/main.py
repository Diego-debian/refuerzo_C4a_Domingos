from crypt import methods
from flask import Flask, request, Response
from flask import jsonify
from flask_cors import CORS

from Controladores.PartidoControlador import PartidoControlador
from Controladores.CandidatoControlador import CandidatoControlador
from Controladores.MesaControlador import MesaControlador
from Controladores.ResultadoControlador import ResultadoControlador

app = Flask(__name__)
cors = CORS(app)


##############################
##     VARIABLES GLOBALES   ##
##############################
miControladorPartido = PartidoControlador()
miControladorCandidato = CandidatoControlador()
miControladorMesa = MesaControlador()
miControladorResultado = ResultadoControlador()

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

#####################################
##           ENDPOINT MESAS        ##
#####################################

@app.route("/mesas", methods=["GET"])
def getMesas():
    json = miControladorMesa.index()
    return jsonify(json)

@app.route("/mesas", methods=["POST"])
def crearMesa():
    data = request.get_json()
    json = miControladorMesa.create(data)
    return jsonify(json)

@app.route("/mesas/<string:id>", methods=["GET"])
def getMesa(id):
    json = miControladorMesa.show(id)
    return jsonify(json)

@app.route("/mesas/<string:id>", methods=["PUT"])
def modificarMesa(id):
    data = request.get_json()
    json = miControladorMesa.update(id, data)
    return jsonify(json)

@app.route("/mesas/<string:id>", methods=["DELETE"])
def eliminarMesa(id):
    json = miControladorMesa.delete(id)
    return jsonify(json)

#####################################
##       ENDPOINT RESULTADO        ##
#####################################
#Obtener todos los resultados
@app.route("/resultados", methods = ["GET"])
def getResultados():
    json = miControladorResultado.index()
    return jsonify(json)


#Añadir un resultado a una mesa
@app.route("/resultados/mesa/<string:id_mesa>/candidato/<string:id_candidato>", methods =["POST"])
def crearResultado(id_mesa, id_candidato):
    data = request.get_json()
    json = miControladorResultado.create(data, id_mesa, id_candidato)
    return jsonify(json)


#Obtener resultado especifico
@app.route("/resultados/<string:id>", methods=["GET"])
def getResultado(id):
    json = miControladorResultado.show(id)
    return jsonify(json)

#Modificar un resultado
@app.route("/resultados/<string:id_resultado>/mesa/<string:id_mesa>/candidato/<string:id_candidato>", methods=["PUT"])
def modificarResultado(id_resultado, id_mesa, id_candidato):
    data={}
    json = miControladorResultado.update(id_resultado, data, id_mesa, id_candidato)
    return jsonify(json)

#Eliminar Resultado
@app.route("/resultados/<string:id>", methods=["DELETE"])
def borrarResultado(id):
    json = miControladorResultado.delete(id)
    return jsonify(json)

#Buscar los candidatos votados en una mesa
@app.route("/resultados/mesa/<string:id_mesa>", methods=["GET"])
def inscritosMesa(id_mesa):
    json = miControladorResultado.getListarCandidatosMesa(id_mesa)
    return jsonify(json)

#Buscar el candidato en las mesas
@app.route("/resultados/mesas/<string:id_candidato>", methods=["GET"])
def inscritoEnMesas(id_candidato):
    json = miControladorResultado.getListarMesasDeInscritoCandidato(id_candidato)
    return jsonify(json)

#Buscar total de votos 
@app.route("/resultados/maxdocument", methods=["GET"])
def getMaxDocument():
    json = miControladorResultado.getMayorCedula()
    return jsonify(json)




if __name__ == "__main__":
    app.run(debug=False, port=9000)