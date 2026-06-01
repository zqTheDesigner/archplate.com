<template>
  <div class="row q-col-gutter-md">
    <div v-for="(image, idx) in images" :key="idx" class="col-xs-12 col-sm-6 col-md-4">
      <q-img
        :src="'/img/' + image.src"
        fit="contain"
        ratio="1"
        @click="() => ((selectedImg = image.src), (showPopup = true))"
      >
        <div v-if="image.title" class="absolute-bottom-left full-width text-p text-white flex">
          {{ image.title }}
        </div>
      </q-img>
    </div>
  </div>

  <!-- Popup Container -->
  <div class="fit">
    <q-dialog v-model="showPopup" backdrop-filter="blur(4px)">
      <!-- Container to ensure the image stays within 80% of screen -->
      <div
        style="max-width: 80vw; max-height: 80vh; width: 100%"
        @click="() => (showPopup = false)"
      >
        <q-img
          :src="'/img/' + selectedImg"
          fit="contain"
          initial-ratio="1"
          class="rounded-borders"
          style="max-width: 80vw; max-height: 80vh"
        />
      </div>
    </q-dialog>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
defineProps({ images: {} })
const selectedImg = ref('')
const showPopup = ref(false)
</script>

<style lang="scss" scoped></style>
