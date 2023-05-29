<template>
  <div class="timer-wrapper d-flex justify-center align-items-center p-2">
    <div class="timer-text opacity-50">
      Starts TOMORROW! Our biggest event of the year...
    </div>
    <i class="fa-regular fa-clock ms-2"></i>
    <div id="timer" class="ms-2">
      {{ formattedTime.days }}d : {{ formattedTime.hours }}h : {{ formattedTime.minutes }}m : {{ formattedTime.seconds }}s
    </div>
    <div class="ms-2 font">
      <ui-button >Get Ticket</ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from "./UiButton.vue";

export default {
  components: {UiButton},
  data() {
    return {
      endTime: new Date('2023-06-01T00:00:00').getTime(),
      formattedTime: {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
      }
    };
  },
  mounted() {
    this.countdown();
  },
  methods: {
    countdown() {
      this.intervalId = setInterval(this.updateTimer, 1000);
    },
    updateTimer() {
      const currentTime = new Date().getTime();
      const timeRemaining = this.endTime - currentTime;

      if (timeRemaining <= 0) {
        clearInterval(this.intervalId);
        this.formattedTime.days = '00';
        this.formattedTime.hours = '00';
        this.formattedTime.minutes = '00';
        this.formattedTime.seconds = '00';
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        this.formattedTime.days = this.formatValue(days);
        this.formattedTime.hours = this.formatValue(hours);
        this.formattedTime.minutes = this.formatValue(minutes);
        this.formattedTime.seconds = this.formatValue(seconds);
      }
    },
    formatValue(value) {
      return value < 10 ? `0${value}` : value;
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
};
</script>

<style lang="sass" scoped>

#timer
  font-weight: bold
</style>
