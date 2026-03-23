<template>
  <div>
    <ThreeCol>
      <template #left>
        <q-img ratio="1" :src="img1" width="260px" />
      </template>

      <template #middle>
        <q-img ratio="1" :src="img2" width="260px" />
      </template>

      <template #right>
        <q-img ratio="1" :src="img3" width="260px" />
      </template>
    </ThreeCol>
  </div>
</template>

<script setup>
import ThreeCol from './ThreeCol.vue'
import { defineProps } from 'vue'

defineProps({
  img1: { default: 'img/preview.jpg' },
  img2: { default: 'img/preview.jpg' },
  img3: { default: 'img/preview.jpg' },
})
</script>

<style lang="scss" scoped></style>
