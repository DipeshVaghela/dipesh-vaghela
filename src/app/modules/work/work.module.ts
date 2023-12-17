import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorsModule } from './modules/calculators/calculators.module';
import { WorkComponent } from './work.component';
import { PlaygroundModule } from './modules/playground/playground.module';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    CalculatorsModule,
    PlaygroundModule
  ],
  exports: [WorkComponent]
})
export class WorkModule { }
