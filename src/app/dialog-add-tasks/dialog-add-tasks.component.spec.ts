import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTasksComponent } from './dialog-add-tasks.component';

describe('DialogAddTasksComponent', () => {
  let component: DialogAddTasksComponent;
  let fixture: ComponentFixture<DialogAddTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
