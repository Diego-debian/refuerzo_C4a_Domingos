import { Component, Input, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-formulariologin',
  templateUrl: './formulariologin.component.html',
  styleUrls: ['./formulariologin.component.scss']
})
export class FormulariologinComponent implements OnInit {
 @Input()
 seudonimo:string="";
 @Input()
 correo:string="";
 @Input()
  contrasena:string="";
  constructor(private miServicioSeguridad:SeguridadService) { }

  ngOnInit(): void {
  }

  btnIngresar(){
    let datos = {
      seudonimo: this.seudonimo,
      correo:this.correo,
      contrasena: this.contrasena
    };
    this.miServicioSeguridad.login(datos).subscribe(
      data => {
        this.miServicioSeguridad.guardarDatosSesion(data),
        //alert(`Bienvenido usuario ${datos.seudonimo}`)
          this.miServicioSeguridad.loginMesas().subscribe(
            datos => alert(JSON.stringify(datos))
          )
      },
      error=> {alert("Error de credenciales Revise su usuario y contraseña")}
    );
  }
}
