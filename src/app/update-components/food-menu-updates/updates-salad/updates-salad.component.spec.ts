import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesSaladComponent } from './updates-salad.component';

describe('UpdatesSaladComponent', () => {
  let component: UpdatesSaladComponent;
  let fixture: ComponentFixture<UpdatesSaladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesSaladComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
