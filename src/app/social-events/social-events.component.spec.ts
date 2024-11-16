import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEventsComponent } from './social-events.component';

describe('SocialEventsComponent', () => {
  let component: SocialEventsComponent;
  let fixture: ComponentFixture<SocialEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
