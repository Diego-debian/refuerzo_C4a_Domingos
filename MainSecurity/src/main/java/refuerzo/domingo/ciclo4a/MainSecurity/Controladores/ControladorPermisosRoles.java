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
@RequestMapping("/permisos-roles")
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

    /**
     * Método asigna los permisos que tiene cada rol
     * @param id_rol
     * @param id_permiso
     * @return
     */
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

    /**
     * Mostrar los permisos de un rol determinado
     * @param id_permisoRol
     * @return
     */
    @GetMapping("{id_permisoRol}")
    public PermisosRol show(@PathVariable String id_permisoRol){
        PermisosRol permisosRolActual = miRepositorioPermisosRol
                .findById(id_permisoRol)
                .orElse(null);
        return permisosRolActual;
    }

    /**
     * Permite modificar un resultado de permiso rol
     * y asignarle un nuevo rol o un nuevo permiso
     * @param id_permisosRol
     * @param id_rol
     * @param id_permiso
     * @return
     */
    @PutMapping("{id_permisosRol}/rol/{id_rol}/permiso/{id_permiso}")
    public PermisosRol update(@PathVariable String id_permisosRol,
                              @PathVariable String id_rol,
                              @PathVariable String id_permiso){
        PermisosRol permisosRolActual = miRepositorioPermisosRol
                .findById(id_permisosRol)
                .orElse(null);
        Rol elRol = miRepositorioRol.findById(id_rol)
                .orElse(null);
        Permiso elPermiso = miRepositorioPermiso.findById(id_permiso)
                .orElse(null);
        if(permisosRolActual!=null && elRol!=null && elPermiso!= null){
            permisosRolActual.setPermiso(elPermiso);
            permisosRolActual.setRol(elRol);
            return miRepositorioPermisosRol.save(permisosRolActual);
        }else{
            return null;
        }
    }

    /**
     * Elimina un permisoRol
     * @param id
     */
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable String id){
        PermisosRol permisosRolActual = miRepositorioPermisosRol
                .findById(id)
                .orElse(null);
        if(permisosRolActual!=null){
            miRepositorioPermisosRol.delete(permisosRolActual);
        }
    }

    /**
     * Me dice si un rol determinado tiene permisos sobre urls
     * métodos
     * @param id_rol
     * @param infoPermiso
     * @return
     */
    @GetMapping("validar-permiso/rol/{id_rol}")
    public PermisosRol getPermisos(@PathVariable String id_rol,
                                   @RequestBody Permiso infoPermiso){
        Permiso elPermiso = miRepositorioPermiso
                .getPermiso(infoPermiso.getUrl(),
                        infoPermiso.getMetodo());
        Rol elRol = miRepositorioRol.findById(id_rol).get();
        if(elPermiso!=null && elRol!=null){
            return miRepositorioPermisosRol.getPermisoRol(elRol.get_id(),
                    elPermiso.get_id());
        }else{
            return null;
        }
    }
}
