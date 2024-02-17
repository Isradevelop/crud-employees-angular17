import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor() { }

  public async getUsers(numberOfEmployees: string) {

    const res = await fetch(`https://randomuser.me/api/?results=${numberOfEmployees}`);

    const users = await res.json();
    return users.results;
  }
}
