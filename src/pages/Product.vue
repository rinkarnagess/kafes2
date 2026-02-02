<template>
  <main class="section">
    <div class="container">
      <div v-if="product" class="product-page">
        <div class="product-page__img">
          <img class="product-page__img-el" :src="product.image" :alt="product.title" />
        </div>
        <div class="product-page__info">
          <p class="badge">
            <span v-if="product.category === 'coffee'">Кофе</span>
            <span v-else>Аксессуар</span>
            <span v-if="product.brew"> • {{ product.brew === 'espresso' ? 'Эспрессо' : 'Фильтр' }}</span>
          </p>

          <h1 class="product-page__title">{{ product.title }}</h1>
          <p class="product-page__desc">{{ product.description }}</p>

          <div class="product-page__buy">
            <span class="price">{{ product.price.toFixed(2) }}€</span>
            <button class="btn btn--primary" type="button" disabled>
              Добавить в корзину
            </button>
          </div>

          <div v-if="product.notes?.length" class="product-page__chips">
            <span class="chip" v-for="n in product.notes" :key="n">{{ n }}</span>
          </div>

          <div v-if="product.details" class="product-page__details">
            <h2 class="section__title">Характеристики</h2>
            <ul class="details">
              <li v-for="(val, key) in product.details" :key="key">
                <span class="details__key">{{ key }}</span>
                <span class="details__val">{{ val }}</span>
              </li>
            </ul>
          </div>

          <div class="product-page__actions">
            <RouterLink class="btn btn--ghost" to="/catalog">← Назад в каталог</RouterLink>
          </div>
        </div>
      </div>

      <div v-else class="empty-state">
        <h1 class="section__title">Товар не найден</h1>
        <p class="section__subtitle">Проверьте ссылку или вернитесь в каталог.</p>
        <RouterLink class="btn btn--primary" to="/catalog">Открыть каталог</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()

const product = computed(() => {
  const id = route.params.id
  return products.find((p) => p.id === id) || null
})
</script>
