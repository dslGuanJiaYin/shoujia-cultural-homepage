<script setup lang="ts">
import { CircleArrowOutUpRight } from 'lucide-vue-next'
import { services } from '../data/content'
</script>

<template>
  <section id="services" class="service-section section-dark">
    <div class="shell service-layout">
      <div class="service-intro">
        <p class="eyebrow eyebrow-green">WHAT WE DO</p>
        <h2>从一个想法，<br /><span>到一件被带走的作品。</span></h2>
        <p class="service-lead">首佳是一支跨越策划、设计和供应链的文创团队。我们相信，每件被带走的物品，都应该带着一段可被记住的文化。</p>
        <RouterLink class="text-button text-button-light" to="/services">
          了解更多 <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <div class="service-list">
        <RouterLink v-for="service in services" :key="service.number" class="service-row" :to="`/services/${service.slug}`">
          <span class="service-number">{{ service.number }}</span>
          <div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.body }}</p>
          </div>
          <CircleArrowOutUpRight class="service-arrow" :size="22" stroke-width="1.3" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
