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
import {AppHeader, AppMain, AppFooter, MainSection} from "./components/index.js"

export default {
  components: {AppHeader, AppMain, AppFooter, MainSection}
}


</script>

<style lang="sass">
@use "./assets/main" as *

</style>
