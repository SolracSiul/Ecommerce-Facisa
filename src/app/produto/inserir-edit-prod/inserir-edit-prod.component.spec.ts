import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEditProdComponent } from './inserir-edit-prod.component';

describe('InserirEditProdComponent', () => {
  let component: InserirEditProdComponent;
  let fixture: ComponentFixture<InserirEditProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirEditProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEditProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
