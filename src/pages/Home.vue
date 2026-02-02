<template>
  <main>
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="badge">Свежая обжарка • доставка • аксессуары</p>
          <h1 class="hero__title">Кофе, который хочется повторить</h1>
          <p class="hero__text">
            Выбирай зерно под эспрессо, фильтр или турку — и подбери аксессуары, чтобы каждый завар был стабильным.
          </p>

          <div class="hero__actions">
            <RouterLink class="btn btn--primary" to="/catalog">Смотреть каталог</RouterLink>
            <a class="btn btn--secondary" href="#features">Почему мы</a>
          </div>

          <div class="hero__meta">
            <div class="meta-card">
              <span class="meta-card__value">24–72 ч</span>
              <span class="meta-card__label">после обжарки</span>
            </div>
            <div class="meta-card">
              <span class="meta-card__value">от 35€</span>
              <span class="meta-card__label">доставка бесплатно</span>
            </div>
            <div class="meta-card">
              <span class="meta-card__value">100%</span>
              <span class="meta-card__label">арабика</span>
            </div>
          </div>
        </div>


      </div>
    </section>

    <section class="section" id="features">
      <div class="container">
        <div class="section__head">
          <h2 class="section__title">Почему мы</h2>
          <p class="section__subtitle">Фокус на вкусе, понятности и стабильности.</p>
        </div>

        <div class="grid grid--3">
          <div class="feature">
            <div class="feature__icon">🔥</div>
            <h3 class="feature__title">Свежая обжарка</h3>
            <p class="feature__text">Отгружаем партии быстро, чтобы кофе был ароматным.</p>
          </div>
          <div class="feature">
            <div class="feature__icon">📦</div>
            <h3 class="feature__title">Упаковка</h3>
            <p class="feature__text">Пакеты с клапаном и аккуратная комплектация.</p>
          </div>
          <div class="feature">
            <div class="feature__icon">🧾</div>
            <h3 class="feature__title">Просто выбрать</h3>
            <p class="feature__text">Понятные вкусы и рекомендации под способ заваривания.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
