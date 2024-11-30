import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieComponent } from './veggie.component';

describe('VeggieComponent', () => {
  let component: VeggieComponent;
  let fixture: ComponentFixture<VeggieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeggieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
