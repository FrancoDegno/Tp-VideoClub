import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaUserComponent } from './baja-user.component';

describe('BajaUserComponent', () => {
  let component: BajaUserComponent;
  let fixture: ComponentFixture<BajaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
