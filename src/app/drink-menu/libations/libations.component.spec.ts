import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibationsComponent } from './libations.component';

describe('LibationsComponent', () => {
  let component: LibationsComponent;
  let fixture: ComponentFixture<LibationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
