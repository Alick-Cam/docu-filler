import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {'style':'background-color: var(--secondary-bg-color);border-bottom: 1px solid black;'}
})
export class HeaderComponent {

}
