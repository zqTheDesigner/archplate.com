<template>
  <div>
    <LandingBanner />
    <!-- <TwoColTextImg /> -->
    <div>
      <div>
        <div></div>
        <p class="q-mx-auto">
          ArchPlate is a Singapore-based printmaking studio founded by etching artist
          Zhang Qiao. We bring together artistic practice, material research, and education to
          develop safer, more accessible, and creatively expressive approaches to etching.
        </p>

        <p class="q-mx-auto">
          Our work focuses on electro-etching and experimental printmaking processes. Through
          sustained studio research, we explore how contemporary tools and materials can extend the
          possibilities of etching while remaining connected to its traditional foundations.
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
        class="q-my-xl"
      />
      <!-- <ThreeColImages :img1="artists[0].picture" class="gt-sm" /> -->
      <div class="flex column items-center q-mb-xl">
        <p>
          From introductory experiences to advanced technical courses, our workshops make etching
          approachable for artists, students, educators, beginners, and wider communities.
          Participants learn through hands-on plate-making, electro-etching, and printmaking in a
          supportive studio environment.
        </p>

        <p>
          ArchPlate’s work extends beyond the studio through exhibitions, university teaching,
          artist talks, educational programmes, and collaborative projects. By connecting
          printmaking with materials, technology, history, and cultural research, we approach
          technique as both a creative process and a form of inquiry.
        </p>

        <p>
          Rather than replacing conventional etching, ArchPlate develops new methods that coexist
          with established practices. Our aim is to support knowledge exchange and contribute to a
          more accessible, responsible, and connected printmaking ecosystem in Singapore.
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
import { upcoming_events as events } from 'src/data/events'
</script>

<style lang="scss" scoped></style>
