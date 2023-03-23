import { Component,OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutosService } from 'src/app/auth/services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-inserir-edit-prod',
  templateUrl: './inserir-edit-prod.component.html',
  styleUrls: ['./inserir-edit-prod.component.css']
})
export class InserirEditProdComponent {
  @ViewChild('formProduto') formProduto! : NgForm;
  novoProduto: boolean = true;
  produto: Produto = new Produto();
  id!: string;
  loading!: boolean;
  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.novoProduto = !this.id;
    if (!this.novoProduto) {
      this.produtoService.buscarPorId(+this.id).subscribe( produto => {
      this.produto = produto;
    }
  );
  }
}
  salvar(): void {
    this.loading = true;
    if (this.formProduto.form.valid) {
    if (this.novoProduto) {
    this.produtoService.inserir(this.produto).subscribe(
    produto => {
    this.loading = false;
    this.router.navigate( ["/produtos"] );
    }
    );
    }
    else {
    this.produtoService.alterar(this.produto).subscribe(
      produto => {
        this.loading = false;
        this.router.navigate( ["/produtos"] );
        }
    );
    }
    }
    this.loading = false;
}

}
