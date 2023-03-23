import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InserirEditProdComponent } from './inserir-edit-prod/inserir-edit-prod.component';


@NgModule({
  declarations: [
    InserirEditProdComponent,
    ListarComponent,
    InserirEditProdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProdutoModule { }
