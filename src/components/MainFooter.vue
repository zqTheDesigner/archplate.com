<template>
  <div class="bg-black text-white text-center">
    <TwoCol>
      <template #left>
        <div>
          <h5>ArchPlate</h5>
          <p>Email: qiao@archplate.com</p>
          <p>Call: +65 9069 7106</p>

          <div>IG / Xiaohong shu / YT</div>
        </div>
      </template>
      <template #right>
        <div>
          <form name="contact" netlify>
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </template>
    </TwoCol>
  </div>
</template>

<script setup>
import TwoCol from './TwoCol.vue'
</script>

<style lang="scss" scoped></style>
