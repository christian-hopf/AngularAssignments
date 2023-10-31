import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  statusList = ["stable", "critical", "finished"];
  forbiddenProjectNames = ["Test"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectName: new FormControl(
        null,
        [
          Validators.required,
          // this.forbiddenNames.bind(this),
        ],
        this.forbiddenNamesAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl("stable"),
    });
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { nameForbidden: true };
    }
    return null;
  }
  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({ nameForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
