import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onIntervalFired(count: number) {
    console.log(count);
    if (count % 2 === 0) {
      // even
      this.evens.push(count);
    } else {
      // odd
      this.odds.push(count);
    }
  }
}
