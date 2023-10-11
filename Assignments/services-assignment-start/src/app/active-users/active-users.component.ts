import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UsersService } from "../users.service";
import { OnInit } from "@angular/core";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  @Input() activeUsers: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(
    private usersService: UsersService
  ) {}
  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setInactiveUser(id);
  }
}
