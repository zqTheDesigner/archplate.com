<template>
<div style="border-bottom: 1px solid #eee;">
  <div
    class="two-col q-mx-auto flex row-md col items-center justify-center q-pa-md"
    :class="{ 'two-col--reverse': reverse }"
    style="max-width: 1000px"
  >
    <div class="two-col__left col-md q-mx-md q-ma-sm row items-center justify-center fit">
      <slot name="left" />
    </div>

    <div class="two-col__right col-md q-mx-md q-ma-sm row items-center justify-center fit">
      <slot name="right" />
    </div>
  </div>
  </div>
</template>

<script setup>
defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
/* Quasar's md breakpoint */
@media (max-width: 1024px) {
  .two-col--reverse {
    .two-col__left {
      order: 2;
    }

    .two-col__right {
      order: 1;
    }
  }
}
</style>
