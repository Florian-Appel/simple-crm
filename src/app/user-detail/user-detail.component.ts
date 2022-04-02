import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Notes } from 'src/models/notes.class';
import { User } from 'src/models/user.class';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any = '';
  noteId: any = ''; // zum testen
  user: User = new User();
  notes: Notes = new Notes();
  loading = false;
  allNotes: any[] = [];


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
    this.firestore
      .collection('notes')
      .valueChanges()
      .subscribe((changes: any) => {
        this.allNotes = changes;
      })
      // this.firestore
      // .collection('notes')
      // .doc(this.noteId)
      // .valueChanges()
      // .subscribe((task: any) => {
      //   this.notes = new Notes(this.notes);
      // })
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
      });
  }


  editMenu() {
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  addNotes() {
    this.loading = true;
    this.firestore
      .collection('notes')
      .add(this.notes.toJSON())
      .then((result: any) => {
        this.loading = false;
      });
  }
}