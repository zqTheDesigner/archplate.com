<template>
  <div>{{ artist }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { artist, setArtistByHandle } from 'src/stores/dataStore'
import { onMounted } from 'vue'
const route = useRoute()
const artistHandle = route.params.artistHandle

onMounted(() => {
  setArtistByHandle(artistHandle)
})
</script>

<style lang="scss" scoped></style>
