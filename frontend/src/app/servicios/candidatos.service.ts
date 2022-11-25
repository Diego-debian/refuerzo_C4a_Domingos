import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidatos } from '../modelos/candidatos.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  private url:string = `${environment.url_gateway}/candidatos`;

  constructor(private http:HttpClient) { }

  listar():Observable<Candidatos[]>{
    return this.http.get<Candidatos[]>(this.url);
  }
  eliminar(id:string){
    return this.http.delete<Candidatos>(`${this.url}/${id}`,);
  }
  getPartido(id:string):Observable<Candidatos>{
    return this.http.get<Candidatos>(`${this.url}/${id}`,);
  }
  crear(elCandidato:Candidatos){
    return this.http.post<Candidatos>(this.url, elCandidato);
  }
  editar(id:string, elCandidato:Candidatos){
    return this.http.put(`${this.url}/${id}`,elCandidato);
  }
}
