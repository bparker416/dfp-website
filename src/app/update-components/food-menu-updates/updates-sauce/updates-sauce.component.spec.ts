import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesSauceComponent } from './updates-sauce.component';

describe('UpdatesSauceComponent', () => {
  let component: UpdatesSauceComponent;
  let fixture: ComponentFixture<UpdatesSauceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesSauceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesSauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
