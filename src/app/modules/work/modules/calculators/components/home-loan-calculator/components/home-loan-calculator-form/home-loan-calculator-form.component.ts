import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeLoanInput } from '../../models/home-loan-input.model';

@Component({
  selector: 'app-home-loan-calculator-form',
  templateUrl: './home-loan-calculator-form.component.html',
  styleUrl: './home-loan-calculator-form.component.scss'
})
export class HomeLoanCalculatorFormComponent {
  @Input() homeLoanInput: HomeLoanInput;
  @Output() homeLoanInputChange = new EventEmitter<HomeLoanInput>();

  constructor() {
    this.homeLoanInput = new HomeLoanInput();
  }

  ngOnChanges(): void {
    this.homeLoanInputChange.emit(this.homeLoanInput);
  }
}
