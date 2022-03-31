import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Tasks } from 'src/models/tasks.class';

@Component({
  selector: 'app-dialog-edit-task-details',
  templateUrl: './dialog-edit-task-details.component.html',
  styleUrls: ['./dialog-edit-task-details.component.scss']
})
export class DialogEditTaskDetailsComponent implements OnInit {
  task!: Tasks;
  loading = false;
  taskId!: string;

  constructor(public dialogRef: MatDialogRef<DialogEditTaskDetailsComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveTask() {
    this.loading = true;
    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .update(this.task.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
