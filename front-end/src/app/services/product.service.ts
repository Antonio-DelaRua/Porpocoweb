import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../interfaces/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor( private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/'
  }

  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteEmpleado(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }



}
