import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.css']
})
export class ModalPessoaComponent implements OnInit{
  @Input() pessoa!: Pessoa;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
  }
}
