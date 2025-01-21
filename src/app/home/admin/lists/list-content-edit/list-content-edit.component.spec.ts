import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContentEditComponent } from './list-content-edit.component';

describe('ListContentEditComponent', () => {
  let component: ListContentEditComponent;
  let fixture: ComponentFixture<ListContentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContentEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
