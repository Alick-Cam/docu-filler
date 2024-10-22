import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.css'
})
export class StepCardComponent {

  @Input({required:true}) stepNumebr! : string;
  @Input({required:true}) stepDescription! : string;


}
