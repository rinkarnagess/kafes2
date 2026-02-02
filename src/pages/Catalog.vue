<template>
  <main class="section">
    <div class="container">
      <div class="section__head">
        <h1 class="section__title">Каталог</h1>
        <p class="section__subtitle">Выберите кофе или аксессуары. Клик по карточке — страница товара.</p>
      </div>

      <div class="catalog-bar">
        <label class="catalog-bar__label">
          Категория:
          <select class="catalog-bar__select" v-model="category">
            <option value="all">Все</option>
            <option value="coffee">Кофе</option>
            <option value="accessory">Аксессуары</option>
          </select>
        </label>

        <label class="catalog-bar__label">
          Поиск:
          <input class="catalog-bar__input" v-model.trim="query" placeholder="например: Эфиопия" />
        </label>
      </div>

      <div class="grid grid--4">
        <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
      </div>

      <p v-if="filtered.length === 0" class="empty-state">
        Ничего не найдено.
      </p>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

const category = ref('all')
const query = ref('')

const filtered = computed(() => {
  const q = query.value.toLowerCase()

  return products.filter((p) => {
    const matchCategory = category.value === 'all' ? true : p.category === category.value
    const matchQuery =
        q.length === 0
            ? true
            : (p.title + ' ' + (p.description ?? '')).toLowerCase().includes(q)

    return matchCategory && matchQuery
  })
})
</script>
