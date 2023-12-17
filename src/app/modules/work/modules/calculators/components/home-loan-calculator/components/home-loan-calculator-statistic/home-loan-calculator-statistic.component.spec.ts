import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeLoanCalculatorStatisticComponent } from './home-loan-calculator-statistic.component';

describe('HomeLoanCalculatorStatisticComponent', () => {
  let component: HomeLoanCalculatorStatisticComponent;
  let fixture: ComponentFixture<HomeLoanCalculatorStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoanCalculatorStatisticComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeLoanCalculatorStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
