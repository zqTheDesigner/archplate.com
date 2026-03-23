<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <MainHeader />
    </q-header>

    <q-page-container
      style="min-height: calc(100vh - 250px) !important"
      class="q-mt-lg flex justify-center items-center"
    >
      <router-view style="max-width: 1200px; width: 100%" />
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script setup>
import MainFooter from 'src/components/MainFooter.vue'
import MainHeader from 'src/components/MainHeader.vue'
</script>
