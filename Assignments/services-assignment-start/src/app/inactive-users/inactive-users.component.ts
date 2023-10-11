import { OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() inactiveUsers: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(
    private usersService: UsersService
  ) {}
  ngOnInit(){
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setActiveUser(id);
  }
}
