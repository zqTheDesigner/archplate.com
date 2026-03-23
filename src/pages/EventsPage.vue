<template>
  <div>
    <div hidden>
      <h5 class="text-center">Up Coming Events</h5>
      <div></div>
      <hr />
    </div>
    <div>
      <h5 class="text-center">Past Events</h5>
      <TwoColTextImg
        v-for="(event, idx) in events"
        :key="idx"
        :title="event.title"
        :subtitle="event.subtitle"
        :text="event.info"
        :image-src="event.picture"
      />
    </div>
  </div>
</template>

<script setup>
import TwoColTextImg from 'src/components/TwoColTextImg.vue'
import events from '../data/events.js'
</script>

<style lang="scss" scoped></style>
