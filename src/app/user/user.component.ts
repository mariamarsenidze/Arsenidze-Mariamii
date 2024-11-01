import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
 
})

    export class UserComponent {
      @Input() users: ParentUser[] = [];

    
        childUsers: ChildUser[] = [
          { Id: 1, Firstname: 'Mariami', Lastname: 'Arsenidze', DateOfBirth: '2005-09-19', PhoneNumber: '57896451', Email: 'mari@gmail.com' },
          { Id: 2, Firstname: 'Nino', Lastname: 'Chachava', DateOfBirth: '1999-10-17', PhoneNumber: '45887552', Email: 'nino@gmailcom' },
          { Id: 3, Firstname: 'Nini', Lastname: 'Danelia', DateOfBirth: '2009-07-05', PhoneNumber: '34578964', Email: 'nini@gmail.com' }

        ]
        @Output() childUsersEmitter = new EventEmitter<ChildUser[]>();
  
    
        sendUsersToParent() {
          this.childUsersEmitter.emit(this.childUsers);
        }
        
          childUser: ChildUser[] = [
            { Id: 1, Firstname: 'Mariami', Lastname: 'Arsenidze', DateOfBirth: '2005-09-19', PhoneNumber: '57896451', Email: 'mari@gmail.com' },
            { Id: 2, Firstname: 'Nino', Lastname: 'Chachava', DateOfBirth: '1999-10-17', PhoneNumber: '45887552', Email: 'nino@gmailcom' },
            { Id: 3, Firstname: 'Nini', Lastname: 'Danelia', DateOfBirth: '2009-07-05', PhoneNumber: '34578964', Email: 'nini@gmail.com' }
          ];
        
          constructor(private displayService: DisplayService) {}
        
          displayUsers() {
            this.displayService.displayArray(this.childUsers);
          }
         
          
        }
        

    


