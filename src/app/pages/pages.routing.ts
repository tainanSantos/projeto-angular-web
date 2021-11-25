import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'empresa', loadChildren: () => import('src/app/pages/modulos/empresa/empresa.module').then(m => m.EmpresaModule) },
      { path: 'funcionario', loadChildren: () => import('src/app/pages/modulos/funcionario/funcionario.module').then(m => m.FuncionarioModule) }
    ]
  },

];

export const PagesRoutes = RouterModule.forChild(routes);
