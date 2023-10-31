import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("myForm") assignmentForm: NgForm;
  defaultSub = "advanced";
  submitted = false;
  submittedData = {
    email: "",
    subscription: "",
    password: "",
  };

  onSubmit() {
    console.log(this.assignmentForm.value);
    this.submitted = true;
    this.submittedData.email = this.assignmentForm.value.email;
    this.submittedData.subscription = this.assignmentForm.value.subscription;
    this.submittedData.password = this.assignmentForm.value.password;
  }
}
