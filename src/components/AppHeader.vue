<template>
  <div class="timer-wrapper">
    <div class="container d-flex justify-content-center">
      <header-timer/>
    </div>
  </div>
  <div class="container-fluid nav-wrapper sticky-top ">
    <header-navigation class="header-navigation"/>
  </div>
  <div class="container-fluid">
    <header-hero/>
  </div>
</template>

<script>
import {HeaderTimer} from "./UI/index.js"
import HeaderNavigation from "./HeaderNavigation.vue";
import HeaderHero from "./HeaderHero.vue";

export default {
  components: {HeaderNavigation, HeaderTimer, HeaderHero},
  methods: {
    handleScroll() {
      const header = document.querySelector(".nav-wrapper")
      if (window.pageYOffset > 50) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

}
</script>

<style lang="sass" scoped>

@use '../assets/main' as *

.nav-wrapper
  transition: .7s

  &.active
    background-color: rgba(255, 255, 255, 0.9)
    padding: 0

.timer-wrapper
  background-color: $palette-light
  font-size: 14px

.header-navigation
  font-size: $navbar-font-size
  font-weight: 500

</style>