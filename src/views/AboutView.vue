<script setup lang="ts">
import { ArrowUpRight, Download } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
</script>

<template>
  <main class="inner-page about-page">
    <PageHero kicker="ABOUT SHOUJIA" title="把城市的故事，做成生活里的小小纪念。" description="首佳文创成立于 2015 年，专注于文旅 IP 衍生品开发、品牌联名与企业礼赠。我们以文化为起点，用一站式的策划、设计和供应链能力，把抽象的情感变成真实可触的物件。" image="/assets/studio-campus.jpg" image-alt="首佳文创工作室与园区环境" />
    <section class="inner-section about-story">
      <div class="shell inner-two-column">
        <div class="section-side-label"><span>01</span><strong>我们相信</strong></div>
        <div class="inner-copy">
          <h2>好的文创，不只是一个漂亮的东西。</h2>
          <p>它应该让人想起一个地方、一段关系或一种心情。首佳愿意从文化的来处开始，认真理解每一份委托背后的故事，再用更年轻、更有趣的方式，让它走进人们的生活。</p>
          <p>我们和品牌、景区、城市与年轻的创作者一起工作。策划、设计、打样、生产和交付不是被拆开的环节，而是一条从文化洞察走向真实体验的完整路径。</p>
          <RouterLink class="text-button text-button-dark" to="/services">查看我们如何工作 <ArrowUpRight :size="16" /></RouterLink>
        </div>
      </div>
    </section>
    <section class="inner-section about-gallery section-paper-deep">
      <div class="shell">
        <div class="section-heading compact-heading"><div><p class="eyebrow eyebrow-ink">OUR MATERIALS</p><h2>文化，应该有<br /><em>可以触摸的质地。</em></h2></div><p class="section-heading-note">从纯铜、织物、纸张到软胶，每种材料都在讲述不同的文化性格。</p></div>
        <div class="about-gallery-grid"><figure><img src="/assets/project-copper-process.jpg" alt="铜浮雕制作过程" /><figcaption>手工錾刻 · 时间留下的纹理</figcaption></figure><figure><img src="/assets/project-green-gift.jpg" alt="山水主题礼盒" /><figcaption>艺术礼盒 · 把山水带回家</figcaption></figure><figure><img src="/assets/award.jpg" alt="首佳文创获得合作认可" /><figcaption>合作与认可 · 让好作品被看见</figcaption></figure></div>
        <a class="document-link" href="/assets/shoujia-ip-brief.pdf" target="_blank" rel="noreferrer"><Download :size="17" /> 下载首佳文旅 IP 项目简介 <ArrowUpRight :size="15" /></a>
      </div>
    </section>
  </main>
</template>
