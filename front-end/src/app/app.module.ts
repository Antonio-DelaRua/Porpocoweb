import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { EditEmpleadoComponent } from './components/edit-empleado/edit-empleado.component';


import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { HomeComponent } from './components/home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListEmpleadosComponent,
    EditEmpleadoComponent,
    ProgressBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
