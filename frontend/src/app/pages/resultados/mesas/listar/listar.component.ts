import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mesas: any;
  tableHead: string[]=["Número", "Inscritos"];
  constructor(private miServicioMesa:MesasService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.miServicioMesa.listar().subscribe(
      data => {this.mesas=data}
    );
  }

  regresar():void{
    this.router.navigateByUrl("regresar");
  }

  editar(id:string):void{
    this.router.navigateByUrl("mesasEditar/"+id);
  }

  eliminar(id:string):void{
    this.miServicioMesa.eliminar(id).subscribe(
      data => {
        alert("Se elimino la mesa con id: "+id),
        location.reload()
      },
      error => {alert("Upps algo paso y no se elimino")}
    );

  }
  agregar():void{
    this.router.navigateByUrl("mesasCrear");
  }
}
