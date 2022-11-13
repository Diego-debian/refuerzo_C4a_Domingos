package refuerzo.domingo.ciclo4a.MainSecurity.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import refuerzo.domingo.ciclo4a.MainSecurity.Modelos.Permiso;
import refuerzo.domingo.ciclo4a.MainSecurity.Modelos.PermisosRol;
import refuerzo.domingo.ciclo4a.MainSecurity.Modelos.Rol;
import refuerzo.domingo.ciclo4a.MainSecurity.Repositorios.RepositorioPermiso;
import refuerzo.domingo.ciclo4a.MainSecurity.Repositorios.RepositorioPermisosRol;
import refuerzo.domingo.ciclo4a.MainSecurity.Repositorios.RepositorioRol;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("permisos-roles")
public class ControladorPermisosRoles {
    @Autowired
    private RepositorioPermiso miRepositorioPermiso;
    @Autowired
    private RepositorioRol miRepositorioRol;
    @Autowired
    private RepositorioPermisosRol miRepositorioPermisosRol;

    /**
     * Devuelve todos los permisos de los roles
     * @return
     */
    @GetMapping("")
    public List<PermisosRol> index(){
        return miRepositorioPermisosRol.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("rol/{id_rol}/permiso/{id_permiso}")
    public PermisosRol create(@PathVariable String id_rol,
                              @PathVariable String id_permiso){
        PermisosRol nuevoPermisoRol = new PermisosRol();
        Rol elRol = miRepositorioRol.findById(id_rol)
                .orElse(null);
        Permiso elPermiso = miRepositorioPermiso.findById(id_permiso)
                .orElse(null);
        if(elRol!=null && elPermiso!=null){
            nuevoPermisoRol.setRol(elRol);
            nuevoPermisoRol.setPermiso(elPermiso);
            return miRepositorioPermisosRol.save(nuevoPermisoRol);
        }else{
            return null;
        }
    }
}
