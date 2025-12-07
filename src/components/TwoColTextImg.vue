<template>
  <div>
    <TwoCol>
      <template #left>
        <h5 class="q-my-sm">Title</h5>
        <p>
          To use JavaScript Standard Style please install JavaScript Standard Style by running 'npm
          install standard' in the workspace folder Website or globally using 'npm install -g
          standard'. You need to reopen the workspace after installing JavaScript Standard Style.
        </p>
        <q-btn style="max-width: 260px" class="q-mx-auto" label="CTA Button" rounded outline />
      </template>

      <template #right>
        <q-img src="img/preview.jpg" />
      </template>
    </TwoCol>
  </div>
</template>

<script setup>
import TwoCol from './TwoCol.vue'
</script>

<style lang="scss" scoped></style>
