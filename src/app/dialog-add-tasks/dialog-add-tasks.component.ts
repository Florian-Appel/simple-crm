import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Tasks } from 'src/models/tasks.class';

@Component({
  selector: 'app-dialog-add-tasks',
  templateUrl: './dialog-add-tasks.component.html',
  styleUrls: ['./dialog-add-tasks.component.scss']
})
export class DialogAddTasksComponent implements OnInit {

  task = new Tasks(); // ?
  date1!: Date; 
  date2!: Date;

  constructor(public dialogRef: MatDialogRef<DialogAddTasksComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveTask() {
    this.task.date1 = this.date1.getTime();
    this.task.date2 = this.date2.getTime();
    this.firestore
    .collection('tasks')
    .add(this.task.toJSON())
    .then((result: any) => {
      this.dialogRef.close();
    });
  }

}
