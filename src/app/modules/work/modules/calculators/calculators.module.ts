import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorsComponent } from './calculators.component';
import { HomeLoanCalculatorEmiPlanComponent } from './components/home-loan-calculator/components/home-loan-calculator-emi-plan/home-loan-calculator-emi-plan.component';
import { HomeLoanCalculatorFormComponent } from './components/home-loan-calculator/components/home-loan-calculator-form/home-loan-calculator-form.component';
import { HomeLoanCalculatorStatisticComponent } from './components/home-loan-calculator/components/home-loan-calculator-statistic/home-loan-calculator-statistic.component';
import { HomeLoanCalculatorComponent } from './components/home-loan-calculator/home-loan-calculator.component';

@NgModule({
  declarations: [
    CalculatorsComponent,
    HomeLoanCalculatorComponent,
    HomeLoanCalculatorFormComponent,
    HomeLoanCalculatorStatisticComponent,
    HomeLoanCalculatorEmiPlanComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CalculatorsComponent]
})
export class CalculatorsModule { }
