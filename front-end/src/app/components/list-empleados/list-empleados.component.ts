import { Component, OnInit } from '@angular/core';

import { Empleado } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  listEmpleados: Empleado[] = []
  loading: boolean = false

  constructor( private _productService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts();

  }

  getListProducts(){
    this.loading = true;

    this._productService.getEmpleados().subscribe((data : Empleado[])=>{
    this.listEmpleados = data;
    this.loading = false;

    })
  }

  deleteEmpleado(id: number){
    this.loading = true;
    this._productService.deleteEmpleado(id).subscribe(() => {
    this.getListProducts();
    
    
    })
  }

}
