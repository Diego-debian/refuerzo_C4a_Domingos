import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partidos } from 'src/app/modelos/partidos.model';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-crearpartido',
  templateUrl: './crearpartido.component.html',
  styleUrls: ['./crearpartido.component.scss']
})
export class CrearpartidoComponent implements OnInit {
  modoCreacion: boolean = true;
  id_partido: string = '';
  intentoEnvio: boolean = false;
  elPartido: Partidos = {
    nombre: "",
    lema: ""
  }
  constructor(private miServiciosPartidos: PartidosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params["id_partido"]) {
      this.modoCreacion = false;
      this.id_partido = this.rutaActiva.snapshot.params["id_partido"];
      this.getPartido(this.id_partido);
      } else {
      this.modoCreacion = true;
      }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elPartido.nombre == "" ||
      this.elPartido.lema == "" ) {
      return false;
    } else {
      return true;
    }
  }
  getPartido(id: string) {
    this.miServiciosPartidos.getPartido(id).subscribe(
      data => { this.elPartido = data }
    );
  }

  agregarPartido(): void {
    if (this.validarDatosCompletos()){
      this.intentoEnvio=true;
      this.miServiciosPartidos.crear(this.elPartido).
      subscribe(
        data => {
          alert("Partido creado"),
          this.router.navigateByUrl("partidosListar");
      },
        error => {alert("No se pudo crear los datos")}
      );
    }
  }


  editarPartido():void{
    if(this.validarDatosCompletos()){
      let id_del_partido = JSON.stringify(this.elPartido._id).replace("\"", "");
      id_del_partido = id_del_partido.replace("\"", "");
      this.miServiciosPartidos.editar(id_del_partido, this.elPartido).
      subscribe(data => {
        alert("Partido modificado"),
        this.router.navigateByUrl("partidosListar");
      },
      error => {alert("No se pudo crear los datos")});
    }
  }

  cancelar():void{
    this.router.navigateByUrl("partidosListar");
  }

}
