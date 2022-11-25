import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  correo: string = "";
  contrasena: string = "";
  constructor(private miServicioSeguridad: SeguridadService,
    private router: Router) { }
  /**
* Método que se ejecuta una vez se carga la página
*/
  ngOnInit(): void {
  }
  /**
  * Este método permite llevar a cabo el proceso de login,
  * llamando al método correspondiente de los servicios
  * para solicitar la validación al backend
  */
  login(): void {
    console.log("aqui" + this.correo + " contraseña " + this.contrasena)
    let elUsuario: Usuario = {
      correo: this.correo,
      contrasena: this.contrasena
    };
    this.miServicioSeguridad.login(elUsuario).subscribe(
      data => {
        this.router.navigate(['pages/dashboard']);
        this.miServicioSeguridad.guardarDatosSesion(data);
      },
      error => {
        Swal.fire({
          title: 'Error Login',
          text: error["error"]["message"],
          icon: 'error',
          timer: 5000
        });
      }
    );
  }
}
