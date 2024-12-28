import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesDessertComponent } from './updates-dessert.component';

describe('UpdatesDessertComponent', () => {
  let component: UpdatesDessertComponent;
  let fixture: ComponentFixture<UpdatesDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesDessertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
