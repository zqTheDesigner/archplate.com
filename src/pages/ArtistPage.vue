<template>
  <div>
    <div style="max-width: 800px" class="q-mx-auto">
      <div>
        <div class="flex row items-center no-wrap">
          <!-- <q-img src="preview.jpg" ratio="1" style="max-width: 200px" /> -->

          <!--
          !!! IMPORTANT !!!
          Due to some reason, the image below
          will NOT displaying in dev mode, just follow the existing path
          it will display in production
          -->

          <q-img
            :src="'/img/' + artist.profile"
            style="width: 200px; border-radius: 200px"
            ratio="1"
          />

          <!-- !!! IMPORTANT ABOVE !!! -->

          <div class="q-mx-md">
            <h4 class="q-mb-xs">{{ artist.name }}</h4>
            <p>{{ artist.position }}</p>
          </div>
        </div>
        <h6>Bio</h6>
        <p>{{ artist.about }}</p>
        <h6>Selected Works</h6>
        <div>
          <ImageGallery :images="artist.works" />
        </div>
        <div v-if="artist.upcoming_exhibitions">
          <h6>Up Coming Exhibitions</h6>
        </div>
        <h6>Exhibtions</h6>
        <div v-for="(exhibition, idx) in artist.exhibitions" :key="idx">{{ exhibition.title }}</div>
        <h6>Media</h6>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { artist, setArtistByHandle } from 'src/stores/dataStore'
import { onMounted } from 'vue'
import ImageGallery from 'src/components/ImageGallery.vue'
const route = useRoute()
const artistHandle = route.params.artistHandle

onMounted(() => {
  setArtistByHandle(artistHandle)
})
</script>

<style lang="scss" scoped></style>
