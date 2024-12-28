import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesSandoComponent } from './updates-sando.component';

describe('UpdatesSandoComponent', () => {
  let component: UpdatesSandoComponent;
  let fixture: ComponentFixture<UpdatesSandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesSandoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesSandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
