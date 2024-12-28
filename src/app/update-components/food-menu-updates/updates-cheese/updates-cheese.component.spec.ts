import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesCheeseComponent } from './updates-cheese.component';

describe('UpdatesCheeseComponent', () => {
  let component: UpdatesCheeseComponent;
  let fixture: ComponentFixture<UpdatesCheeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesCheeseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesCheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
