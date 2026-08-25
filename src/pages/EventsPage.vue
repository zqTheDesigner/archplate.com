<template>
  <div>
    <div v-if="upcoming_events.length > 0">
      <h5 class="text-center">Upcoming / Ongoing Events</h5>
      <div>
        <TwoColTextImg
          v-for="(event, idx) in upcoming_events"
          :key="idx"
          :order="idx"
          :title="event.title"
          :subtitle="event.subtitle"
          :text="event.info"
          :image-src="event.picture"
          :cta-link="event.link"
          :cta-text="event.cta_text"
        />
      </div>
    </div>
    <div>
      <h5 class="text-center">Past Events</h5>
      <TwoColTextImg
        v-for="(event, idx) in past_events"
        :key="idx"
        :order="idx"
        :title="event.title"
        :subtitle="event.subtitle"
        :text="event.info"
        :image-src="event.picture"
        :cta-link="event.link"
        cta-text="More"
      />
    </div>
  </div>
</template>

<script setup>
import TwoColTextImg from 'src/components/TwoColTextImg.vue'
import { past_events, upcoming_events } from '../data/events.js'
</script>

<style lang="scss" scoped></style>
