<template>
  <header class="site-header">
    <div class="container header__inner">
      <RouterLink class="brand" to="/" aria-label="На главную">
        <span class="brand__mark">☕</span>
        <span class="brand__name">Coffee &amp; Co</span>
      </RouterLink>

      <nav class="nav" aria-label="Основная навигация">
        <button
            class="nav__toggle"
            type="button"
            :aria-expanded="isMenuOpen.toString()"
            aria-controls="navMenu"
            @click="toggleMenu"
        >
          <span class="sr-only">Открыть меню</span>
          <span class="burger" aria-hidden="true"></span>
        </button>

        <ul
            class="nav__menu"
            id="navMenu"
            :class="{ 'is-open': isMenuOpen }"
            @click="onMenuClick"
        >
          <li><RouterLink class="nav__link" to="/">Главная</RouterLink></li>
          <li><RouterLink class="nav__link" to="/catalog">Каталог</RouterLink></li>
          <li><a class="nav__link" href="#" @click.prevent>Корзина</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
function closeMenu() {
  isMenuOpen.value = false
}
function onMenuClick(e) {
  const link = e.target.closest('a')
  if (link) closeMenu()
}
function onKeydown(e) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
