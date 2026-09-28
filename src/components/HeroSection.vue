<script setup lang="ts">
import { ArrowDown, ArrowUpRight, Play } from 'lucide-vue-next'

function scrollToAbout() {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-image" role="img" aria-label="首佳文创 IP 角色在城市湖畔的场景">
      <img src="/assets/hero-mascot.jpg" alt="首佳文创 IP 角色在湖畔" />
    </div>
    <div class="hero-shade"></div>
    <div class="shell hero-content">
      <div class="hero-copy">
        <p class="eyebrow eyebrow-light">SHOUJIA CULTURE · SINCE 2015</p>
        <h1>让文化，拥有<br /><em>可以被带走的形状。</em></h1>
        <p class="hero-description">我们把地方记忆、品牌精神与当代审美，变成值得被收藏、分享和再次使用的文创作品。</p>
        <div class="hero-actions">
          <RouterLink class="button button-light" to="/contact">
            开始一个文创项目
            <ArrowUpRight :size="17" aria-hidden="true" />
          </RouterLink>
          <a class="play-link" href="https://www.xiaohongshu.com/explore/6aabddd800000000290172df?xsec_token=CBDqoRSVx1Unx0EK3Qa2ZqjHOSEnxWzgC0C0Lb96q9ucE=&xsec_source=h5_share" target="_blank" rel="noreferrer">
            <span class="play-icon"><Play :size="13" fill="currentColor" aria-hidden="true" /></span>
            看看首佳的小红书
          </a>
        </div>
      </div>
      <div class="hero-note">
        <span>01</span>
        <span>FROM IDEA<br />TO OBJECT</span>
      </div>
    </div>
    <button class="hero-scroll" type="button" aria-label="向下查看" @click="scrollToAbout">
      <span>SCROLL TO EXPLORE</span>
      <ArrowDown :size="15" aria-hidden="true" />
    </button>
  </section>
</template>
