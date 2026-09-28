<script setup lang="ts">
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, UserRound } from 'lucide-vue-next'
import { contactDetails } from '../data/contact'
</script>

<template>
  <section id="contact" class="contact-section section-dark">
    <div class="shell contact-layout">
      <div class="contact-copy">
        <p class="eyebrow eyebrow-green">START A CONVERSATION</p>
        <h2>你的下一件<br /><em>文化作品，</em><br />从这里开始。</h2>
        <p>无论是城市 IP、品牌联名、企业礼赠，还是一个刚刚冒出来的好点子，都可以和我们聊聊。</p>
        <RouterLink class="button button-green" to="/contact">
          预约一次初聊 <ArrowUpRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
      <div class="contact-details">
        <div class="contact-line"><UserRound :size="18" stroke-width="1.5" aria-hidden="true" /><span><small>联系人</small><strong>{{ contactDetails.name }}</strong></span></div>
        <div class="contact-line"><Phone :size="18" stroke-width="1.5" aria-hidden="true" /><span><small>手机</small><a :href="`tel:${contactDetails.phone}`">{{ contactDetails.phone }}</a></span></div>
        <div class="contact-line"><Mail :size="18" stroke-width="1.5" aria-hidden="true" /><span><small>邮箱</small><a :href="`mailto:${contactDetails.email}`">{{ contactDetails.email }}</a></span></div>
        <div class="contact-line"><MessageCircle :size="18" stroke-width="1.5" aria-hidden="true" /><span><small>微信号</small><strong>{{ contactDetails.wechat }}</strong></span></div>
        <div class="contact-line"><MapPin :size="18" stroke-width="1.5" aria-hidden="true" /><span><small>工作室</small><strong>广东中山 · 首佳文创工作室</strong></span></div>
        <div class="contact-orbit" aria-hidden="true"><span>SHOUJIA<br />CULTURE</span></div>
      </div>
    </div>
  </section>
</template>
