import { computed, ref } from 'vue'
// import artists from 'src/data/artists'

import qiao from 'src/data/artists/qiao'

const artists = { zhang_qiao: qiao }

const artistRef = ref({})
const setArtist = (artist) => (artistRef.value = artist)
const setArtistByHandle = (handle) => {
  artistRef.value = artists[handle]
}
const artist = computed(() => artistRef.value)

export { artist, setArtist, setArtistByHandle }
