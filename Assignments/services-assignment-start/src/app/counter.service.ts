export class CounterService {
  count = 0;

  incrementChangeCount() {
    this.count++;
    console.log("Number of status changes: " + this.count);
  }
}
