import { Component, OnInit,ViewChild } from '@angular/core';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { NgForm } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  faSave = faSave;
  faArrowLeft= faArrowLeft;

  @ViewChild("formPessoa") formPessoa!: NgForm;
  pessoa!: Pessoa;
  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
    ){}
    
  ngOnInit(): void{
    let id = +this.route.snapshot.params['id'];
    const res = this.pessoaService.buscarPessoaPorId(id);
    if(res !== undefined){
      this.pessoa = res;
    }else{
      throw new Error ("Pessoa não encontra: id = " + id)
    }
  }
  atualizar(): void{
    if(this.formPessoa.form.valid){
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas'])
    }
  }
}
