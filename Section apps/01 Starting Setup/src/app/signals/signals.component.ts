import { NgFor } from "@angular/common";
import { Component, computed, signal, effect } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  tripleCounter = computed(() => this.counter() * 3);

  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    // this.counter.update((old) => old + 1);
    this.counter.set(this.counter() + 1);
    this.actions.mutate((old) => old.push("INCREMENT"));
    // this.actions.push("INCREMENT");
  }

  decrement() {
    this.counter.update((old) => old - 1);
    this.actions.mutate((old) => old.push("DECREMENT"));
    // this.actions.push("DECREMENT");
  }
}
