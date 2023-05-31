<script setup>

</script>

<template>
  <div class="container">
    <div class="row-cols-4 d-flex flex-row lh-lg">
      <div class="col">
        <div class="fw-bold fs-5">Address</div>
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
        <div class="d-flex gap-3"><h4>Instagramm</h4><span class="social-link-coach">@maxcoach</span></div>
        <div class="img-wrapper d-flex gap-3">
          <img src="../assets/img/120084500_197897808368764_8114555493043279565_n.jpg" alt="">
          <img src="../assets/img/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
          <img src="../assets/img/120099363_364334431619755_7198812647386067017_n.jpg" alt="">
        </div>
      </div>
    </div>

    <p class="text-center rights">@2020 Maxcoach. All Rights Reserved</p>
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


.social-link-coach
  color: orange
  cursor: pointer

.img-wrapper

  img
    height: 100px
.rights
  padding: 40px
  opacity: .5
</style>