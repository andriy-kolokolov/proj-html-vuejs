<template>
  <div>
    <AppHeader

    />

    <AppMain

    />

    <AppFooter

    />

    <div class="go-top-arrow sticky-bottom ms-auto me-5 mb-5">
      <a href="#"><i class="fa-solid fa-arrow-left fa-rotate-180"></i></a>
    </div>
  </div>
</template>

<script>
import {AppHeader, AppMain, AppFooter} from "./components/index.js"

export default {
  components: {AppHeader, AppMain, AppFooter}
}


</script>

<style lang="sass">
@use "./assets/main" as *
.go-top-arrow
  position: relative
  background-color: $palette-orange
  width: 60px
  aspect-ratio: 1 / 1
  border-radius: 50%
  opacity: .50
  transition: $link-transition

  &:hover
    opacity: 1

  i
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%) rotate(90deg)
    display: grid
    place-items: center
    color: white
    padding: 10px
    font-size: 1.5rem

</style>
