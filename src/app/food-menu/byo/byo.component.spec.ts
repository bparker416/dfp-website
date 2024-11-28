import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByoComponent } from './byo.component';

describe('ByoComponent', () => {
  let component: ByoComponent;
  let fixture: ComponentFixture<ByoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
