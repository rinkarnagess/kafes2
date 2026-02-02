<template>
  <footer class="site-footer">
    <div class="container footer__inner">
      <div class="footer__left">
        <div class="brand brand--small">
          <span class="brand__mark">☕</span>
          <span class="brand__name">Coffee &amp; Co</span>
        </div>
        <p class="footer__text">Учебный проект: интернет-магазин кофе и аксессуаров (MVP).</p>
      </div>

      <div class="footer__right">
        <RouterLink class="footer__link" to="/catalog">Каталог</RouterLink>
        <RouterLink class="footer__link" to="/">Главная</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
