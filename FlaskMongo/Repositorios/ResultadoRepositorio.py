from Repositorios.InterfazRepositorio import InterfazRepositorio
from Modelos.Resultado import Resultado
from bson import ObjectId

class ResultadoRepositorio(InterfazRepositorio[Resultado]):

    #Devuelve los candidatos votados en la mesa
    def getListadoCandidatosInscritosMesa(self, id_mesa):
        theQuery = {"mesa.$id": ObjectId(id_mesa)}
        return self.query(theQuery)

    #Función que revisa el canadidato votado en cada mesa
    def getListadoMesasCandidatoInscrito(self, id_candidato):
        theQuery = {"candidato.$id": ObjectId(id_candidato)}
        return self.query(theQuery)
    

    #Devuelve la cédula más grande osea la cédula más nueva
    def getNumeroCedulaMayorCandidato(self):
        query1 = {
            "$group":{
                "_id":"$candidato",
                "Total_votos_candidato ":{
                    "$sum": 1
                },
                "doc":{"$first":"$$ROOT"
                }
            },
        }
        pipeline = [query1]
        return self.queryAggregation(pipeline)

