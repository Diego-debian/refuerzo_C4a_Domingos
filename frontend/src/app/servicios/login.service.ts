import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModelo } from '../modelos/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mesas } from '../modelos/mesas.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  elUsuario = new BehaviorSubject<UsuarioModelo>(new UsuarioModelo);

  private url:string=`${environment.url_gateway}/login`;
  /*
   * Constructor
   */
  constructor(private http:HttpClient) {
    this.verificarSesionActual();
  }

  public get usuarioSesionActiva():UsuarioModelo{
    return this.elUsuario.value;
  }

  setUsuario(user: UsuarioModelo){
    this.elUsuario.next(user);
  }

  getUsuario(){
    return this.elUsuario.asObservable();
  }

  login(infoUsuario: UsuarioModelo):Observable<UsuarioModelo>{
    return this.http.post<UsuarioModelo>(this.url,infoUsuario);
  }

  guardarDatosSesion(datosSesion:any){
    let sesionActual = localStorage.getItem('sesion');
    let data: UsuarioModelo={
      _id: datosSesion.user_id,
      token: datosSesion.token
    }
    localStorage.setItem('sesion', JSON.stringify(data));
    this.setUsuario(data);
  }

  logout(){
    localStorage.removeItem('sesion');
    this.setUsuario(new UsuarioModelo());
  }

  getDatosSesion(){
    let sesionActual = localStorage.getItem('sesion');
    return sesionActual;
  }

  verificarSesionActual(){
    let sesionActual = this.getDatosSesion();
    if (sesionActual){
      this.setUsuario(JSON.parse(sesionActual));
    }
  }

  sesionExiste():boolean{
    let sesionActual = this.getDatosSesion();
    return (sesionActual)?true : false;
  }


/*
  getToken(infoUsuario: UsuarioModelo):Observable<UsuarioModelo>{
    return this.http.post<UsuarioModelo>(this.url,infoUsuario);
  }*/
}
