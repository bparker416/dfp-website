import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesLibationsComponent } from './updates-libations.component';

describe('UpdatesLibationsComponent', () => {
  let component: UpdatesLibationsComponent;
  let fixture: ComponentFixture<UpdatesLibationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesLibationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesLibationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
