import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './auth/services/login.service';
import { Router } from '@angular/router';
import { Usuario } from './shared/models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  faEdit = faUserEdit;
  
  constructor(private router: Router, private loginService: LoginService){ }

  get usuarioLogado(): Usuario | null{
    return this.loginService.usuarioLogado;
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login'])
  }


}
