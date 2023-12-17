import { Component, Input } from '@angular/core';
import { HomeLoanInput } from '../../models/home-loan-input.model';
import { Emi } from '../../models/emi.model';

@Component({
  selector: 'app-home-loan-calculator-emi-plan',
  templateUrl: './home-loan-calculator-emi-plan.component.html',
  styleUrl: './home-loan-calculator-emi-plan.component.scss'
})
export class HomeLoanCalculatorEmiPlanComponent {
  @Input() homeLoanInput: HomeLoanInput;

  constructor() {
    this.homeLoanInput = new HomeLoanInput();
  }

  anyFieldInvalid(): boolean {
    return this.homeLoanInput.enteredPrincipleAmount === null || this.homeLoanInput.enteredInterestRate === null || this.homeLoanInput.enteredTenure === null;
  }

  calculateMonthlyEmi(): number {
    const monthlyInterestRate = this.homeLoanInput.enteredInterestRate / (12 * 100);
    var powerValue = Math.pow((1 + monthlyInterestRate), this.homeLoanInput.enteredTenure * 12);
    return Math.round((this.homeLoanInput.enteredPrincipleAmount * monthlyInterestRate * powerValue) / (powerValue - 1));
  }

  calculateMonthlyInterest(principle: number, interestRate: number): number {
    return Math.round((principle * interestRate) / (100 * 12));
  }

  generateEmiSchedule(): Emi[] {
    const allEmis: Emi[] = [];

    //#region REMOVE THIS

    if (this.homeLoanInput.enteredTenure > 20) {
      return allEmis;
    }

    console.log(this.homeLoanInput.enteredPrincipleAmount);
    console.log(this.homeLoanInput.enteredInterestRate);
    console.log(this.homeLoanInput.enteredTenure);

    //#endregion

    let paymentNo = 1;
    let openingBalance = this.homeLoanInput.enteredPrincipleAmount;
    let emi = this.calculateMonthlyEmi();
    let interest = this.calculateMonthlyInterest(this.homeLoanInput.enteredPrincipleAmount, this.homeLoanInput.enteredInterestRate);
    let principle = emi - interest;
    let closingBalance = openingBalance - principle;

    const firstEmi = new Emi();
    firstEmi.paymentNo = paymentNo;
    firstEmi.openingBalance = openingBalance;
    firstEmi.emi = emi;
    firstEmi.principle = principle;
    firstEmi.interest = interest;
    firstEmi.closingBalance = closingBalance;

    allEmis.push(firstEmi);

    while (closingBalance > 0) {

      // calclulations
      paymentNo++;
      if (closingBalance < emi) {
        openingBalance = closingBalance;
        emi = closingBalance;
        principle = closingBalance;
        interest = 0;
        closingBalance = 0;
      } else {
        openingBalance = closingBalance;
        interest = this.calculateMonthlyInterest(openingBalance, this.homeLoanInput.enteredInterestRate);
        principle = emi - interest;
        closingBalance = openingBalance - principle;
      }

      const nextEmi = new Emi();
      nextEmi.paymentNo = paymentNo;
      nextEmi.openingBalance = openingBalance;
      nextEmi.emi = emi;
      nextEmi.principle = principle;
      nextEmi.interest = interest;
      nextEmi.closingBalance = closingBalance;

      allEmis.push(nextEmi);
    }

    return allEmis;
  }
}
