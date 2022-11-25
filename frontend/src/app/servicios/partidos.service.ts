import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Partidos } from '../modelos/partidos.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private url:string = `${environment.url_gateway}/partidos`;

  constructor(private http:HttpClient) { }
  listar():Observable<Partidos[]>{
    return this.http.get<Partidos[]>(this.url);
  }
  eliminar(id:string){
    return this.http.delete<Partidos>(`${this.url}/${id}`,);
  }
  getPartido(id:string):Observable<Partidos>{
    return this.http.get<Partidos>(`${this.url}/${id}`,);
  }
  crear(elPartido:Partidos){
    return this.http.post<Partidos>(this.url, elPartido);
  }
  editar(id:string, elPartido:Partidos){
    return this.http.put(`${this.url}/${id}`,elPartido);
  }
}
