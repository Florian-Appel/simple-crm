import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskHeadComponent } from './dialog-edit-task-head.component';

describe('DialogEditTaskHeadComponent', () => {
  let component: DialogEditTaskHeadComponent;
  let fixture: ComponentFixture<DialogEditTaskHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTaskHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTaskHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
