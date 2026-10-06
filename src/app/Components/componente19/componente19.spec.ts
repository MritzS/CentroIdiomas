import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Componente19 } from './componente19';

describe('Componente19', () => {
  let component: Componente19;
  let fixture: ComponentFixture<Componente19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente19],
    }).compileComponents();

    fixture = TestBed.createComponent(Componente19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
