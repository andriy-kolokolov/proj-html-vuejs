<template>
  <div class="navbar navbar-expand-lg">
    <div class="container d-flex justify-content-between">
      <!-- Logo -->
      <a class="navbar-brand" href="#"><img src="../assets/img/dark-logo.png" alt=""></a>

      <!-- Links -->
      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home
            </a>
            <ul class="dropdown-menu animate slideIn">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
            <ul class="dropdown-menu animate slideIn">
              <li><a class="dropdown-item" href="#section-first">Work</a></li>
              <li><a class="dropdown-item" href="#section-bio">Bio</a></li>
              <li><a class="dropdown-item" href="#section-youtube">Youtube</a></li>
              <li><a class="dropdown-item" href="#section-testimonials">Testimonials</a></li>
              <li><a class="dropdown-item" href="#section-online-courses">Online Courses</a></li>
              <li><a class="dropdown-item" href="#section-tips">Tips</a></li>
              <li><a class="dropdown-item" href="#section-upcoming-events">Upcoming Events</a></li>
              <li><a class="dropdown-item" href="#section-subscribe">Subscribe</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Courses
            </a>
            <ul class="dropdown-menu animate slideIn">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Features
            </a>
            <ul class="dropdown-menu animate slideIn">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </a>
            <ul class="dropdown-menu animate slideIn">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul class="dropdown-menu animate slideIn">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Social Icons -->
      <ul class="navbar-nav d-none d-md-flex flex-row socials">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-brands fa-twitter"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-brands fa-facebook-f"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-brands fa-linkedin"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: 'HeaderNavigation'
}
</script>

<style lang="sass" scoped>

@use "../assets/main" as *

@media (min-width: 768px)
  .animate
    animation-duration: 0.4s
    -webkit-animation-duration: 0.4s
    animation-fill-mode: both
    -webkit-animation-fill-mode: both

@keyframes slideIn
  0%
    transform: translateY(1rem)
    opacity: 0
  100%
    transform: translateY(0rem)
    opacity: 1
  0%
    transform: translateY(1rem)
    opacity: 0

@-webkit-keyframes slideIn
  0%
    transform: translate(0)
  100%
    transform: translateY(0)
    opacity: 1
  0%
    transform: translateY(1rem)
    opacity: 0

.slideIn
  -webkit-animation-name: slideIn
  animation-name: slideIn

.navbar-brand
  img
    padding: 10px
    height: 40px

.nav-link.dropdown-toggle
  transition: $link-transition

  &:hover
    color: $palette-light-blue

.socials
  .nav-link
    transition: $link-transition

    &:hover
      color: $palette-light-blue

.dropdown-item
  transition: $link-transition

  &:hover
    color: white
    background-color: $palette-light-blue

</style>
