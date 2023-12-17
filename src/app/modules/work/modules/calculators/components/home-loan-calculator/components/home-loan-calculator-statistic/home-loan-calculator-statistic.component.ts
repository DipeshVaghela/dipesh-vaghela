import { Component, Input } from '@angular/core';
import { HomeLoanInput } from '../../models/home-loan-input.model';

@Component({
  selector: 'app-home-loan-calculator-statistic',
  templateUrl: './home-loan-calculator-statistic.component.html',
  styleUrl: './home-loan-calculator-statistic.component.scss'
})

export class HomeLoanCalculatorStatisticComponent {
  @Input() homeLoanInput: HomeLoanInput;

  constructor() {
    this.homeLoanInput = new HomeLoanInput();
  }

  calculateMonathlyEmi(): number {
    const monthlyInterestRate = this.homeLoanInput.enteredInterestRate / (12 * 100);
    var powerValue = Math.pow((1 + monthlyInterestRate), this.homeLoanInput.enteredTenure * 12);
    return Math.round((this.homeLoanInput.enteredPrincipleAmount * monthlyInterestRate * powerValue) / (powerValue - 1));
  }

  calculateTotalPayment(): number {
    return this.calculateMonathlyEmi() * this.homeLoanInput.enteredTenure * 12;
  }

  calculateTotalInterestPayable(): number {
    return this.calculateTotalPayment() - this.homeLoanInput.enteredPrincipleAmount;
  }
}
