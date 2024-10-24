import { UpperCasePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [UpperCasePipe, NgClass],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {

  public fileName:string = "Template.docx"
  public status:string = "ready"
  public fileSize:string = "106 KB"
}

enum FileStatus {
  Ready,
  Processing,
  Failed
}
