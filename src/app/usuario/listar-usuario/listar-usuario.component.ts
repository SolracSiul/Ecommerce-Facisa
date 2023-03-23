import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/auth/services/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {
  this.usuarios = [];
  this.listarTodos();
  }
  listarTodos(): Usuario[] {
    this.usuarioService.listarTodos().subscribe({
    next: (data: Usuario[]) => {
    if (data == null) {
    this.usuarios = [];
    }else {
    this.usuarios = data;
    }
    }
    });
    return this.usuarios;
  }
  remover($event: any, usuario: Usuario): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuário "' +
    usuario.nome + '"?')) {
    this.usuarioService.remover(usuario.id!).
    subscribe({
    complete: () => { this.listarTodos(); }
    });
    }
  }
}  