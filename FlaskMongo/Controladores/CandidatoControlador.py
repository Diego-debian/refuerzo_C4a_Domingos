from Repositorios.CandidatoRepositorio import CandidatoRepositorio
from Repositorios.PartidoRepositorio import PartidoRepositorio
from Modelos.Candidato import Candidato
from Modelos.Partido import Partido

class CandidatoControlador():
    def __init__(self):
        self.repositorioCandidato = CandidatoRepositorio()
        self.repositorioPartido = PartidoRepositorio()

    def index(self):
        return self.repositorioCandidato.findAll()

    def create(self, infoCandidato):
        nuevoCandidato = Candidato(infoCandidato)
        return self.repositorioCandidato.save(nuevoCandidato)
    def show(self, id):
        elCandidato = Candidato(self.repositorioCandidato.findById(id))
        return elCandidato.__dict__

    def update(self, id, infoCandidato):
        elCandidato = Candidato(self.repositorioCandidato.findById(id))
        elCandidato.cedula = infoCandidato["cedula"]
        elCandidato.numero_resolucion = infoCandidato["numero_resolucion"]
        elCandidato.nombre = infoCandidato["nombre"]
        elCandidato.apellido = infoCandidato["apellido"]
        return self.repositorioCandidato.save(elCandidato)

    def delete(self, id):
        return self.repositorioCandidato.delete(id)
    
    def asignarCandidato(self, id, id_partido):
        candidatoActual = Candidato(self.repositorioCandidato.findById(id))
        partidoActual = Partido(self.repositorioPartido.findById(id_partido))
        candidatoActual.partido = partidoActual
        return self.repositorioCandidato.save(candidatoActual)

