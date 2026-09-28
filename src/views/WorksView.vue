<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import { works, type WorkCategory } from '../data/content'
import { ArrowUpRight } from 'lucide-vue-next'
import { computed, shallowRef } from 'vue'

const filters: Array<'全部' | WorkCategory> = ['全部', '文旅 IP', '品牌联名', '空间活动']
const activeFilter = shallowRef<'全部' | WorkCategory>('全部')
const visibleWorks = computed(() => activeFilter.value === '全部' ? works : works.filter((work) => work.category === activeFilter.value))
</script>

<template>
  <main class="inner-page works-page">
    <PageHero kicker="SELECTED WORKS" title="一些已经发生的文化连接。" description="我们和品牌、景区、城市与年轻的创作者一起，把一个想法做成可以被看见、被使用、被记住的作品。" image="/assets/project-cpox-products.jpg" image-alt="CPOX 联名文创产品" />
    <section class="inner-section works-directory"><div class="shell"><div class="filter-bar inner-filter" role="tablist" aria-label="作品筛选"><button v-for="filter in filters" :key="filter" type="button" :class="{ active: activeFilter === filter }" role="tab" :aria-selected="activeFilter === filter" @click="activeFilter = filter">{{ filter }}</button></div><div class="directory-grid"><RouterLink v-for="work in visibleWorks" :key="work.slug" class="directory-work-card" :to="`/works/${work.slug}`"><div class="directory-work-image"><img :src="work.image" :alt="work.title" loading="lazy" /></div><div class="directory-work-meta"><div><h3>{{ work.title }}</h3><p>{{ work.subtitle }}</p></div><ArrowUpRight :size="18" /></div></RouterLink></div></div></section>
  </main>
</template>
