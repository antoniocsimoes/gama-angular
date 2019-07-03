import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorBotoesComponent } from './contador-botoes.component';

describe('ContadorBotoesComponent', () => {
  let component: ContadorBotoesComponent;
  let fixture: ComponentFixture<ContadorBotoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorBotoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
