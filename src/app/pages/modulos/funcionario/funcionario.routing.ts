import { CreateFuncionarioComponent } from './components/create-funcionario/create-funcionario.component';
import { Routes, RouterModule } from '@angular/router';
import { ListFuncionarioComponent } from './components/list-funcionario/list-funcionario.component';

const routes: Routes = [
  { path: '', component: ListFuncionarioComponent },
  { path: 'create', component: CreateFuncionarioComponent }
];

export const FuncionarioRoutes = RouterModule.forChild(routes);
