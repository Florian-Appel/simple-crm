import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Tasks } from 'src/models/tasks.class';

@Component({
  selector: 'app-dialog-edit-task-head',
  templateUrl: './dialog-edit-task-head.component.html',
  styleUrls: ['./dialog-edit-task-head.component.scss']
})
export class DialogEditTaskHeadComponent implements OnInit {
  task!: Tasks;
  loading = false;
  taskId!: string;
  users!: any;

  constructor(public dialogRef: MatDialogRef<DialogEditTaskHeadComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('users')
    .valueChanges({idFiled : "id"})
    .subscribe( (users : any) =>{
        this.users = users;
    } );
  }

  saveTask() {
    this.loading = true;
    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .update(this.task.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close()
      });
  }

}
