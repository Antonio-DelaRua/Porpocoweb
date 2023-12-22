import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {

  listaEmp: FormGroup;
  loading = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder, private _ProductService: ProductService, private router: Router, arouter: ActivatedRoute) {
    this.listaEmp = this.fb.group({
      name: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaDalta: ['', Validators.required],
      obra: ['', Validators.required],
      dni: ['', Validators.required],
      numeroSS: ['', Validators.required],
      herramientas: ['', Validators.required],
    })
    this.id = Number (arouter.snapshot.paramMap.get('id'));
    
   
   }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion = 'Editar ';
      this.getEmpleado(this.id);
    }
  }

  getEmpleado(id: number){
    this.loading = true;
    this._ProductService.getEmpleado(id).subscribe((data: Empleado)=>{
      console.log(data)
    this.loading = false;
    this.listaEmp.setValue({
      name: data.name,
      apellidos: data.apellidos,
      fechaDalta: data.fechaDalta,
      obra: data.obra,
      dni: data.dni,
      numeroSS: data.numeroSS,
      herramientas: data.herramientas
    })
    })
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

    if(this.id !== 0){
      this.loading = true;
      worker.id = this.id;
      this._ProductService.updateEmpleado(this.id, worker).subscribe( () =>{
        this.loading = false;
        this.router.navigate(['/']);
      })
    } else {
      this.loading = true;
      this._ProductService.saveEmpleado(worker).subscribe( ()=> {
      console.log('empleado agregado')
      this.loading = false;
      this.router.navigate(['/']);
    })
    }
  
  }
}
