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
      <span v-if="quantityInCart" class="product__status">В корзине: {{ quantityInCart }}</span>
    </div>

    <div class="product__actions">
      <button class="btn btn--primary btn--small" type="button" @click="addToCart">
        В корзину
      </button>

      <RouterLink class="btn btn--small btn--ghost" :to="`/product/${product.id}`">
        Подробнее
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCart } from '../store/cart'

const props = defineProps({
  product: { type: Object, required: true },
})

const { addItem, getQuantity } = useCart()

const formattedPrice = computed(() => `${props.product.price.toFixed(2)}€`)
const quantityInCart = computed(() => getQuantity(props.product.id))

function addToCart() {
  addItem(props.product)
}
</script>
