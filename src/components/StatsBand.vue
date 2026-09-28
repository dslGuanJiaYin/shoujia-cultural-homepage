<script setup lang="ts">
const stats = [
  { value: '10+', label: '年文创项目经验' },
  { value: '200+', label: '合作客户与品牌' },
  { value: '100%', label: '从策划到落地交付' },
  { value: '∞', label: '关于文化的想象力' },
]
</script>

<template>
  <section class="stats-band" aria-label="首佳文创服务数据">
    <div class="shell stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-item">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>
