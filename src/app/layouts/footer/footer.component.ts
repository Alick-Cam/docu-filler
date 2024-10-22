import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  host: {'style':'margin-top:auto;border-top: 1px solid black;background-color: var(--secondary-bg-color);'}
})
export class FooterComponent {

}
