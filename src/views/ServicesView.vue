<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import { services } from '../data/content'
</script>

<template>
  <main class="inner-page services-page">
    <PageHero kicker="WHAT WE DO" title="从一个想法，到一件被带走的作品。" description="首佳是一支跨越文化研究、IP 策划、创意设计和供应链执行的文创团队，为品牌、城市与机构提供完整的定制服务。" image="/assets/project-cpox-booth.jpg" image-alt="CPOX 乡村咖啡节现场展位" />
    <section class="inner-section service-directory">
      <div class="shell">
        <div class="section-heading compact-heading"><div><p class="eyebrow eyebrow-ink">ONE COMPLETE PATH</p><h2>每一步，<em>都通向落地。</em></h2></div><p class="section-heading-note">点击“了解更多”，查看每项服务如何从文化洞察走向真实交付。</p></div>
        <div class="service-directory-list"><RouterLink v-for="service in services" :key="service.slug" class="service-directory-row" :to="`/services/${service.slug}`"><span class="service-number">{{ service.number }}</span><div><h3>{{ service.title }}</h3><p>{{ service.body }}</p></div><ArrowUpRight :size="22" aria-hidden="true" /></RouterLink></div>
      </div>
    </section>
    <section class="process-band section-dark"><div class="shell process-band-inner"><p class="eyebrow eyebrow-green">HOW WE DELIVER</p><h2>把复杂的事情，<br /><em>交给一条清晰的路径。</em></h2><div class="process-steps"><span>理解文化</span><i></i><span>建立概念</span><i></i><span>验证样品</span><i></i><span>稳定交付</span></div></div></section>
  </main>
</template>
