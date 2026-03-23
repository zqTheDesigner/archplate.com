<template>
  <div style="max-width: 1200px" class="q-mx-auto">
    <q-img src="img/preview.jpg" style="max-height: 360px" />

    <div>
      <q-tabs v-model="tab" inline-label class="q-my-lg bg-white text-black">
        <q-tab name="about" label="About" no-caps />
        <q-tab name="statement" label="Statement" no-caps />
        <q-tab name="exhibitions" label="Exhibitions" no-caps />
        <q-tab name="works" label="Works" no-caps />
        <q-tab name="media" label="Media" no-caps />
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="about"> </q-tab-panel>
        <q-tab-panel name="statement"> </q-tab-panel>
        <q-tab-panel name="exhibitions">
          <div v-for="(exhibition, exhibitionk) in qiao.exhibitions" :key="exhibitionk">
            {{ exhibition.title }}
          </div>
        </q-tab-panel>
        <q-tab-panel name="works"> </q-tab-panel>
        <q-tab-panel name="media"> </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { qiao } from 'src/data/qiao'
const tab = ref('about')
</script>

<style lang="scss" scoped></style>
