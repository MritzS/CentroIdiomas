import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Componente17 } from './componente17';

describe('Componente17', () => {
  let component: Componente17;
  let fixture: ComponentFixture<Componente17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente17],
    }).compileComponents();

    fixture = TestBed.createComponent(Componente17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
