import { Component, Input } from '@angular/core';
import { UserSearchComponent } from '../../components/user-search/user-search.component';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { GetUsersService } from '../../services/get-users.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserSearchComponent, UserListComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  users: any = [];
  filteredUsers: any = [];
  hasError = false;
  errorMessage = 'The search word must have more than 1 letter';

  setWordToSearch(word: string) {
    if (word.length > 1) {
      this.filteredUsers = this.users.filter(
        ({ name }: any) => name.first.toUpperCase().includes(word.toUpperCase()) || name.last.toUpperCase().includes(word.toUpperCase())
      );
    } else if (word.length === 0) {
      this.hasError = false;
      this.filteredUsers = this.users;
    } else {
      this.hasError = true;
      this.filteredUsers = this.users;
    }
  }

  async ngOnInit() {
    const usersService = new GetUsersService();
    this.users = await usersService.getUsers('50');
    this.filteredUsers = this.users;
  }

  deleteUser(id: string) {
    this.users = this.filteredUsers.filter((user: any) => user.id.value != id);
    this.filteredUsers = this.users;
  }
}
