import { Component, ElementRef, HostListener, inject, Input, ViewChild } from '@angular/core';
import { ContentData } from '../../../../_models/content-data';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-content-edit-modal',
  standalone: true,
  imports: [],
  templateUrl: './content-edit-modal.component.html',
  styleUrl: './content-edit-modal.component.css'
})
export class ContentEditModalComponent {
  dialogData = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  @ViewChild("modalContent") modalContent!: ElementRef;
  ngOnInit(){
    console.log(this.dialogData);
    
  }
  @Input() content!: ContentData;
  @Input() listMode: boolean = false;
  

  @HostListener('body:click', ['$event'])
  onClick(event: MouseEvent){

    //Listener ignores all clicks that target buttons as this is the method of opening the dialog
    if((event.target as HTMLElement).tagName.toLocaleLowerCase() == 'button'){
      return;
    }

    if((this as ContentEditModalComponent).modalContent.nativeElement != event.target){
      this.dialogRef.close();
    }
  }

}
