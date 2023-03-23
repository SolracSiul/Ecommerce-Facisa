import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { ProdutosService } from 'src/app/auth/services/produtos.service';
import { Produto } from 'src/app/shared/models/produto';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  produtos: Produto[] = [];
  constructor(private produtoService: ProdutosService, private loginService: LoginService) { }

  get usuarioLogado(): Usuario | null{
    return this.loginService.usuarioLogado;
  }
  
  ngOnInit(): void {
  this.produtos = [];
  this.listarTodos();
  }
  listarTodos(): Produto[] {
    this.produtoService.listarTodos().subscribe({
    next: (data: Produto[]) => {
    if (data == null) {
    this.produtos = [];
    }else {
    this.produtos = data;
    }
    }
    });
    return this.produtos;
  }
  remover($event: any, produto: Produto): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuário "' +
    produto.nome_produto + '"?')) {
    this.produtoService.remover(produto.id_produto!).
    subscribe({
    complete: () => { this.listarTodos(); }
    });
    }
  }
}
