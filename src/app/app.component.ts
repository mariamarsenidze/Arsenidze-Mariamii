import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentUser } from './parent-user';
import { UserComponent } from "./user/user.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
 
})
export class AppComponent {

  users1 = [
    { firstname: 'mariami', lastname: 'arsenidze', age: 18 },
    { firstname: 'nini', lastname: 'martashvili', age: 26 },
    { firstname: 'tato', lastname: 'qobelashvili', age: 19 },
    { firstname: 'dato', lastname: 'chachava', age: 23 },
    { firstname: 'luka', lastname: 'dadiani', age: 48 }
    ];



onReceiveChildUsers($event: import("./child-user").ChildUser[]) {
throw new Error('Method not implemented.');
}
  title = 'Mariami';
  users: ParentUser[] = [
    { Id: 1, Firstname: 'Mariami', Lastname: 'Arsenidze', DateOfBirth: '2005-09-19', PhoneNumber: '57896451', Email: 'mari@gmail.com' },
    { Id: 2, Firstname: 'Nino', Lastname: 'Chachava', DateOfBirth: '1999-10-17', PhoneNumber: '45887552', Email: 'nino@gmailcom' },
    { Id: 3, Firstname: 'Nini', Lastname: 'Danelia', DateOfBirth: '2009-07-05', PhoneNumber: '34578964', Email: 'nini@gmail.com' }
  ];
 
    userForm: FormGroup;
    user: User[] = [];
  
    constructor(private fb: FormBuilder) {
      this.userForm = this.fb.group({
        Id: [null, Validators.required],
        Firstname: ['', [Validators.required, Validators.minLength(3)]],
        Lastname: ['', [Validators.required, Validators.minLength(3)]],
        DateOfBirth: ['', Validators.required],
        PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
        Email: ['', [Validators.required, Validators.minLength(8)]]
      });
    }
  
    addUser() {
      if (this.userForm.valid) {
        this.users.push(this.userForm.value);
        this.userForm.reset();
      }
    }
  }
  


  

