import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesPizzaComponent } from './updates-pizza.component';

describe('UpdatesPizzaComponent', () => {
  let component: UpdatesPizzaComponent;
  let fixture: ComponentFixture<UpdatesPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
