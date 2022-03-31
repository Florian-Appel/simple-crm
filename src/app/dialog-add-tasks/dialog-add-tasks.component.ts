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

  task = new Tasks();
  //createdDate!: Date;
  //finishDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddTasksComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveTask() {
    //this.task.createdDate = this.createdDate.getTime();
    //this.task.finishDate = this.finishDate.getTime();
    this.loading = true;
    this.firestore
      .collection('tasks')
      .add(this.task.toJSON())
      .then((result: any) => {
        console.log(result);
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
