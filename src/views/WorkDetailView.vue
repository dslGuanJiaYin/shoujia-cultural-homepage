<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'
import { findWork, works } from '../data/content'
import PageHero from '../components/PageHero.vue'

const props = defineProps<{ slug: string }>()
const work = computed(() => findWork(props.slug))
const relatedWorks = computed(() => works.filter((item) => item.slug !== props.slug && item.category === work.value?.category).slice(0, 2))
</script>

<template>
  <main v-if="work" class="inner-page detail-page work-detail-page">
    <PageHero :kicker="work.category" :title="work.title" :description="work.intro" :image="work.image" :image-alt="work.title" />
    <section class="inner-section detail-content"><div class="shell detail-layout"><div class="detail-index"><span>CASE</span><strong>{{ work.category }}</strong></div><div><p class="detail-lead">{{ work.detail }}</p><div class="detail-points"><div><strong>01</strong><span>文化母题</span><p>从真实的地域与品牌语境中提炼可识别的故事。</p></div><div><strong>02</strong><span>视觉语言</span><p>以统一的视觉系统连接产品、包装与现场体验。</p></div><div><strong>03</strong><span>交付现场</span><p>让每个设计判断都经得起打样、生产与使用。</p></div></div><RouterLink class="button button-dark detail-cta" to="/contact">做一个类似项目 <ArrowUpRight :size="17" /></RouterLink></div></div></section>
    <section class="detail-image-section section-paper-deep"><div class="shell"><img :src="work.image" :alt="work.title" /><RouterLink class="back-link" to="/works"><ArrowLeft :size="15" /> 返回案例总览</RouterLink></div></section>
    <section v-if="relatedWorks.length" class="related-section"><div class="shell"><div class="section-heading compact-heading"><div><p class="eyebrow eyebrow-ink">KEEP EXPLORING</p><h2>更多案例</h2></div></div><div class="related-grid"><RouterLink v-for="related in relatedWorks" :key="related.slug" :to="`/works/${related.slug}`"><img :src="related.image" :alt="related.title" /><h3>{{ related.title }}</h3><p>{{ related.subtitle }}</p></RouterLink></div></div></section>
  </main>
  <main v-else class="not-found-page"><h1>案例暂未找到</h1><RouterLink class="button button-dark" to="/works">返回案例总览</RouterLink></main>
</template>
