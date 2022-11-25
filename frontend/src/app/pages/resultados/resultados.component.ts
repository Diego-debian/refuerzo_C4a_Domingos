import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnMesas(){
    this.router.navigateByUrl('mesasListar');
  }
  btnPartidos(){
    this.router.navigateByUrl('partidosListar');
  }
  btnCandidatos(){
    this.router.navigateByUrl('candidatosListar');
  }
}
