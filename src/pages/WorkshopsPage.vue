<template>
  <div>
    <div class="flex no-wrap column justify-center">
      <div style="border-radius: 0.5rem" class="bg-amber-3">
        <p class="q-ma-md text-center">
          <b
            >For workshop / event appointment, kindly contact Qiao via Email or WhatsApp number
            below</b
          >
        </p>
      </div>
      <div class="text-center">
        <h6 class="q-mb-md">Email: <b>qiao@archplate.com</b></h6>
        <h6 class="q-ma-none">Call: <b>+65 90697 196</b></h6>
      </div>
    </div>

    <hr />

    <TwoColTextImg
      v-for="(workshop, index) in workshops"
      :key="index"
      :order="index"
      :title="workshop.title"
      :subtitle="workshop.subtitle"
      :text="workshop.info"
      :image-src="workshop.picture"
      :cta-link="workshop.link"
      :cta-text="workshop.cta_text"
    />
  </div>
</template>

<script setup>
import TwoColTextImg from 'src/components/TwoColTextImg.vue'
import workshops from '../data/workshops'
</script>

<style lang="scss" scoped></style>
