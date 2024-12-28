import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesVeggieComponent } from './updates-veggie.component';

describe('UpdatesVeggieComponent', () => {
  let component: UpdatesVeggieComponent;
  let fixture: ComponentFixture<UpdatesVeggieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesVeggieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesVeggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
