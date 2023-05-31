<template>
  <div>
    <AppHeader

    />

    <AppMain

    />

    <AppFooter

    />
  </div>
</template>

<script>
import {AppHeader, AppMain, AppFooter} from "./components/index.js"

export default {
  components: {AppHeader, AppMain, AppFooter}
}


</script>

<style lang="sass">
@use "./assets/main" as *

</style>
