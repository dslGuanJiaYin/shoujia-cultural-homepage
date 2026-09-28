<script setup lang="ts">
import { shallowRef } from 'vue'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'

const submitted = shallowRef(false)
</script>

<template>
  <main class="inner-page contact-page">
    <PageHero kicker="START A CONVERSATION" title="你的下一件文化作品，从这里开始。" description="无论是城市 IP、品牌联名、企业礼赠，还是一个刚刚冒出来的好点子，都可以和我们聊聊。" image="/assets/project-cpox-signage.jpg" image-alt="首佳文创城市 IP 展陈现场" />
    <section class="inner-section contact-form-section"><div class="shell contact-page-layout"><div class="contact-page-details"><p class="eyebrow eyebrow-ink">CONTACT DETAILS</p><div class="contact-page-line"><Phone :size="18" /><span><small>咨询电话</small><strong>0760 8888 2015</strong></span></div><div class="contact-page-line"><Mail :size="18" /><span><small>项目邮箱</small><strong>hello@shoujia-culture.com</strong></span></div><div class="contact-page-line"><MapPin :size="18" /><span><small>工作室</small><strong>广东中山 · 首佳文创工作室</strong></span></div></div><div class="contact-page-form"><div v-if="submitted" class="contact-success"><p class="eyebrow eyebrow-ink">MESSAGE RECEIVED</p><h2>谢谢你的信任。</h2><p>我们会在 1 个工作日内回复你，期待和你一起把想法做成作品。</p><RouterLink class="text-button text-button-dark" to="/works">先看看案例 <ArrowUpRight :size="16" /></RouterLink></div><form v-else @submit.prevent="submitted = true"><label>怎么称呼<input type="text" placeholder="你的名字" required /></label><label>联系方式<input type="text" placeholder="手机号 / 微信 / 邮箱" required /></label><label>项目想法<textarea rows="5" placeholder="简单描述一下你的项目"></textarea></label><button class="button button-dark" type="submit">提交咨询 <ArrowUpRight :size="17" /></button></form></div></div></section>
  </main>
</template>
