<template>
  <h1 class="section-title text-center">Testimonials</h1>
  <h3 class="text-center">Why do people love me?</h3>
  <carousel :items-to-show="3" :wrap-around="true">
    <slide class="card-wrapper" v-for="feedback in store.testimonialsFeedbacks" :key="feedback.userName">
      <div class="testimonial">
        <h3>{{ feedback.title }}</h3>
        <p>{{ feedback.body }}</p>
        <div class="row">
          <div class="col-3 user-img-wrapper">
            <img :src="feedback.userImage" alt="user image">
          </div>
          <div class="col-7 d-flex flex-column justify-content-center">
            <h4 class="fs-6">{{ feedback.userName }}</h4>
            <h4>{{ feedback.userRole }}</h4>
          </div>
        </div>
      </div>
    </slide>
    <navigation slot="navigation" direction="horizontal">
      <button class="carousel__prev">Previous</button>
      <button class="carousel__next">Next</button>
    </navigation>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import {store} from "../../store.js";

export default {
  components: {Carousel, Slide, Navigation},
  data() {
    return {
      store,

    }
  }
}

</script>

<style scoped lang="sass">

$carousel-not-active-slide-opacity: .4
@use '../../assets/main' as *

.section-title
  font-family: $section-title-font
  color: $palette-light-blue
  font-size: $section-title-font-size

.carousel
  position: relative

  &.is-dragging.is-hover .carousel__slide
    opacity: $carousel-not-active-slide-opacity

  .card-wrapper
    padding: 60px

  .carousel__slide--prev, .carousel__slide--clone, .carousel__slide--next
    opacity: $carousel-not-active-slide-opacity

  .carousel__slide--active
    transition: .7s
    opacity: 1

  .testimonial
    text-align: left
    display: flex
    flex-direction: column
    gap: 10px

    h3
      font-size: 1rem
      font-weight: 600

    p
      opacity: .85

.user-img-wrapper
  img
    border-radius: 50%
    width: 100%

.carousel__icon
  width: 50px
  height: 50px
  background-color: #ed6e31

.carousel__prev
  left: 0
  background-color: #ed6e31

.carousel__next
  right: 0
  background-color: #ed6e31
  height: 50px
  width: 50px

</style>