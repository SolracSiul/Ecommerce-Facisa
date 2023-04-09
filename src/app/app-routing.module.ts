import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';

import { HomeComponent } from './home/home.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { UsuarioRoutes } from './usuario/usuario-routing.module';
import { ForgetComponent } from './forget/forget.component';
import { ProdutoRoutes } from './produto/produto-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN, FUNC'
    }
    
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN, GERENTE, FUNC'
    }
    
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
    
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
    canActivate: [AuthGuard],
    data:{
      role: 'ADMIN'
    }
  }
    ,

  {
    path:'forget/password',
    component: ForgetComponent
  },
  ...LoginRoutes,
  ...UsuarioRoutes,
  ...ProdutoRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
