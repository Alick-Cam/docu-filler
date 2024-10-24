import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FileComponent } from '../../components';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FileComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements AfterViewInit {
  @ViewChild('uploadTemplate') private fileInput! : ElementRef<HTMLInputElement>;

  
  ngAfterViewInit(): void {
    this.fileInput.nativeElement.click();
  }
  



  onTemplateSelected(event: Event) {
    console.log(event);
  }
  
}
