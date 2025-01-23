import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css'
})
export class ConfirmationModalComponent {
  dialogData = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  confTitle = signal<string|null>(null);
  confText = signal<string|null>(null);

  ngOnInit(){
    if(this.dialogData["title"] != null){
      this.confTitle.set(this.dialogData["title"]);
    }
    if(this.dialogData["text"] != null){
      this.confText.set(this.dialogData["text"]);
    }
  }

  cancelClick(){
    this.dialogRef.close({event: "cancel"})
  }

  confirmClick(){
    this.dialogRef.close({event: "confirm"})
  }
}
