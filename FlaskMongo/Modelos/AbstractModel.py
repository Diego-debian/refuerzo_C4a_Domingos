from abc import ABCMeta

class AbstractModel(metaclass=ABCMeta):
    #definimos el constructor
    def __init__(self, data):
        for llave, valor in data.items():
            setattr(self, llave, valor)