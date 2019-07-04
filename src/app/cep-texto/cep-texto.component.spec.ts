import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepTextoComponent } from './cep-texto.component';

describe('CepTextoComponent', () => {
  let component: CepTextoComponent;
  let fixture: ComponentFixture<CepTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
