from Repositorios.MesaRepositorio import MesaRepositorio
from Modelos.Mesa import Mesa

class MesaControlador():
    #Constructor
    def __init__(self):
        self.repositorioMesa = MesaRepositorio()
    #Devuelve todos los documentos
    def index(self):
        return self.repositorioMesa.findAll()
    #Crea documentos
    def create(self, infoMesa):
        nuevaMesa = Mesa(infoMesa)
        return self.repositorioMesa.save(nuevaMesa)
    #Muestra un documento
    def show(self, id):
        laMesa = Mesa(self.repositorioMesa.findById(id))
        return laMesa.__dict__
    #Actualiza un documento
    def update(self, id, infoMesa):
        MesaActual = Mesa(self.repositorioMesa.findById(id))
        MesaActual.numero = infoMesa["numero"]
        MesaActual.cantidad_inscritos = infoMesa["cantidad_inscritos"]
        return self.repositorioMesa.save(MesaActual)
    #Borra un documento
    def delete(self, id):
        return self.repositorioMesa.delete(id)
