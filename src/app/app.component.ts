import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProfileEditor';
  user: User = { name: "Dave", age: 54, favoriteColor: "Blue" }
  displayEdit: boolean = false;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }
  saveChanges(form: NgForm) {
    //Do not need because implemented 2 way binding
    // this.user.name = form.controls["name"].value;
    // this.user.age = form.controls["age"].value;
    // this.user.favoriteColor = form.controls["favoriteColor"].value;
    this.toggleEdit();
  }

}
