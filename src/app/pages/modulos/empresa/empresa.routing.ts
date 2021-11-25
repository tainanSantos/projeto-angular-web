import { ListEmpresaComponent } from './components/list-empresa/list-empresa.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpresaComponent } from './components/create-empresa/create-empresa.component';

const routes: Routes = [
  { path: '', component: ListEmpresaComponent },
  { path: 'create', component: CreateEmpresaComponent },
];

export const EmpresaRoutes = RouterModule.forChild(routes);
