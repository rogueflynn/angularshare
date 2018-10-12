import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	user: User = new User("Victor", "25");
	private userSubject = new BehaviorSubject<User>(this.user);
	currentUser = this.userSubject.asObservable();
	constructor() { }
	changeUser(user: User) {
		this.userSubject.next(user);
	}
}
