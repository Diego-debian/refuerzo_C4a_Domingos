import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  btnIngresar(){
    let data = {
      seudonimo: this.seudonimo,
      correo:this.correo,
      contrasena: this.contrasena
    }
    alert(JSON.stringify(data));
  }
}
