<template>
  <div>
    <ThreeCol>
      <template #left>
        <q-img ratio="1" src="img/preview.jpg" />
      </template>

      <template #middle>
        <q-img ratio="1" src="img/preview.jpg" />
      </template>

      <template #right>
        <q-img ratio="1" src="img/preview.jpg" />
      </template>
    </ThreeCol>
  </div>
</template>

<script setup>
import ThreeCol from './ThreeCol.vue'
</script>

<style lang="scss" scoped></style>
