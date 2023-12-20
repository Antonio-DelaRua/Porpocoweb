import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/products';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {id: 1,name: 'paco', apellidos: 'elflaco', fechaDalta: '12-12-23', obra: 'estepona', dni: '79020384u', numeroSS: 83483477548, herramientas: 4 },
    {id: 2,name: 'leti', apellidos: 'labella', fechaDalta: '11-12-23', obra: 'malaga', dni: '790430384u', numeroSS: 8343477548, herramientas: 0 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
