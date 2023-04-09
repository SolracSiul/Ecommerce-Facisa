import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
