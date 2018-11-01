import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPeliculaComponent } from './modif-pelicula.component';

describe('ModifPeliculaComponent', () => {
  let component: ModifPeliculaComponent;
  let fixture: ComponentFixture<ModifPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
