<template>
  <div class="timer-wrapper">
    <div class="container d-flex justify-content-center">
      <header-timer/>
    </div>
  </div>
  <div class="nav-wrapper container-fluid">
    <header-navigation/>
  </div>
</template>

<script>
import {HeaderTimer} from "./UI/index.js"
import HeaderNavigation from "./HeaderNavigation.vue";

export default {
  components: {HeaderNavigation, HeaderTimer}
}
</script>

<style lang="sass" scoped>

@use '../assets/main' as *

.timer
  background-color: $palette-light
</style>