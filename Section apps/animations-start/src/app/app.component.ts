import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          backgroundColor: "red",
          transform: "translateX(0)",
        })
      ),
      state(
        "highlight",
        style({
          backgroundColor: "green",
          transform: "translateX(100px)",
        })
      ),
      // transition("normal => highlight", animate(300)),
      transition("normal <=> highlight", animate(1200)),
    ]),
    trigger("secondState", [
      state(
        "normal",
        style({
          backgroundColor: "red",
          transform: "translateX(0) scale(1)",
        })
      ),
      state(
        "highlight",
        style({
          backgroundColor: "green",
          transform: "translateX(100px) scale(1)",
        })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "blue",
          transform: "translateX(50px) scale(0.2)",
        })
      ),
      transition("normal <=> highlight", animate(1200)),
      transition("shrunken <=> *", [
        style({
          backgroundColor: "orange",
        }),
        animate(
          500,
          style({
            borderRadius: "50px",
          })
        ),
        animate(500),
      ]),
    ]),
    trigger("list1", [
      state(
        "in",
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      // transition("normal => highlight", animate(300)),
      transition("void => *", [
        style({ opacity: 0, transform: "translateX(-100px)" }),
        animate(300),
      ]),
      transition("* => void", [
        animate(
          300,
          style({
            opacity: 0,
            transform: "translateX(100px)",
          })
        ),
      ]),
    ]),
    trigger("list2", [
      state(
        "in",
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      // transition("normal => highlight", animate(300)),
      transition("void => *", [
        animate(
          1000,
          keyframes([
            style({
              transform: "translateX(-100px)",
              opacity: 0,
              offset: 0,
            }),
            style({
              transform: "translateX(-50px)",
              opacity: 0.5,
              offset: 0.3,
            }),
            style({
              transform: "translateX(-20px)",
              opacity: 1,
              offset: 0.8,
            }),
            style({
              transform: "translateX(0px)",
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
      transition("* => void", [
        group([
          animate(
            300,
            style({
              color: "blue",
            })
          ),
          animate(
            600,
            style({
              color: "blue",
              opacity: 0,
              transform: "translateX(100px)",
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  state = "normal";
  secondState = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state === "normal"
      ? (this.state = "highlight")
      : (this.state = "normal");
    this.secondState === "normal"
      ? (this.secondState = "highlight")
      : (this.secondState = "normal");
  }

  onShrink() {
    this.secondState = "shrunken";
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimationStart(event) {
    console.log(event);
  }

  onAnimationDone(event) {
    console.log(event);
  }
}
