<template>
  <div class="container">
    <h1 class="section-title text-center">Artists Coaching</h1>
    <h2 class="section-subtitle text-center">Latest Online Courses</h2>

    <div class="grid">
      <div v-for="card in store.latestCourses" :key='card.name' class="grid-item">
        <img :src="card.img" alt="">
        <div class="card-details col-11">
          <h4 class="card-price">${{ card.price }}</h4>
          <h5 class="card-name">{{ card.name }}</h5>
          <div class="lessons row-cols-2 d-flex flex-row ">
            <div class="col">
              <i class="fa-regular fa-file-lines"></i>
              {{ card.lessons }} Lessons
            </div>
            <div class="col">
              <i class="fa-regular fa-user"></i>
              {{ card.students }} Students
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-4">
      <UiButton class="button">View all courses <i class="ms-2 fa-solid fa-arrow-left fa-rotate-180"></i></UiButton>
    </div>


  </div>
</template>

<script>
import {store} from "../../store.js";
import UiButton from "../UI/UiButton.vue";

export default {
  components: {UiButton},
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped lang="sass">
@use '../../assets/main' as *

.button
  padding: 15px 30px
  background-color: #fbc7b2
  color: $palette-orange

  &:hover
    color: white

.card-price
  color: $palette-orange

.lessons
  opacity: .7
  font-size: 14px

.section-title
  font-family: $section-title-font
  color: $palette-light-blue
  font-size: $section-title-font-size

.grid
  margin-top: 30px
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 20px

.grid-item
  padding: 20px
  border-radius: 5px

  .card-details
    padding: 20px
    transition: .5s
    cursor: pointer
    border: 1px solid transparent
  .card-price
    font-size: 16px
    font-weight: bold
  .card-name
    font-size: 16px

  &:hover
    transition: .5s

    .card-details
      border: 1px solid $palette-orange
      transform: translate(0, -25%)
      background-color: rgba(255, 255, 255, 0.8)

  img
    width: 100%

  .card-name
    margin-top: 10px

  .lessons
    margin-top: 10px

    .col
      flex: 1
</style>