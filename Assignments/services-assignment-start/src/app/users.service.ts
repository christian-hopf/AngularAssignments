import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers = ["Christian", "Max"];
  inactiveUsers = ["Alazar", "Steven"];

  constructor(private counterService: CounterService) {}

  setActiveUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementChangeCount();
  }
  setInactiveUser(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementChangeCount();
  }
}
