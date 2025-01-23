import { Component, ElementRef, EventEmitter, HostListener, inject, Input, Output, signal, ViewChild } from '@angular/core';
import { ContentData } from '../../../../_models/content-data';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ContentLoaderService } from '../../../../_services/content-loader.service';
import { CustomToastrService } from '../../../../_services/custom-toastr.service';
@Component({
  selector: 'app-content-edit-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './content-edit-modal.component.html',
  styleUrl: './content-edit-modal.component.css'
})
export class ContentEditModalComponent {
  contentService = inject(ContentLoaderService);
  private toaster = inject(CustomToastrService);
  dialogData = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  @ViewChild("modalContent") modalContent!: ElementRef;
  contentIn = signal<ContentData|null>(null);
  listMode = signal<string|null>(null);

  contentOut : ContentData|null = null;

  ngOnInit(){
    this.listMode.set(this.dialogData["mode"]);
    this.contentIn.set(this.dialogData["content"]);
    
    if(this.contentIn() != null){
      this.contentOut = this.contentIn();
    } else {
      this.contentOut = {
        id: -1,
        visible: true,
        title: "",
        description: "",
        media: "",
        mediaPosition:"left"
      }
    }
  }
  onBackdropClick(): void {
    this.dialogRef.close();
  }

  async createSubmit(){
    this.contentService.putContent(this.contentOut!).subscribe((response)=> {
      if(response){
        this.toaster.showSuccess("Content created successfully.");
        this.dialogRef.close({event:"should-update"});
      } else {
        this.toaster.showError("Unable to create content");
      }
    })
  }


  async editSubmit(){
    this.contentService.patchContent(this.contentOut!).subscribe((response) => {
      if(response){
        this.toaster.showSuccess("Content updated successfully.");
        this.dialogRef.close({event:"should-update"})
      } else {
        this.toaster.showError("Unable to update content")
      }
        
    })

  }
}
