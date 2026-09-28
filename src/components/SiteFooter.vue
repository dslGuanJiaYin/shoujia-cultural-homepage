<script setup lang="ts">
import { ArrowUp, Instagram, Star } from 'lucide-vue-next'

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="site-footer">
    <div class="shell footer-top">
      <div class="footer-brand"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><strong>首佳文创</strong></div>
      <p>把文化，做成生活里值得留下的东西。</p>
      <div class="footer-links"><a href="https://www.xiaohongshu.com/explore/6aabddd800000000290172df?xsec_token=CBDqoRSVx1Unx0EK3Qa2ZqjHOSEnxWzgC0C0Lb96q9ucE=&xsec_source=h5_share" target="_blank" rel="noreferrer"><Instagram :size="16" /> 小红书</a><a href="/assets/shoujia-ip-brief.pdf" target="_blank" rel="noreferrer"><Star :size="16" /> 品牌手册</a></div>
    </div>
    <div class="shell footer-bottom"><span>© 2025 首佳文创 · SHOUJIA CULTURE</span><button type="button" aria-label="返回顶部" @click="scrollTop">BACK TO TOP <ArrowUp :size="14" /></button></div>
  </footer>
</template>
