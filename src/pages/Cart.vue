<template>
  <main class="section">
    <div class="container">
      <div class="section__head">
        <h1 class="section__title">Корзина</h1>
        <p class="section__subtitle">
          Проверяйте состав заказа, меняйте количество и удаляйте лишнее перед оформлением.
        </p>
      </div>

      <div v-if="items.length" class="cart-layout">
        <section class="cart-list" aria-label="Товары в корзине">
          <article v-for="item in items" :key="item.id" class="cart-item">
            <RouterLink class="cart-item__media" :to="`/product/${item.product.id}`">
              <img :src="item.product.image" :alt="item.product.title" class="cart-item__img" />
            </RouterLink>

            <div class="cart-item__content">
              <div class="cart-item__head">
                <div>
                  <p class="cart-item__category">
                    {{ item.product.category === 'coffee' ? 'Кофе' : 'Аксессуар' }}
                  </p>
                  <RouterLink class="cart-item__title" :to="`/product/${item.product.id}`">
                    {{ item.product.title }}
                  </RouterLink>
                </div>

                <button
                  class="btn btn--ghost btn--small"
                  type="button"
                  @click="removeItem(item.id)"
                >
                  Удалить
                </button>
              </div>

              <p class="cart-item__desc">{{ item.product.description }}</p>

              <div class="cart-item__footer">
                <div class="quantity-control" aria-label="Количество товара">
                  <button
                    class="quantity-control__btn"
                    type="button"
                    @click="decrement(item.id)"
                    aria-label="Уменьшить количество"
                  >
                    -
                  </button>

                  <label class="sr-only" :for="`qty-${item.id}`">Количество</label>
                  <input
                    :id="`qty-${item.id}`"
                    class="quantity-control__input"
                    type="number"
                    min="1"
                    :value="item.quantity"
                    @change="onQuantityChange(item.id, $event)"
                  />

                  <button
                    class="quantity-control__btn"
                    type="button"
                    @click="increment(item.id)"
                    aria-label="Увеличить количество"
                  >
                    +
                  </button>
                </div>

                <div class="cart-item__prices">
                  <span class="cart-item__unit">{{ formatPrice(item.product.price) }} за шт.</span>
                  <strong class="cart-item__total">{{ formatPrice(item.lineTotal) }}</strong>
                </div>
              </div>
            </div>
          </article>
        </section>

        <aside class="cart-summary">
          <div class="cart-summary__card">
            <h2 class="cart-summary__title">Итого</h2>

            <dl class="summary-list">
              <div class="summary-list__row">
                <dt>Товаров</dt>
                <dd>{{ itemsCount }} шт.</dd>
              </div>
              <div class="summary-list__row">
                <dt>Позиций</dt>
                <dd>{{ uniqueItemsCount }}</dd>
              </div>
              <div class="summary-list__row">
                <dt>Подытог</dt>
                <dd>{{ formatPrice(subtotal) }}</dd>
              </div>
              <div class="summary-list__row">
                <dt>Доставка</dt>
                <dd>{{ delivery === 0 ? 'бесплатно' : formatPrice(delivery) }}</dd>
              </div>
            </dl>

            <div class="cart-summary__total">
              <span>К оплате</span>
              <strong>{{ formatPrice(total) }}</strong>
            </div>

            <div class="cart-summary__actions">
              <RouterLink class="btn btn--primary" to="/catalog">Добавить ещё</RouterLink>
              <button class="btn btn--ghost" type="button" @click="clearCart">
                Очистить корзину
              </button>
            </div>

            <p class="cart-summary__note">
              Доставка бесплатна при заказе от 35.00€.
            </p>
          </div>
        </aside>
      </div>

      <div v-else class="empty-state cart-empty">
        <h2 class="section__title">Корзина пока пуста</h2>
        <p class="section__subtitle">
          Начните с каталога: добавьте зерно или аксессуары, и они сразу появятся здесь.
        </p>
        <RouterLink class="btn btn--primary" to="/catalog">Перейти в каталог</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCart } from '../store/cart'

const {
  items,
  itemsCount,
  uniqueItemsCount,
  subtotal,
  delivery,
  total,
  increment,
  decrement,
  setQuantity,
  removeItem,
  clearCart,
} = useCart()

function formatPrice(value) {
  return `${value.toFixed(2)}€`
}

function onQuantityChange(productId, event) {
  setQuantity(productId, event.target.value)
}
</script>
