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
          id="navMenu"
          class="nav__menu"
          :class="{ 'is-open': isMenuOpen }"
          @click="onMenuClick"
        >
          <li><RouterLink class="nav__link" to="/">Главная</RouterLink></li>
          <li><RouterLink class="nav__link" to="/catalog">Каталог</RouterLink></li>
          <li>
            <RouterLink class="nav__link nav__link--cart" to="/cart">
              Корзина
              <span v-if="itemsCount" class="nav__badge">{{ itemsCount }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useCart } from '../store/cart'

const isMenuOpen = ref(false)
const { itemsCount } = useCart()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function onMenuClick(event) {
  const target = event.target
  const link = target instanceof Element ? target.closest('a') : null

  if (link) {
    closeMenu()
  }
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
