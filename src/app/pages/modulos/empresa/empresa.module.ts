import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaRoutes } from './empresa.routing';
import { ListEmpresaComponent } from './components/list-empresa/list-empresa.component';
import { CreateEmpresaComponent } from './components/create-empresa/create-empresa.component';



@NgModule({
  declarations: [
    ListEmpresaComponent,
    CreateEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutes
  ]
})
export class EmpresaModule { }
