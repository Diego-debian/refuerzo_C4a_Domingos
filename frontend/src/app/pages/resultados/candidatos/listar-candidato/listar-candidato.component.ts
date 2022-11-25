import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/servicios/candidatos.service';

@Component({
  selector: 'app-listar-candidato',
  templateUrl: './listar-candidato.component.html',
  styleUrls: ['./listar-candidato.component.scss']
})
export class ListarCandidatoComponent implements OnInit {
  candidatos: any;
  tableHead: string[]=["Cédula", "Número resolución", "Nombre", "Apellido"];
  constructor(private miServicioCandidato:CandidatosService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.miServicioCandidato.listar().subscribe(
      data => {this.candidatos=data}
    );
  }

  regresar():void{
    this.router.navigateByUrl("regresar");
  }

  editar(id:string):void{
    this.router.navigateByUrl("candidatosEditar/"+id);
  }

  eliminar(id:string):void{
    this.miServicioCandidato.eliminar(id).subscribe(
      data => {
        alert("Se elimino el candidato con id: "+id),
        location.reload()
      },
      error => {alert("Upps algo paso y no se elimino")}
    );

  }
  agregar():void{
    this.router.navigateByUrl("candidatosCrear");
  }
}
