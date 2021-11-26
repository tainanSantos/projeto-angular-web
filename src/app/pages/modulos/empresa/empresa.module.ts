import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaRoutes } from './empresa.routing';
import { ListEmpresaComponent } from './components/list-empresa/list-empresa.component';
import { CreateEmpresaComponent } from './components/create-empresa/create-empresa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaService } from './empresa.service';



@NgModule({
  declarations: [
    ListEmpresaComponent,
    CreateEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutes,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    EmpresaService
  ]
})
export class EmpresaModule { }
