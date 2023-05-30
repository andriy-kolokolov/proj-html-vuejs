<template>
  <div class="hero-wrapper">
    <div class="row">
      <div class="col-4 col__1">
        <div class="img-wrapper">
          <img src="../assets/img/artist-hero-image-02-232x300.jpg" alt="">
        </div>
        <div class="img-wrapper">
          <img src="../assets/img/artist-hero-image-01.jpg" alt="">
        </div>
        <div class="img-wrapper bg-shape--1">
          <img src="../assets/img/artist-shape-03.png" alt="">
        </div>
        <div class="img-wrapper bg-shape--2">
          <img src="../assets/img/hero-shape-bg.svg" alt="">
        </div>
        <div class="img-wrapper bg-artist">
          <img src="../assets/img/artist-hero-image-03-204x300.png" alt="">
        </div>
      </div>

      <div class="col-4 col__2 d-flex flex-column justify-content-center text-center">
        <h1 class="hello-title">Hello, Im Martin</h1>
        <h2>Artist Coaching And Mentoring</h2>
        <h2>Might Be for You.</h2>
        <div class="d-flex justify-content-center mt-4">
          <ui-button class="p-3">Get Started today</ui-button>
        </div>
      </div>

      <div class="col-4 col__3">
        <div class="img-wrapper">
          <img src="../assets/img/artist-hero-image-04.jpg" alt="">
        </div>
        <div class="img-wrapper">
          <img src="../assets/img/artist-shape-04.png" alt="">
        </div>
        <div class="img-wrapper">
          <img src="../assets/img/artist-shape-05.png" alt="">
        </div>
        <div class="img-wrapper bg-shape--1">
          <img src="../assets/img/artist-shape-01-600x577.png" alt="">
        </div>
        <div class="img-wrapper bg-shape--2">
          <img src="../assets/img/maxcoach-shape-12.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {UiButton} from "./UI/index.js"

export default {
  components: {UiButton}
}
</script>

<style scoped lang="sass">

@use '../assets/main' as *
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap')

.hero-wrapper
  background-color: #f9f7f4
  position: relative
  padding: 75px 0

  /*    COLUMN 1    */

  .col__1
    position: relative
    z-index: 0

    .img-wrapper:first-child
      margin-left: 40%
      z-index: 2

      img
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2)

    .img-wrapper:nth-child(2)
      margin-top: -25px
      margin-left: 10%
      z-index: 1

      img
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2)

    .bg-shape--1
      position: absolute
      top: 50px
      z-index: -2

    .bg-shape--2
      position: absolute
      top: 75px
      left: -50px
      height: 450px
      z-index: -3

      img
        height: 100%

    .bg-artist
      position: absolute
      left: 75%
      bottom: 0
      z-index: -1

  /*    COLUMN 2    */

  .col__2

    h2
      font-size: 1.8rem
      font-weight: 600

    .hello-title
      font-family: 'Caveat', cursive
      color: #6ac5f1

  /*    COLUMN 3    */

  .col__3
    position: relative
    z-index: 0

    .img-wrapper:first-child
      position: absolute
      bottom: 50px
      height: 320px
      z-index: 10

      img
        height: 100%

    .img-wrapper:nth-child(2)
      margin-left: 30%

    .bg-shape--1
      height: 600px
      z-index: -1
      position: absolute
      bottom: 0
      left: -200px

      img
        height: 100%

    .bg-shape--2
      z-index: 1
      position: absolute
      bottom: 20px
      left: 30px


      img
        height: 100%


</style>