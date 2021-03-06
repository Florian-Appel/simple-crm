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
  createdDate!: Date;
  finishDate!: Date;
  loading = false;
  users!: any;


  constructor(public dialogRef: MatDialogRef<DialogAddTasksComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('users')
      .valueChanges({ idFiled: "id" })
      .subscribe((users: any) => {
        this.users = users;
      });

  }

  saveTask() {
    this.task.createdDate = this.createdDate.getTime();
    this.task.finishDate = this.finishDate.getTime();
    this.loading = true;
    this.firestore
      .collection('tasks')
      .add(this.task.toJSON())
      .then((result: any) => {
        this.loading = false;
        this.dialogRef.close();
      });
  }

  //   setCalendarMinDateToday() {
  //     let today = new Date();
  //     let DD = today.getDate();
  //     let MM = today.getMonth() + 1;
  //     let YYYY = today.getFullYear();
  //     if (DD < 10) DD = "0" + DD;
  //     if (MM < 10) MM = "0" + MM;
  //     today = `${YYYY}-${MM}-${DD}`;
  //     console.log("Today", today);
  //     document.getElementById("date-field").setAttribute("min", today);
  // }
}