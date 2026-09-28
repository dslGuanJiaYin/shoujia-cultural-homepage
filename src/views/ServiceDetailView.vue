<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'
import { findService } from '../data/content'
import PageHero from '../components/PageHero.vue'

const props = defineProps<{ slug: string }>()
const service = computed(() => findService(props.slug))
</script>

<template>
  <main v-if="service" class="inner-page detail-page service-detail-page">
    <PageHero :kicker="`SERVICE ${service.number}`" :title="service.title" :description="service.body" :image="service.image" :image-alt="service.title" />
    <section class="inner-section detail-content"><div class="shell detail-layout"><div class="detail-index"><span>{{ service.number }}</span><strong>服务详情</strong></div><div><p class="detail-lead">{{ service.detail }}</p><div class="detail-points"><div><strong>01</strong><span>文化方向</span><p>先理解文化语境，再决定视觉和产品语言。</p></div><div><strong>02</strong><span>创意执行</span><p>让同一个创意在平面、产品和空间中保持一致。</p></div><div><strong>03</strong><span>落地标准</span><p>用样品和流程把好的想法变成可交付的作品。</p></div></div><RouterLink class="button button-dark detail-cta" to="/contact">预约一次初聊 <ArrowUpRight :size="17" /></RouterLink></div></div></section>
    <section class="detail-image-section section-paper-deep"><div class="shell"><img :src="service.image" :alt="service.title" /><RouterLink class="back-link" to="/services"><ArrowLeft :size="15" /> 返回服务总览</RouterLink></div></section>
  </main>
  <main v-else class="not-found-page"><h1>服务暂未找到</h1><RouterLink class="button button-dark" to="/services">返回服务总览</RouterLink></main>
</template>
