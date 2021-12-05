import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstacionModelo } from 'src/app/modelos/estacion.model';
import { EstacionesService } from 'src/app/servicios/estaciones.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private estacionesService: EstacionesService,
    private router: Router) { }

    fgValidacion = this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      coord_x: ['', [Validators.required]],
      coord_y: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
  
  ngOnInit(): void {
  }

  store(){
    let estaciones = new EstacionModelo();
    estaciones.nombre = this.fgValidacion.controls["nombre"].value;
    estaciones.direccion = this.fgValidacion.controls["direccion"].value;
    estaciones.coord_x = this.fgValidacion.controls["coord_x"].value;
    estaciones.coord_y = this.fgValidacion.controls["coord_x"].value;
    estaciones.tipo = this.fgValidacion.controls["tipo"].value;
 
    this.estacionesService.store(estaciones).subscribe((data: EstacionModelo)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/estaciones/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }


}
