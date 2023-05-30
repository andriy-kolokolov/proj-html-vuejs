<script setup>

</script>

<template>
  <div class="btn-wrapper">
    <slot>

    </slot>
  </div>
</template>

<style lang="sass" scoped>

@use '../../assets/main' as *

.btn-wrapper
  font-size: 13px
  color: white
  background-color: $palette-orange
  padding: 5px 20px
  border-radius: 5px
  cursor: pointer
  font-weight: bold
  width: fit-content
  transition: $link-transition

  &:hover
    background-color: $palette-hover-blu


  &:active
    background-color: #6a90f1

</style>