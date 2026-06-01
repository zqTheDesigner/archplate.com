<template>
  <div>
    <TwoCol>
      <template #right>
        <div class="flex column">
          <h5 class="q-my-sm">{{ title }}</h5>
          <p v-if="subtitle">-- {{ subtitle }}</p>
          <p>{{ text }}</p>
          <q-btn
            v-if="ctaLink"
            :href="ctaLink"
            style="max-width: 260px"
            class="q-mx-auto"
            :label="ctaText"
            rounded
            outline
            :target="ctaLink.includes('http') ? '_blank' : '_self'"
          />
        </div>
      </template>

      <template #left>
        <q-img :src="'img/' + imageSrc" style="max-height: 300px" />
      </template>
    </TwoCol>
  </div>
</template>

<script setup>
import TwoCol from './TwoCol.vue'
import { defineProps } from 'vue'

defineProps({
  title: { default: 'Title' },
  subtitle: { default: '' },
  text: {
    default: 'To use JavaScript Standard Style please install JavaScript Standard Style by running',
  },
  imageSrc: { default: '/preview.jpg' },
  ctaLink: { default: '' },
  ctaText: { default: 'CTA Button' },
})
</script>

<style lang="scss" scoped></style>
