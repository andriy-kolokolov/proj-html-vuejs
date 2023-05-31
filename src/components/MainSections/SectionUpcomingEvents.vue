<template>
  <h1 class="section-title text-center">Upcoming Events</h1>
  <h2 class="section-subtitle text-center">Let's Work Together</h2>

  <div class="container ">
    <div class="row g-4">
      <div class="col-6" v-for="(event, index) in store.upcomingEvents" :key="event.title">
        <div :class="['row', {'flex-row-reverse text-end': (index + 1) % 4 === 0 || (index + 1) % 3 === 0}, 'p-4']">
          <div class="col-6">
            <div class="img-wrapper">
              <img :src="event.img" alt="">
            </div>
          </div>
          <div class="col-6 lh-lg d-flex flex-column justify-content-center">
            <div class="event__date">{{ event.date }}</div>
            <div class="fs-5 fw-bold">{{ event.title }}</div>
            <div class="event__location">{{ event.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {store} from "../../store.js";

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped lang="sass">
@use '../../assets/main' as *

.event__date, .event__location
  opacity: .6


.img-wrapper
  width: 100%

  img
    width: 100%
    height: 350px
    object-fit: cover

</style>
<script setup>
</script>