<template>
  <div class="wrapper">
    <div class="bg-img-wrapper">
      <img src="../../assets/img/artist-shape-01-600x577.png" alt="">
    </div>
    <div class="container d-flex flex-column align-items-center ">
      <h1 class="title">Artist coaching</h1>
      <h2>I understand what it takes to create.</h2>
      <h2>I can help you with</h2>

      <div class="mt-5 row-cols-2 row-cols-md-4 d-flex flex-row">
        <div class="card d-flex flex-column">
          <img src="../../assets/img/artist-box-image-01.png" alt="">
          <h4>Online Courses</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda blanditiis cumque distinctio dolorum
            odio !
          </p>
        </div>

        <div class="card d-flex flex-column">
          <img src="../../assets/img/artist-box-image-02.png" alt="">
          <h4>One to One</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda blanditiis cumque distinctio dolorum
            odio !
          </p>
        </div>

        <div class="card col d-flex flex-column">
          <img src="../../assets/img/artist-box-image-03.png" alt="">
          <h4>Anywhere</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda blanditiis cumque distinctio dolorum
            odio !
          </p>
        </div>

        <div class="card col d-flex flex-column">
          <img src="../../assets/img/artist-box-image-04.png" alt="">
          <h4>On Time</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda blanditiis cumque distinctio dolorum
            odio !
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="sass">

@use '../../assets/main' as *
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap')

.card
  background-color: transparent
  border: 0
  padding: 20px
  gap: 10px

  h4
    margin-top: 15px

  &:nth-child(even)
    margin-top: 70px

  &:nth-child(odd)
    margin-top: -30px

  img
    width: 60%

  &:nth-child(3)
    img
      scale: .8

.wrapper
  background-image: url("src/assets/img/maxcoach-shape-14-1536x343.png")
  background-position: center
  background-size: cover
  position: relative

.title
  font-family: 'Caveat', cursive
  color: $palette-light-blue
  font-size: 3rem

.bg-img-wrapper
  position: absolute
  height: 500px
  left: -60px

  img
    height: 100%
</style>