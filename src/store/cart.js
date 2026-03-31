import { computed, reactive } from 'vue'
import { products } from '../data/products'

const STORAGE_KEY = 'ukafe-cart'
const productMap = new Map(products.map((product) => [product.id, product]))

function normalizeQuantity(value) {
  const quantity = Number.parseInt(value, 10)

  if (!Number.isFinite(quantity) || quantity < 1) {
    return 1
  }

  return quantity
}

function loadItems() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed
      .filter((item) => productMap.has(item?.id))
      .map((item) => ({
        id: item.id,
        quantity: normalizeQuantity(item.quantity),
      }))
  } catch {
    return []
  }
}

function saveItems(items) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Ignore storage errors so cart mutations still work in memory.
  }
}

const state = reactive({
  items: loadItems(),
})

const detailedItems = computed(() =>
  state.items
    .map((item) => {
      const product = productMap.get(item.id)

      if (!product) {
        return null
      }

      return {
        id: item.id,
        quantity: item.quantity,
        product,
        lineTotal: product.price * item.quantity,
      }
    })
    .filter(Boolean),
)

const itemsCount = computed(() =>
  state.items.reduce((total, item) => total + item.quantity, 0),
)

const uniqueItemsCount = computed(() => state.items.length)

const subtotal = computed(() =>
  detailedItems.value.reduce((total, item) => total + item.lineTotal, 0),
)

const delivery = computed(() => {
  if (itemsCount.value === 0) {
    return 0
  }

  return subtotal.value >= 35 ? 0 : 4.9
})

const total = computed(() => subtotal.value + delivery.value)

function persist() {
  saveItems(state.items)
}

function findItem(productId) {
  return state.items.find((item) => item.id === productId)
}

function addItem(product, quantity = 1) {
  const productId = typeof product === 'string' ? product : product?.id

  if (!productMap.has(productId)) {
    return
  }

  const amount = normalizeQuantity(quantity)
  const existing = findItem(productId)

  if (existing) {
    existing.quantity += amount
  } else {
    state.items.push({ id: productId, quantity: amount })
  }

  persist()
}

function setQuantity(productId, quantity) {
  const existing = findItem(productId)

  if (!existing) {
    return
  }

  const nextQuantity = Number.parseInt(quantity, 10)

  if (!Number.isFinite(nextQuantity) || nextQuantity < 1) {
    removeItem(productId)
    return
  }

  existing.quantity = nextQuantity
  persist()
}

function increment(productId) {
  const existing = findItem(productId)

  if (!existing) {
    addItem(productId, 1)
    return
  }

  existing.quantity += 1
  persist()
}

function decrement(productId) {
  const existing = findItem(productId)

  if (!existing) {
    return
  }

  if (existing.quantity === 1) {
    removeItem(productId)
    return
  }

  existing.quantity -= 1
  persist()
}

function removeItem(productId) {
  const index = state.items.findIndex((item) => item.id === productId)

  if (index === -1) {
    return
  }

  state.items.splice(index, 1)
  persist()
}

function clearCart() {
  state.items.splice(0, state.items.length)
  persist()
}

function getQuantity(productId) {
  return findItem(productId)?.quantity ?? 0
}

function hasItem(productId) {
  return getQuantity(productId) > 0
}

export function useCart() {
  return {
    items: detailedItems,
    itemsCount,
    uniqueItemsCount,
    subtotal,
    delivery,
    total,
    addItem,
    setQuantity,
    increment,
    decrement,
    removeItem,
    clearCart,
    getQuantity,
    hasItem,
  }
}
