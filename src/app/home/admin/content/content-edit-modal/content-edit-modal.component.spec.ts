import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEditModalComponent } from './content-edit-modal.component';

describe('ContentEditModalComponent', () => {
  let component: ContentEditModalComponent;
  let fixture: ComponentFixture<ContentEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentEditModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
