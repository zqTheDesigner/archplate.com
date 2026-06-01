<template>
  <div>
    <LandingBanner />
    <!-- <TwoColTextImg /> -->
    <div>
      <div>
        <div></div>
        <p class="q-mx-auto">
          At ArchPlate, we approach etching as both an artistic practice and an evolving field of
          research—expanding how printmaking can be created, experienced, and understood today.
        </p>
      </div>
      <ThreeColImages
        :img1="events[0].picture"
        :title1="events[0].title"
        :href1="events[0].link"
        :img2="artists[0].picture"
        :title2="artists[0].name"
        :href2="artists[0].link"
        :img3="artists[1].picture"
        :title3="artists[1].name"
        :href3="artists[1].link"
      />
      <!-- <ThreeColImages :img1="artists[0].picture" class="gt-sm" /> -->
      <div class="flex column items-center">
        <p>
          Our work extends beyond image-making. It brings together studio practice, academic
          research, and material development to explore safer and more accessible approaches to
          etching. Through ongoing experimentation, we develop alternative processes that reduce the
          need for hazardous chemicals while opening new possibilities in mark-making and visual
          expression.
        </p>

        <p>
          At the same time, ArchPlate is committed to public engagement. Through workshops,
          educational programs, and collaborative projects, we aim to make printmaking more
          approachable—bridging the gap between traditional studio practices and wider audiences,
          including beginners, students, and communities.
        </p>

        <p>
          Rather than replacing conventional methods, ArchPlate contributes to the broader evolution
          of printmaking—offering new pathways that coexist with established practices, while
          shaping a more sustainable and accessible future for the medium.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LandingBanner from 'src/components/LandingBanner.vue'
// import TwoColTextImg from 'src/components/TwoColTextImg.vue'
import ThreeColImages from 'src/components/ThreeColImages.vue'
import artists from 'src/data/artists'
import {upcoming_events as events} from 'src/data/events'
</script>

<style lang="scss" scoped></style>
