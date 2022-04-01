import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/models/tasks.class';
import { DialogEditTaskDetailsComponent } from '../dialog-edit-task-details/dialog-edit-task-details.component';
import { DialogEditTaskHeadComponent } from '../dialog-edit-task-head/dialog-edit-task-head.component';
import { DialogEditTaskNotesComponent } from '../dialog-edit-task-notes/dialog-edit-task-notes.component';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {

  taskId: any = '';
  task: Tasks = new Tasks();
  users!: any;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.taskId = paramMap.get('id');
      this.getTasks();
    })
    this.firestore.collection('users')
      .valueChanges({ idFiled: "id" })
      .subscribe((users: any) => {
        this.users = users;
      });
  }

  getTasks() {
    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .valueChanges()
      .subscribe((task: any) => {
        this.task = new Tasks(task);
      })
  }

  editTaskDetails() {
    const dialog = this.dialog.open(DialogEditTaskHeadComponent);
    dialog.componentInstance.task = new Tasks(this.task.toJSON());
    dialog.componentInstance.taskId = this.taskId;
  }

  editTaskDetails2() {
    const dialog = this.dialog.open(DialogEditTaskDetailsComponent);
    dialog.componentInstance.task = new Tasks(this.task.toJSON());
    dialog.componentInstance.taskId = this.taskId;
  }

  editTaskNotes() {
    const dialog = this.dialog.open(DialogEditTaskNotesComponent);
    dialog.componentInstance.task = new Tasks(this.task.toJSON());
    dialog.componentInstance.taskId = this.taskId;
  }
}
