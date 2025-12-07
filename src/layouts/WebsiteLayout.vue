<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <MainHeader />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script setup>
import MainFooter from 'src/components/MainFooter.vue'
import MainHeader from 'src/components/MainHeader.vue'
</script>
