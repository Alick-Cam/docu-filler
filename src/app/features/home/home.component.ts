import { Component } from '@angular/core';
import { StepCardComponent } from '../../components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ StepCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

public steps: string[] = [
  "Create your word document and add controls from the developer tab for your variable fields",
  "Upload your .docx containing your added controls",
  "Fill your document!"
]


}
