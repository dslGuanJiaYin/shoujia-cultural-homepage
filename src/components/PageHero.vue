<script setup lang="ts">
import { ArrowDown, ArrowUpRight } from 'lucide-vue-next'

withDefaults(defineProps<{
  kicker: string
  title: string
  description: string
  image?: string
  imageAlt?: string
}>(), {
  image: '',
  imageAlt: '',
})
</script>

<template>
  <section class="page-hero" :class="{ 'page-hero-with-image': image }">
    <div class="shell page-hero-inner">
      <div class="page-hero-copy">
        <nav class="breadcrumbs" aria-label="面包屑导航"><RouterLink to="/">首页</RouterLink><ArrowUpRight :size="13" aria-hidden="true" /><span>{{ kicker }}</span></nav>
        <p class="eyebrow eyebrow-green">{{ kicker }}</p>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <RouterLink class="page-hero-link" to="/contact">聊聊你的项目 <ArrowUpRight :size="16" aria-hidden="true" /></RouterLink>
      </div>
      <div v-if="image" class="page-hero-image"><img :src="image" :alt="imageAlt || title" /></div>
    </div>
    <div class="page-hero-scroll" aria-hidden="true"><span>SCROLL TO EXPLORE</span><ArrowDown :size="15" /></div>
  </section>
</template>
