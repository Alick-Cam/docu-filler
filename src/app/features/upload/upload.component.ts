import { Component } from '@angular/core';
import { FileComponent } from '../../components';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FileComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

}
