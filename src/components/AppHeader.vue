<template>
  <div class="timer-wrapper">
    <div class="container d-flex justify-content-center">
      <header-timer/>
    </div>
  </div>
  <div class="nav-wrapper container-fluid">
    <header-navigation/>
    <header-hero/>
  </div>
</template>

<script>
import {HeaderTimer} from "./UI/index.js"
import HeaderNavigation from "./HeaderNavigation.vue";
import HeaderHero from "./HeaderHero.vue";
export default {
  components: {HeaderNavigation, HeaderTimer, HeaderHero}
}
</script>

<style lang="sass" scoped>

@use '../assets/main' as *

.timer-wrapper
  background-color: $palette-light
</style>