import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input()
  correo:string="";
  @Input()
  seudonimo:string="";
  @Input()
  contrasena:string="";

  constructor(private miServicioLogin:LoginService,
    private router:Router) { }

  ngOnInit(): void {
  }

  btnLogin(){
    let mensaje = {
      Mensaje: "Botón login Funcionando" as const
    };
    let variables ={
      seudonimo: this.seudonimo,
      correo: this.correo,
      contrasena: this.contrasena
    };
    let mensajeError={
      ErrorMensagge1: "Revise sus credenciales",
      ErrorMessage2: "Revise que esten levantados los servicios"
    }
    this.miServicioLogin.login(variables).subscribe(
      data => {
        this.miServicioLogin.guardarDatosSesion(data),
        alert(JSON.stringify({
          "Bienvenido": variables.seudonimo})),
        this.router.navigateByUrl('paginasResultados');

      },
      error => {alert(JSON.stringify(mensajeError))}
    );
  }

  btnRegister(){
    let mensaje={
      Mensaje: "Botón de registro Funcionando" as const
    };

    alert(JSON.stringify({
      mensaje
    }));
  }
}
