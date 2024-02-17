import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { UserOffcanvasComponent } from '../user-offcanvas/user-offcanvas.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgClass, UserOffcanvasComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  @Input() users: any = [];
  @Output() deleteEvent = new EventEmitter<string>();
  selectedUSer =
    {
      picture: {
        thumbnail: ''
      },
      name: {
        first: '',
        last: ''
      },
      email: '',
      location: {
        street: {
          number: 0,
          name: ''
        },
        city: '',
        state: '',
        country: '',
      },
      gender: '',
      phone: '',
      cell: '',
      id: '',
      dob: {
        date: '',
        age: 0
      },
      login: {
        uuid: '',
        username: '',
      }
    };

  deleteUser(id: string) {
    this.deleteEvent.emit(id);
  }

  setSelectedUser(user: any) {
    this.selectedUSer = user;
  }


}
