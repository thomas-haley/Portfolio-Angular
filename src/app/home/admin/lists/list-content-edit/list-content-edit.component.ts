import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContentEditModalComponent } from '../../content/content-edit-modal/content-edit-modal.component';
import { ContentDropdown } from '../../../../_models/content-dropdown';
import { ContentLoaderService } from '../../../../_services/content-loader.service';
import { ComponentListLoaderService } from '../../../../_services/content-list-loader.service';
import { ContentData } from '../../../../_models/content-data';
import { FormsModule } from '@angular/forms';
import { CustomToastrService } from '../../../../_services/custom-toastr.service';
import { ConfirmationModalComponent } from '../../../content/modal/confirmation-modal/confirmation-modal.component';
@Component({
  selector: 'app-list-content-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-content-edit.component.html',
  styleUrl: './list-content-edit.component.css'
})
export class ListContentEditComponent {
  @Input() listTag!: string;
  @Output() onContentChange = new EventEmitter<any>();
  readonly dialog = inject(MatDialog)
  private toaster = inject(CustomToastrService);
  private contentLoader =  inject(ContentLoaderService);
  private contentListLoader =  inject(ComponentListLoaderService);
  addContentOptions = signal<ContentData[]|null>(null);
  currentContentOptions = signal<ContentData[]|null>(null);
  selectedCurrentContent: string = "-1"; 
  selectedAddDD: ContentDropdown = {
    id: -1,
    title: ""
  };
  ngOnInit(){
    this.updateContentLists();
  }

  async handleEditClick(){
    this.contentLoader.loadContent(this.selectedCurrentContent).subscribe((content) => 
    {
      this.openDialog("edit", content);
      console.log(content)
    })
  }

  updateContentLists(){
    this.contentLoader.getPossibleContent().subscribe(data => {
      this.addContentOptions.set(data);
    })

    this.contentListLoader.loadListContent(this.listTag).subscribe(contentListData => {
      this.currentContentOptions.set(contentListData.content);
    })
  }

  handleCreateClick(){
    this.openDialog("create", null);
  }


  openDialog(mode:string, data:ContentData|null): void{
    const dialogRef = this.dialog.open(ContentEditModalComponent, {data: {
      mode: mode,
      content: data
    },
    panelClass: "primary-color-bg"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.event == "should-update"){
        this.updateContentLists();
        this.onContentChange.emit();
      }
    })
  }

  removeContent(){
    if(this.selectedCurrentContent == "-1"){
      
      return;
    }

    const dialogRef = this.dialog.open(ConfirmationModalComponent, {data: {title:"Test Conf", text:"Test Desc"}});
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.event == "confirm"){
        //Actually remove here
        this.toaster.showSuccess("Content removed successfully");
      } else {
        this.toaster.showMessage("Content not removed");
      }

    })
  }
}
