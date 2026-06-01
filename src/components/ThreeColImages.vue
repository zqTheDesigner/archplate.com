<template>
  <div>
    <ThreeCol>
      <template #left>
        <ImgLink :src="img1" :title="title1" :href="href1" />
      </template>

      <template #middle>
        <ImgLink :src="img2" :title="title2" :href="href2" />
      </template>

      <template #right>
        <ImgLink :src="img3" :title="title3" :href="href3" />
      </template>
    </ThreeCol>
  </div>
</template>

<script setup>
import ThreeCol from './ThreeCol.vue'
import ImgLink from './ImgLink.vue'
import { defineProps } from 'vue'

defineProps({
  img1: { default: 'preview.jpg' },
  img2: { default: 'preview.jpg' },
  img3: { default: 'preview.jpg' },
  title1: {},
  title2: {},
  title3: {},
  href1: {},
  href2: {},
  href3: {},
})
</script>

<style lang="scss" scoped></style>
