import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesCocktailsComponent } from './updates-cocktails.component';

describe('UpdatesCocktailsComponent', () => {
  let component: UpdatesCocktailsComponent;
  let fixture: ComponentFixture<UpdatesCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesCocktailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
