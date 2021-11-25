import { FuncionarioRoutes } from './funcionario.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFuncionarioComponent } from './components/list-funcionario/list-funcionario.component';
import { CreateFuncionarioComponent } from './components/create-funcionario/create-funcionario.component';



@NgModule({
  declarations: [
    ListFuncionarioComponent,
    CreateFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutes
  ]
})
export class FuncionarioModule { }
