import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskNotesComponent } from './dialog-edit-task-notes.component';

describe('DialogEditTaskNotesComponent', () => {
  let component: DialogEditTaskNotesComponent;
  let fixture: ComponentFixture<DialogEditTaskNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTaskNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTaskNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
