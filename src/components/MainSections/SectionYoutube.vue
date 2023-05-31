<script setup>

</script>

<template>
  <div class="wrapper">
    <div class="video-wrapper d-flex justify-content-center">
      <img src="../../assets/img/artist-video-poster.jpg" alt="">
      <div class="btn-play">
        <img src="../../assets/img/icon-youtube-play.png" alt="">
      </div>
      <!--    BACKGROUND IMGS    -->
      <img class="img-bg--1" src="../../assets/img/hero-shape-bg.svg" alt="">
      <img class="img-bg--2" src="../../assets/img/maxcoach-shape-12-150x150.png" alt="">
      <img class="img-bg--3" src="../../assets/img/maxcoach-shape-12-150x150.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="sass">
.wrapper
  position: relative

  .img-bg--1
    position: absolute
    z-index: -1
    height: 60%
    left: 15%
    top: -50px

  .img-bg--2
    position: absolute
    z-index: -1
    right: 25%
    bottom: -50px

  .img-bg--3
    position: absolute
    z-index: -1
    left: 20%
    top: -30px

.video-wrapper
  position: relative

  .btn-play
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    cursor: pointer
    opacity: .6
    transition: .3s

    &:hover
      opacity: .8

    &:active
      opacity: 1

</style>
