import { Component } from '@angular/core';
import { HomeLoanInput } from './models/home-loan-input.model';

@Component({
  selector: 'app-home-loan-calculator',
  templateUrl: './home-loan-calculator.component.html',
  styleUrl: './home-loan-calculator.component.scss'
})
export class HomeLoanCalculatorComponent {

  public homeLoanInput: HomeLoanInput;

  constructor() {
    this.homeLoanInput = new HomeLoanInput();
    this.homeLoanInput.enteredPrincipleAmount = 100000;
    this.homeLoanInput.enteredInterestRate = 12;
    this.homeLoanInput.enteredTenure = 10;
  }
}
