import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mesas } from '../modelos/mesas.model';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private url: string=`${environment.url_gateway}/mesas`;

  constructor(private http:HttpClient) { }
  listar():Observable<Mesas[]>{
    return this.http.get<Mesas[]>(this.url);
  }
  eliminar(id:string){
    return this.http.delete<Mesas>(`${this.url}/${id}`,);
  }
  getMesa(id:string):Observable<Mesas>{
    return this.http.get<Mesas>(`${this.url}/${id}`);
  }
  crear(laMesa:Mesas){
  return this.http.post<Mesas>(this.url,laMesa);
  }
  editar(id:string, laMesa:Mesas){
    return this.http.put(`${this.url}/${id}`,laMesa);

  }
}
