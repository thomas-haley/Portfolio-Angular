import { Component, inject, Input, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContentEditModalComponent } from '../../content/content-edit-modal/content-edit-modal.component';
import { ContentDropdown } from '../../../../_models/content-dropdown';
import { ContentLoaderService } from '../../../../_services/content-loader.service';
import { ComponentListLoaderService } from '../../../../_services/content-list-loader.service';
import { ContentData } from '../../../../_models/content-data';
@Component({
  selector: 'app-list-content-edit',
  standalone: true,
  imports: [],
  templateUrl: './list-content-edit.component.html',
  styleUrl: './list-content-edit.component.css'
})
export class ListContentEditComponent {
  @Input() listTag!: string;
  readonly dialog = inject(MatDialog)
  private contentLoader =  inject(ContentLoaderService);
  private contentListLoader =  inject(ComponentListLoaderService);
  addContentOptions = signal<ContentData[]|null>(null);
  currentContentOptions = signal<ContentData[]|null>(null);
  selectedAddDD: ContentDropdown = {
    id: -1,
    title: ""
  };
  ngOnInit(){
    this.contentLoader.getPossibleContent().subscribe(data => {
      this.addContentOptions.set(data);
    })

    this.contentListLoader.loadListContent(this.listTag).subscribe(contentListData => {
      this.currentContentOptions.set(contentListData.content);
    })
  }

  //Pass content needed for edit funtionality to dialog, If no content select, notify user of error
  handleEditClick(){
    
  }



  openDialog(): void{
    const dialogRef = this.dialog.open(ContentEditModalComponent, {data: {}});
  }
}
