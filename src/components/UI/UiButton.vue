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
  color: white
  background-color: $palette-orange
  padding: 5px 10px
  border-radius: 5px
  cursor: pointer
</style>