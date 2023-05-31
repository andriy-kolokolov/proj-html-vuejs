<script setup>

</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="row gap-5 d-flex justify-content-center">
        <div class="col-3 d-flex align-items-center text-end">
          <h2 class="title">Newsletter to get in touch</h2>
        </div>
        <div class="col-5 d-flex align-items-center">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Your e-mail"
                   aria-label="Dollar amount (with dot and two decimal places)">
            <i class="fa-solid fa-arrow-left fa-rotate-180 p-2 d-flex align-items-center justify-content-center"></i>
          </div>
        </div>
      </div>
    </div>

    <img class="bg-img left" src="../../assets/img/artist-shape-color-paint-top-left.png" alt="">
    <img class="bg-img right" src="../../assets/img/artist-shape-color-paint-bottom-right.png" alt="">
  </div>

</template>

<style scoped lang="sass">


.fa-arrow-left
  cursor: pointer

.title
  font-family: "Times New Roman", Times, serif
  font-weight: 600

.wrapper
  position: relative
  background-color: #244186
  color: white
  padding: 50px
  z-index: -1

  .bg-img
    position: absolute
    z-index: 0
    height: 100%

    &.left
      left: 0
      top: 0

    &.right
      right: 0
      top: 0

.form-control
  background-color: #244186
  border-width: 0 0 1px 0
  border-radius: 0
  border-color: white
  color: white

  ::placeholder
    color: red

  &:focus, &:focus-visible
    box-shadow: none
    outline: none



</style>