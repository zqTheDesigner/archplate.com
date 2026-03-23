<template>
  <div>
    <div v-for="(artist, k) in artists" :key="k">
      <TwoColTextImg
        :title="artist.name"
        :subtitle="artist.position"
        :text="artist.info"
        :cta-link="artist.link"
        :image-src="artist.picture"
        cta-text="More"
      />
      <!-- <router-link :to="'/artists/' + artist.handle">
        {{ artist.name }}
      </router-link> -->
    </div>
  </div>
</template>

<script setup>
import artists from 'src/data/artists'
import TwoColTextImg from 'src/components/TwoColTextImg.vue'
</script>

<style lang="scss" scoped></style>
