export class TimerUtil {
  private startTime!: number;

  start() {
    this.startTime = Date.now();
  }

  end(label: string) {
    const duration = Date.now() - this.startTime;
    console.log(`${label} took ${duration} ms`);
  }
}
