import { Component ,ViewChild} from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;
  constructor( private loginService: LoginService, private router: Router,private route: ActivatedRoute) {
  if (this.loginService.usuarioLogado) {
  this.router.navigate( ["/home"] );  }
}
ngOnInit(): void {
  this.route.queryParams.subscribe(params => {this.message = params['error'];
  });
}
logar(): void {
  this.loading = true;
  if (this.formLogin.form.valid) {
  this.loginService.login(this.login).subscribe((usu) => {
  if (usu != null) {
  this.loginService.usuarioLogado = usu;
  this.loading = false;
  this.router.navigate( ["/produtos/listar"] );
  }
  else {
  this.message = "Usuário/Senha inválidos.";
  }
  });
  }
  this.loading = false;
}}
