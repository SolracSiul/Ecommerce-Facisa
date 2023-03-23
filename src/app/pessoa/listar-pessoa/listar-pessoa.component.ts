import { Component, OnInit } from '@angular/core';
import { faCoffee, faEdit, faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPessoaComponent } from '../modal-pessoa/modal-pessoa.component';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})

export class ListarPessoaComponent  implements OnInit{
  pessoas : Pessoa[] = [];

  faCoffee = faCoffee;
  faedit = faEdit;
  faTimes = faTimes;
  faPlus = faPlusSquare;
  
  constructor(private pessoaService: PessoaService,
              private modalService: NgbModal){}
    ngOnInit(): void{
      this.pessoas = this.listarTodos();
  }
  listarTodos(): Pessoa[]{
      return this.pessoaService.listarTodos();
  }
  remover($event: any, pessoa: Pessoa): void{
    $event.preventDefault();
    if(confirm(`Deseja remover a pessoa ${pessoa.nome}?`)){
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.listarTodos();
    }
  }
  abrirModalPessoa(pessoa: Pessoa) {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }
}
