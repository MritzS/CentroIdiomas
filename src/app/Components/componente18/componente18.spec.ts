import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Componente18 } from './componente18';

describe('Componente18', () => {
  let component: Componente18;
  let fixture: ComponentFixture<Componente18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente18],
    }).compileComponents();

    fixture = TestBed.createComponent(Componente18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
