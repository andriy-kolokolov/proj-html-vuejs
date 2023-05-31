<script setup>

</script>

<template>
  <div class="container">
    <div class="row-cols-4 d-flex flex-row lh-lg">
      <div class="col">
        <div class="fw-bold fs-5">Adress</div>
        <div class="info">
          <div>382 NE 191st St # 87394 Miami, FL 33179-3899</div>
          <div>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday) </div>
          <div>support cumaxcoach.com </div>
        </div>
        <div class="social">
          <ul class="d-flex flex-row socials p-0 gap-4">
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
      <div class="col">
        <ul class="ul">
          <li class="fw-bold">Explore</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
      <div class="col">
        <ul class="ul">
          <li class="fw-bold">Information</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
      <div class="col">
        <div class="d-flex gap-3"><h4>Instagramm</h4><span class="social-link-actor">@maxcoach</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
ul
  list-style: none

.info
  font-size: 13px

.socials
  font-size: 1.5rem

  .nav-item
    opacity: .5
    transition: .4s
    &:hover
      opacity: 1


.social-link-actor
  color: orange
  cursor: pointer
</style>