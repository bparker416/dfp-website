import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesSidesComponent } from './updates-sides.component';

describe('UpdatesSidesComponent', () => {
  let component: UpdatesSidesComponent;
  let fixture: ComponentFixture<UpdatesSidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesSidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
