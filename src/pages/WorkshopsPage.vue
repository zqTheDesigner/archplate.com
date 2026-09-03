<template>
  <div>
    <div class="flex no-wrap column justify-center">
      <div
        style="border-radius: 0.5rem"
        class="flex bg-amber-3 text-center justify-center"
      >
        <p class="q-ma-md" style="max-width: 600px">
          <b
            >For private workshop / event appointment, kindly contact Qiao via Email or
            WhatsApp number below</b
          >
        </p>
      </div>
      <div class="text-center">
        <h6 class="q-mb-md q-mt-md">
          Email:
          <b
            ><a
              href="mailto:qiao@archplate.com"
              class="text-dark"
              style="text-decoration: none"
              >qiao@archplate.com</a
            ></b
          >
        </h6>
        <h6 class="q-ma-none">
          Call:
          <b
            ><a href="tel:+6590697196" class="text-dark" style="text-decoration: none"
              >+65 9069 7196</a
            ></b
          >
        </h6>
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
import TwoColTextImg from "src/components/TwoColTextImg.vue"
import workshops from "../data/workshops"
</script>

<style lang="scss" scoped></style>
