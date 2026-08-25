<template>
  <div>
    <TwoCol :reverse="isReversed">
      <template #[textSlot]>
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

      <template #[imageSlot]>
        <q-img :src="'img/' + imageSrc" style="max-height: 300px" />
      </template>
    </TwoCol>
  </div>
</template>

<script setup>
import TwoCol from './TwoCol.vue'
import { defineProps, computed } from 'vue'

const props = defineProps({
  title: { default: 'Title' },
  subtitle: { default: '' },
  text: {
    default: 'To use JavaScript Standard Style please install JavaScript Standard Style by running',
  },
  imageSrc: { default: '/preview.jpg' },
  ctaLink: { default: '' },
  ctaText: { default: 'CTA Button' },
  order: { default: null },
})

const isReversed = computed(() => {
  return props.order !== null && props.order % 2 !== 0
})

const textSlot = computed(() => (isReversed.value ? 'left' : 'right'))
const imageSlot = computed(() => (isReversed.value ? 'right' : 'left'))
</script>

<style lang="scss" scoped></style>
