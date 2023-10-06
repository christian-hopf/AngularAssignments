import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-gamecontrol",
  templateUrl: "./gamecontrol.component.html",
  styleUrls: ["./gamecontrol.component.css"],
})
export class GamecontrolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
