<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { works, type WorkCategory } from '../data/content'

type WorkFilter = '全部' | WorkCategory
const filters: WorkFilter[] = ['全部', '文旅 IP', '品牌联名', '空间活动']
const activeFilter = shallowRef<WorkFilter>('全部')

const visibleWorks = computed(() => activeFilter.value === '全部' ? works : works.filter((work) => work.category === activeFilter.value))

function selectFilter(filter: WorkFilter) {
  activeFilter.value = filter
}
</script>

<template>
  <section id="works" class="works-section section-light">
    <div class="shell">
      <div class="section-heading works-heading">
        <div>
          <p class="eyebrow eyebrow-ink">SELECTED WORKS</p>
          <h2>一些已经发生的<br /><em>文化连接。</em></h2>
        </div>
        <p class="section-heading-note">我们和品牌、景区、城市与年轻的创作者一起，把一个想法做成可以被看见、被使用、被记住的作品。</p>
      </div>

      <div class="filter-bar" role="tablist" aria-label="作品筛选">
        <button v-for="filter in filters" :key="filter" type="button" :class="{ active: activeFilter === filter }" role="tab" :aria-selected="activeFilter === filter" @click="selectFilter(filter)">
          {{ filter }}
        </button>
      </div>

      <TransitionGroup name="work-list" tag="div" class="works-grid">
        <RouterLink v-for="work in visibleWorks" :key="work.slug" class="work-card" :class="{ tall: work.tall }" :to="`/works/${work.slug}`">
          <div class="work-image">
            <img :src="work.image" :alt="work.title" loading="lazy" />
            <span class="work-open" aria-hidden="true">+</span>
          </div>
          <div class="work-meta">
            <div>
              <h3>{{ work.title }}</h3>
              <p>{{ work.subtitle }}</p>
            </div>
            <ArrowUpRight :size="18" stroke-width="1.5" aria-hidden="true" />
          </div>
        </RouterLink>
      </TransitionGroup>
    </div>
  </section>
</template>
