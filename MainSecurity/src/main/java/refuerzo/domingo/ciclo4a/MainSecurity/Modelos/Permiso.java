package refuerzo.domingo.ciclo4a.MainSecurity.Modelos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Permiso {
    @Id
    private String _id;
    private String url;
    private String metodo;

    public Permiso(String url, String metodo){
        this.url = url;
        this.metodo = metodo;
    }
    public String get_id(){
        return _id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getMetodo() {
        return metodo;
    }

    public void setMetodo(String metodo) {
        this.metodo = metodo;
    }
}
