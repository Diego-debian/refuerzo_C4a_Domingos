import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesas } from 'src/app/modelos/mesas.model';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_mesa: string = '';
  intentoEnvio: boolean = false;
  laMesa: Mesas = {
    numero: "",
    cantidad_inscritos: ""
  }
  constructor(private miServicioMesas: MesasService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params["id_mesa"]) {
      this.modoCreacion = false;
      this.id_mesa = this.rutaActiva.snapshot.params["id_mesa"];
      this.getMesa(this.id_mesa);
      } else {
      this.modoCreacion = true;
      }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.laMesa.numero == "" ||
      this.laMesa.cantidad_inscritos == "" ) {
      return false;
    } else {
      return true;
    }
  }
  getMesa(id: string) {
    this.miServicioMesas.getMesa(id).subscribe(
      data => { this.laMesa = data }
    );
  }
  agregrarMesa(): void {
    if (this.validarDatosCompletos()){
      this.intentoEnvio=true;
      this.miServicioMesas.crear(this.laMesa).
      subscribe(
        data => {
          alert("Mesa creada"),
          this.router.navigateByUrl("mesasListar");
      },
        error => {alert("No se pudo crear los datos")}
      );
    }
  }


  editarMesa():void{
    if(this.validarDatosCompletos()){
      let id_de_la_mesa = JSON.stringify(this.laMesa._id).replace("\"", "");
      id_de_la_mesa = id_de_la_mesa.replace("\"", "");
      this.miServicioMesas.editar(id_de_la_mesa, this.laMesa).
      subscribe(data => {
        alert("Mesa modificada"),
        this.router.navigateByUrl("mesasListar");
      },
      error => {alert("No se pudo crear los datos")});
    }
  }

  cancelar():void{
    this.router.navigateByUrl("mesasListar");
  }

}
