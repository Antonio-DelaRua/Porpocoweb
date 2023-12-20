import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/products';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {

  listaEmp: FormGroup;

  constructor(private fb: FormBuilder) {
    this.listaEmp = this.fb.group({
      name: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaDalta: ['', Validators.required],
      obra: ['', Validators.required],
      dni: ['', Validators.required],
      numeroSS: ['', Validators.required],
      herramientas: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }


  addEmpleado(){
    const worker: Empleado = {
      name: this.listaEmp.value.name,
      apellidos: this.listaEmp.value.apellidos,
      fechaDalta: this.listaEmp.value.fechaDalta,
      obra: this.listaEmp.value.obra,
      dni: this.listaEmp.value.dni,
      numeroSS: this.listaEmp.value.numeroSS,
      herramientas: this.listaEmp.value.herramientas
    }
    
  }
}
