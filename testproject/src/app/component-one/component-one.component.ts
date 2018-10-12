import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
	user:User;
	constructor(private userService: UserService) { }

  ngOnInit() {
	  this.userService.currentUser.subscribe(user => this.user = user);
  }
}
