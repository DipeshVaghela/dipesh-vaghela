import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanCalculatorEmiPlanComponent } from './home-loan-calculator-emi-plan.component';

describe('HomeLoanCalculatorEmiPlanComponent', () => {
  let component: HomeLoanCalculatorEmiPlanComponent;
  let fixture: ComponentFixture<HomeLoanCalculatorEmiPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoanCalculatorEmiPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLoanCalculatorEmiPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
