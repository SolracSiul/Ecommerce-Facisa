import { Injectable } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  BASE_URL = "http://localhost:3000/produtos/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.BASE_URL,
    this.httpOptions);
    }

  buscarPorId(id_produto: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.BASE_URL + id_produto,
    this.httpOptions);
    }

  inserir(produto: Produto): Observable<Produto> {
      return this.httpClient.post<Produto>(this.BASE_URL,
      JSON.stringify(produto),
      this.httpOptions);
    }

  remover(id_produto: number): Observable<Produto> {
    return this.httpClient.delete<Produto>(this.BASE_URL + id_produto,
    this.httpOptions);
    }

  alterar(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.BASE_URL + produto.id_produto,
    JSON.stringify(produto),
    this.httpOptions);
    }
}
