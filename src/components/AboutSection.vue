<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="about-section section-light">
    <div class="shell about-grid">
      <div class="about-copy">
        <p class="eyebrow eyebrow-ink">ABOUT SHOUJIA</p>
        <h2>把城市的故事，<br /><em>做成生活里的小小纪念。</em></h2>
        <p class="about-lead">首佳文创成立于 2015 年，专注于文旅 IP 衍生品开发、品牌联名与企业礼赠。我们以文化为起点，用一站式的策划、设计和供应链能力，把抽象的情感变成真实可触的物件。</p>
        <p class="about-lead muted">从中山城市精神到品牌的日常温度，我们愿意花时间理解每一份委托背后的来处，再用更年轻、更有趣的方式，让它走进人们的生活。</p>
        <RouterLink class="text-button text-button-dark" to="/about">深入了解首佳 <ArrowUpRight :size="16" aria-hidden="true" /></RouterLink>
      </div>
      <div class="about-visual">
        <div class="about-image-frame">
          <img src="/assets/project-copper-relief.jpg" alt="首佳文创铜浮雕城市地图作品" />
          <div class="image-caption">
            <span>城市文化衍生品</span>
            <strong>一座城市，<br />可以被握在手里。</strong>
          </div>
        </div>
        <div class="about-stamp">CULTURE<br /><span>IN OBJECT</span></div>
      </div>
    </div>
  </section>
</template>
