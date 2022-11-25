import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-listarpartido',
  templateUrl: './listarpartido.component.html',
  styleUrls: ['./listarpartido.component.scss']
})
export class ListarpartidoComponent implements OnInit {
  partidos: any;
  tableHead: string[]=["Nombre", "Lema"];
  constructor(private miServicioPartidos:PartidosService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.miServicioPartidos.listar().subscribe(
      data => {this.partidos=data}
    );
  }

  regresar():void{
    this.router.navigateByUrl("regresar");
  }

  editar(id:string):void{
    this.router.navigateByUrl("partidosEditar/"+id);
  }

  eliminar(id:string):void{
    this.miServicioPartidos.eliminar(id).subscribe(
      data => {
        alert("Se elimino el partido con id: "+id),
        location.reload()
      },
      error => {alert("Upps algo paso y no se elimino")}
    );

  }
  agregar():void{
    this.router.navigateByUrl("partidosCrear");
  }
}
