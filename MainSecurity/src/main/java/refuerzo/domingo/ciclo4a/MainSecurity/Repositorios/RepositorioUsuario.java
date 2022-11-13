package refuerzo.domingo.ciclo4a.MainSecurity.Repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import refuerzo.domingo.ciclo4a.MainSecurity.Modelos.Usuario;

public interface RepositorioUsuario extends MongoRepository<Usuario, String> {
    @Query("{'correo':?0}")
    Usuario getUserByMail(String correo);
}
