import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-votaciones',
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.scss']
})
export class VotacionesComponent implements OnInit {
  @Input()
  nombre_usuario= "";
  constructor() {
    this.nombre_usuario = location.href;
    this.nombre_usuario = this.nombre_usuario.replace('http://localhost:4200/votaciones/home/','');
    this.nombre_usuario = this.nombre_usuario.replace('%20', ' ');
    
  }

  ngOnInit(): void {
  }

}
