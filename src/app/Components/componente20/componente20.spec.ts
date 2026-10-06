import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Componente20 } from './componente20';

describe('Componente20', () => {
  let component: Componente20;
  let fixture: ComponentFixture<Componente20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente20],
    }).compileComponents();

    fixture = TestBed.createComponent(Componente20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
