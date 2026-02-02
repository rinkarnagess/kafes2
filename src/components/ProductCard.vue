<template>
  <article class="product">
    <div class="product__img">
      <img class="product__img-el" :src="product.image" :alt="product.title" loading="lazy" />
    </div>

    <h3 class="product__title">{{ product.title }}</h3>

    <p class="product__meta">
      <span v-if="product.category === 'coffee'">
        кофе • {{ product.brew === 'espresso' ? 'эспрессо' : 'фильтр' }}
      </span>
      <span v-else>аксессуар</span>

      <span v-if="product.notes?.length"> • {{ product.notes.slice(0, 2).join(' • ') }}</span>
    </p>

    <div class="product__bottom">
      <span class="price">{{ formattedPrice }}</span>
      <RouterLink class="btn btn--small btn--ghost" :to="`/product/${product.id}`">
        Смотреть
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  product: { type: Object, required: true },
})

const formattedPrice = computed(() => `${props.product.price.toFixed(2)}€`)
</script>
