<template>
  <div>
    <a :href="href" flat :target="href.includes('http') ? '_blank' : '_self'">
      <q-img ratio="1.6" :src="'img/' + src" style="width: 320px">
        <div v-if="title" class="absolute-bottom-left full-width text-p text-white flex">
          {{ title }}
        </div>
      </q-img>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({ src: { default: '/preview.jpg' }, title: { default: '' }, href: {} })
</script>

<style lang="scss" scoped></style>
