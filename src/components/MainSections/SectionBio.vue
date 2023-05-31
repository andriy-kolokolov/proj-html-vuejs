<script setup>
import UiButton from "../UI/UiButton.vue";
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="row gap-5 d-flex flex-row justify-content-between">

        <div class="txt-left col-4 d-flex flex-column justify-content-center text-center gap-4">
          <div class="img-wrapper text-center">
            <img src="../../assets/img/artist-quote-icon.png" alt="">
          </div>
          <h1 class="subtitle-txt lh-base">I coach and mentor visual artists, like you, to Create Like You Mean It</h1>
          <h1 class="artist-sign">Martin Garrix</h1>
        </div>

        <div class="col-6 mt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad architecto asperiores, beatae consectetur
            corporis deleniti dicta, excepturi explicabo fugiat in labore laudantium maxime modi necessitatibus, odit
            officia pariatur possimus quasi sed soluta tenetur voluptates? Autem commodi deserunt, distinctio et
            explicabo, facilis in nemo odit officiis omnis quia sapiente temporibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem eos, libero perspiciatis placeat
            veritatis.
          </p>
          <UiButton class="btn-start mt-5">Get Started today</UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

@use '../../assets/main' as *
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap')

.btn-start
  font-size: 1.2rem
  padding: 10px 30px
  background-color: #ffdfcc
  color: $palette-orange

  &:hover
    color: white

.subtitle-txt
  font-size: 2.5rem
  font-weight: 600

.artist-sign
  font-family: 'Caveat', cursive
  color: $palette-light-blue


</style>