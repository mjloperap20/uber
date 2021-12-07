import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioModelo } from 'src/app/modelos/servicio.model';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private serviciosService: ServiciosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  fgValidacion = this.fb.group({
    fecha: ['', [Validators.required]],
    hora_inicio: ['', [Validators.required]],
    hora_fin: ['', [Validators.required]],
    placa_vehiculo: ['', [Validators.required]],
    nombre_conductor: ['', [Validators.required]],
    dinero_recogido: ['', [Validators.required]],
    ruta: ['', [Validators.required]],
  });

  store(){
    let servicio = new ServicioModelo();

    servicio.fecha = this.fgValidacion.controls["fecha"].value;
    servicio.hora_inicio = this.fgValidacion.controls["hora_inicio"].value;
    servicio.hora_fin = this.fgValidacion.controls["hora_fin"].value;
    servicio.placa_vehiculo = this.fgValidacion.controls["placa_vehiculo"].value;
    servicio.nombre_conductor = this.fgValidacion.controls["nombre_conductor"].value;
    servicio.dinero_recogido = this.fgValidacion.controls["dinero_recogido"].value;
    servicio.ruta = this.fgValidacion.controls["ruta"].value;
 
    this.serviciosService.store(servicio).subscribe((data: ServicioModelo)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/servicios/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }



}
