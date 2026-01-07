<template>
  <div
    class="main-header row q-py-lg no-wrap justify-between items-center"
    style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); z-index: 2"
  >
    <!-- Mobile Menu -->
    <div class="lt-md absolute">
      <q-btn icon="menu" flat @click="menuShow = !menuShow" />
      <q-menu v-model="menuShow" class="full-width q-pt-lg" fit>
        <div class="column bg-grey-1 text-center">
          <a
            v-for="(link, k) in links"
            :href="link.path"
            :key="k"
            class="q-py-md"
            style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)"
          >
            {{ link.label }}
            <q-badge
              color="orange"
              v-if="link.new"
              class="absolute"
              style="top: -10 !important; font-size: 10px"
            >
              New
            </q-badge>
          </a>
        </div>
      </q-menu>
    </div>

    <!-- Desktop Menu - Left -->
    <div class="gt-sm row col no-wrap items-center q-gutter-xl q-px-md">
      <a
        v-for="(link, k) in links.slice(0, Math.ceil(links.length / 2))"
        :href="link.path"
        :key="k"
      >
        {{ link.label }}
        <q-badge
          color="orange"
          v-if="link.new"
          class="absolute"
          style="top: -10 !important; font-size: 10px"
        >
          New
        </q-badge>
      </a>
    </div>

    <!-- Logo -->
    <div class="col text-center">
      <a href="/"><h5 class="q-my-none">Archplate</h5></a>
    </div>

    <!-- Desktop Menu - Right -->
    <div class="gt-sm row col items-center justify-end q-gutter-xl q-px-md">
      <a
        v-for="(link, k) in links.slice(Math.ceil(links.length / 2), links.length)"
        :href="link.path"
        :key="k"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { menus } from 'src/router/routes'
const links = menus
</script>

<style lang="css" global>
.q-menu {
  min-width: 100vw;
  box-shadow: none;
  z-index: 1;
}

.main-header a,
.q-menu a {
  color: grey;
  font-size: 16px;
  text-decoration: none;
}
</style>
