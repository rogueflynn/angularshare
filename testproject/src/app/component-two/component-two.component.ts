import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
	user:User;
	constructor(private userService: UserService) { }

	ngOnInit() {
		this.userService.currentUser.subscribe(user => this.user = user);
	}

}
