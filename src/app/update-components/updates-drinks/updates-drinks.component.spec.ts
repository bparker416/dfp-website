import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesDrinksComponent } from './updates-drinks.component';

describe('UpdatesDrinksComponent', () => {
  let component: UpdatesDrinksComponent;
  let fixture: ComponentFixture<UpdatesDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesDrinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
