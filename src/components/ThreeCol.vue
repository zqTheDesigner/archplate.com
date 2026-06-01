<template>
  <div class="q-mx-auto flex row-md col items-center justify-between q-pa-md">
    <div class="col-md q-ma-sm row items-center justify-center fit">
      <slot name="left"></slot>
    </div>
    <div class="col-md q-ma-sm row items-center justify-center fit">
      <slot name="middle"></slot>
    </div>
    <div class="col-md q-ma-sm row items-center justify-center fit">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
