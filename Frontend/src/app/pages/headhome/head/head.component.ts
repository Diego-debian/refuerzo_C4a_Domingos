import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private router:Router,private miServicioLogin:SeguridadService) { }

  ngOnInit(): void {
  }
  btnIngresar(){
    this.router.navigateByUrl('seguridad');
    this.miServicioLogin.logout();

  }
}
