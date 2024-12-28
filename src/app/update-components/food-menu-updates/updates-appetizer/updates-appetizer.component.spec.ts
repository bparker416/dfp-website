import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesAppetizerComponent } from './updates-appetizer.component';

describe('UpdatesAppetizerComponent', () => {
  let component: UpdatesAppetizerComponent;
  let fixture: ComponentFixture<UpdatesAppetizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesAppetizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesAppetizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
