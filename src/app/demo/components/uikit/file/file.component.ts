import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [CommonModule, FormsModule, FileUploadModule],
  templateUrl: './file.component.html',
  providers: [MessageService],
})
export class FileComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }

  onBasicUpload() {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }
}
