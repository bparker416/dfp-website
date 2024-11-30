import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktailsComponent } from './mocktails.component';

describe('MocktailsComponent', () => {
  let component: MocktailsComponent;
  let fixture: ComponentFixture<MocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MocktailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
