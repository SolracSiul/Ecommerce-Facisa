import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';
import { UsuarioService } from './usuario.service';
import { map, switchMap } from 'rxjs/operators';

const LS_CHAVE:string = "usuarioLogado"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private usuarioService: UsuarioService) { }

  public get usuarioLogado(): Usuario {
    const usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario | null> {
    const adminLogin = 'admin123';
    const adminSenha = 'admin123';

    if (login.login === adminLogin && login.senha === adminSenha) {
      const admin = new Usuario(1, "Sorak-Admin", adminLogin, adminSenha, "ADMIN");
      this.usuarioLogado = admin;
      return of(admin);
    } else {
      return this.usuarioService.listarTodos().pipe(
        switchMap((usuarios: Usuario[]) => {
          return of(usuarios.find(usuario => usuario.login === login.login && usuario.senha === login.senha)).pipe(
            map((usuario: Usuario | undefined) => usuario || null)
          );
        })
      );
    }
  }
}