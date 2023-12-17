import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanCalculatorFormComponent } from './home-loan-calculator-form.component';

describe('HomeLoanCalculatorFormComponent', () => {
  let component: HomeLoanCalculatorFormComponent;
  let fixture: ComponentFixture<HomeLoanCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoanCalculatorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLoanCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
