<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef } from 'vue'
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'

const isMenuOpen = shallowRef(false)
const isScrolled = shallowRef(false)

const navItems = [
  { label: '首页', to: '/' },
  { label: '关于首佳', to: '/about' },
  { label: '定制服务', to: '/services' },
  { label: '案例展示', to: '/works' },
  { label: '联系我们', to: '/contact' },
]

function updateScrollState() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', updateScrollState))
</script>

<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="shell header-inner">
      <RouterLink class="brand" to="/" aria-label="回到首页" @click="isMenuOpen = false">
        <img class="brand-logo" src="/assets/logo.png" alt="首佳文创 Shoujia Cultural And Creative" />
      </RouterLink>

      <nav class="desktop-nav" aria-label="主导航">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="isMenuOpen = false">
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink class="header-cta" to="/contact">
        预约合作
        <ArrowUpRight :size="16" stroke-width="1.8" aria-hidden="true" />
      </RouterLink>

      <button class="menu-trigger" type="button" :aria-expanded="isMenuOpen" aria-label="打开导航" @click="isMenuOpen = !isMenuOpen">
        <X v-if="isMenuOpen" :size="22" aria-hidden="true" />
        <Menu v-else :size="22" aria-hidden="true" />
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-nav">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="isMenuOpen = false">
          {{ item.label }}
        </RouterLink>
        <RouterLink class="mobile-nav-cta" to="/contact" @click="isMenuOpen = false">聊聊你的项目 <ArrowUpRight :size="16" /></RouterLink>
      </div>
    </Transition>
  </header>
</template>
