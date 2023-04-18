import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddashbordComponent } from './carddashbord.component';

describe('CarddashbordComponent', () => {
  let component: CarddashbordComponent;
  let fixture: ComponentFixture<CarddashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarddashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
