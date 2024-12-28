import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesMeatComponent } from './updates-meat.component';

describe('UpdatesMeatComponent', () => {
  let component: UpdatesMeatComponent;
  let fixture: ComponentFixture<UpdatesMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesMeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
