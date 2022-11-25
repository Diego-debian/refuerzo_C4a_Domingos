from pymongo import MongoClient
import json
import certifi

ca = certifi.where()

####################
def loadConfigFile():
    with open('database/config.json') as f:
        data = json.load(f)
    return data

def dbConnection():
    dataConfig = loadConfigFile()
    try:
        #conectamos con atlas
        client = MongoClient(dataConfig['MONGO_URI_SERVER'], tlsCAFile=ca)
        #Conexión local
        #client = MongoClient(dataConfig['MONGO_URI_LOCAL'], dataConfig['LOCAL_PORT'])
        db = client["Proyecto_Final_Ciclo4a_Grupo37"]
    except:
        print("Error de conexión en la DB")
    return db