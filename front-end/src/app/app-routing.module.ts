import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { EditEmpleadoComponent } from './components/edit-empleado/edit-empleado.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: ListEmpleadosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: EditEmpleadoComponent},
  {path: 'edit/:id', component: EditEmpleadoComponent},
  {path: '*', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
