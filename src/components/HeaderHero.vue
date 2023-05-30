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

      <div class="col-4">

      </div>

      <div class="col-4">

      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="sass">

@use '../assets/main' as *

.hero-wrapper
  background-color: #f9f7f4
  position: relative
  padding: 75px 0 50px 0

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

</style>