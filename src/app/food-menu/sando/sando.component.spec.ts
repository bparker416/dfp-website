import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandoComponent } from './sando.component';

describe('SandoComponent', () => {
  let component: SandoComponent;
  let fixture: ComponentFixture<SandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
