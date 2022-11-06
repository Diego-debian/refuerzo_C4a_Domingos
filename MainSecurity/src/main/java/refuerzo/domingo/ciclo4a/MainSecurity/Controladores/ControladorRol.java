package refuerzo.domingo.ciclo4a.MainSecurity.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import refuerzo.domingo.ciclo4a.MainSecurity.Modelos.Rol;
import refuerzo.domingo.ciclo4a.MainSecurity.Repositorios.RepositorioRol;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/roles")
public class ControladorRol {
    @Autowired
    private RepositorioRol miRepositorioRol;

    @GetMapping("")
    public List<Rol> index() {
        return miRepositorioRol.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Rol create(@RequestBody Rol infoRol){
        return miRepositorioRol.save(infoRol);
    }

    @GetMapping("{id}")
    public Rol show(@PathVariable String id){
        Rol rolActual = miRepositorioRol
                .findById(id)
                .orElse(null);
        return rolActual;
    }

    @PutMapping("{id}")
    public Rol update(@PathVariable String id, @RequestBody Rol infoRol){
        Rol rolActual = miRepositorioRol
                .findById(id)
                .orElse(null);
        if (rolActual != null){
            rolActual.setNombre(infoRol.getNombre());
            rolActual.setDescripcion(infoRol.getDescripcion());
            return miRepositorioRol.save(rolActual);
        }else{
            return null;
        }
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable String id){
        Rol rolActual = miRepositorioRol
                .findById(id)
                .orElse(null);
        if(rolActual!=null){
            miRepositorioRol.delete(rolActual);
        }
    }

}
