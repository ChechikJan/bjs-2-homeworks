class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (
      this.alarmCollection.some(
        (clock) => clock.time === time && clock.callback === callback
      )
    ) {
      return console.warn("Уже присутствует звонок на это же время");
    }
    return this.alarmCollection.push({ canCall: true, time, callback });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (clock) => clock.time !== time
    );
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    if (this.intervalId) {
      return;
    }
    const check = (clock) => {
      if (clock.time === this.getCurrentFormattedTime() && clock.canCall) {
        clock.canCall = false;
        clock.callback();
      }
    };
    this.intervalId = setInterval(
      () => this.alarmCollection.forEach((clock) => check(clock)),
      1000
    );
  }

  stop() {
    clearInterval(this.timerId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((clock) => (clock.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
