import { Directive, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl} from '@angular/forms';
import { Input } from '@angular/core';
@Directive({
  selector: '[idadeMinima]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: IdadeMinimaDirective,
    multi: true
  }]
})
export class IdadeMinimaDirective implements Validator, OnInit {

  @Input("valorMinimo") valorMinimo: string = "0"

  constructor() { }
  ngOnInit(): void { }  
  validate(c: FormControl){
    let v: number = +c.value;
    if(isNaN(v)){
      return {'minimo' : true, 'requiredValue': +this.valorMinimo}
    } if(v < + this.valorMinimo){
      return {'minimo' : true, 'requiredValue': +this.valorMinimo}
    }
    return null
  }
}
