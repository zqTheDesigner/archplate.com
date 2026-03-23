import { computed, ref } from 'vue'
import artists from 'src/data/artists'

const artistRef = ref({})
const setArtist = (artist) => (artistRef.value = artist)
const setArtistByHandle = (handle) => {
  artistRef.value = artists.filter((artist) => artist.handle == handle)[0]
}
const artist = computed(() => artistRef.value)

export { artist, setArtist, setArtistByHandle }
