import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesMocktailsComponent } from './updates-mocktails.component';

describe('UpdatesMocktailsComponent', () => {
  let component: UpdatesMocktailsComponent;
  let fixture: ComponentFixture<UpdatesMocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesMocktailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesMocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
