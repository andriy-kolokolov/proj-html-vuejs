<template>
  <section id="section-first" class="section section-first">
    <section-first/>
  </section>

  <section id="section-bio" class="section section-bio">
    <section-bio/>
  </section>

  <section id="section-youtube" class="section section-youtube">
    <section-youtube/>
  </section>

  <section id="section-testimonials" class="section section-testimonials">
    <section-testimonials/>
  </section>

  <section id="section-online-courses" class="section section-online-courses">
    <section-online-courses/>
  </section>

  <section id="section-tips" class="section section-tips">
    <section-tips/>
  </section>

  <section id="section-upcoming-events" class="section section-upcoming-events">
    <section-upcoming-events/>
  </section>

  <section id="section-subscribe" class="section section-subscribe">
    <section-subscribe/>
  </section>
</template>

<script>
import {
  SectionFirst,
  SectionBio,
  SectionYoutube,
  SectionTestimonials,
  SectionOnlineCourses,
  SectionTips,
  SectionUpcomingEvents,
  SectionSubscribe,
} from "./MainSections/index.js";

export default {
  components: {
    SectionYoutube,
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