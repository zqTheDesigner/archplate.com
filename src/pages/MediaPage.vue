<template>
  <div>
    <TwoColTextImg
      v-for="(m, idx) in media"
      :key="idx"
      :title="m.title"
      :subtitle="m.subtitle"
      :image-src="m.picture"
      :text="m.info"
      :cta-link="m.link"
      cta-text="Link"
    />
  </div>
</template>

<script setup>
import TwoColTextImg from 'src/components/TwoColTextImg.vue'
import media from '../data/media'
</script>

<style lang="scss" scoped></style>
