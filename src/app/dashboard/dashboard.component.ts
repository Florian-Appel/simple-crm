import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTasksComponent } from '../dialog-add-tasks/dialog-add-tasks.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Tasks } from 'src/models/tasks.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks = new Tasks();
  allTasks: any[] = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('tasks')
      .valueChanges({ idField: 'costumIdName' }) // costumIdName funtioniert nicht
      .subscribe((changes: any) => {
        this.allTasks = changes;
      });
  }

  openDialog() {
    this.dialog.open(DialogAddTasksComponent)
  }

}
