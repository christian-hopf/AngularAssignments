import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  displayParagraph = false;
  myParagraph = "Sample Text Sample Text Sample Text Sample Text Sample Text";
  clickLog = [];
  bruhLog = ['bruh', 'bruh', 'bruh', 'bruh'];

  toggleDisplay() {
    this.displayParagraph = !this.displayParagraph;
    // this.clickLog.push(new Date().toISOString());
    this.clickLog.push('bruh');
  }
}
