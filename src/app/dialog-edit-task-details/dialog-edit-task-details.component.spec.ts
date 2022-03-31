import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskDetailsComponent } from './dialog-edit-task-details.component';

describe('DialogEditTaskDetailsComponent', () => {
  let component: DialogEditTaskDetailsComponent;
  let fixture: ComponentFixture<DialogEditTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
