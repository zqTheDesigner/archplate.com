<template>
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
    <h4 class="text-center q-mb-sm">Studio Locations</h4>
    <hr />
    <TwoColTextImg
      title="ArchPlate@SengKang"
      subtitle="Location: 331C Anchorvale Street 14-573, S543331"
      text="By appointment only, kindly contact Qiao via Email of Whatsapp above"
      image-src="archplate_at_sengkang.jpg"
    />
    <TwoColTextImg
      title="ArchPlate@AGC"
      subtitle="Location: Emily Hill, 11 Upper Wilkie Road, Singapore 228120"
      text="Popup workshop available by appointments. Opening date to be confirmed"
      image-src="archplate_at_agc.jpeg"
    />
  </div>
</template>

<script setup>
import TwoColTextImg from 'src/components/TwoColTextImg.vue'
</script>

<style lang="scss" scoped></style>
