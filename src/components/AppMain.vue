<template>
  <section class="section section-first">
    <section-first/>
  </section>

  <section class="section section-bio">
    <section-bio/>
  </section>

  <section class="section section-testimonials">
    <section-testimonials/>
  </section>

  <section class="section section-online-courses">
    <section-online-courses/>
  </section>

  <section class="section section-tips">
    <section-tips/>
  </section>

  <section class="section section-upcoming-events">
    <section-upcoming-events/>
  </section>

  <section class="section section-subscribe">
    <section-subscribe/>
  </section>
</template>

<script>
import {
  SectionFirst,
  SectionBio,
  SectionTestimonials,
  SectionOnlineCourses,
  SectionTips,
  SectionUpcomingEvents,
  SectionSubscribe,
} from "./MainSections/index.js";

export default {
  components: {
    SectionFirst,
    SectionBio,
    SectionTestimonials,
    SectionOnlineCourses,
    SectionTips,
    SectionUpcomingEvents,
    SectionSubscribe,
  },
};
</script>

<style lang="sass" scoped>
.section
  padding: 75px 0
</style>