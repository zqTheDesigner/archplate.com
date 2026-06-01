<template>
  <div class="bg-black text-white text-center">
    <TwoCol>
      <template #left>
        <div>
          <h5>ArchPlate</h5>
          <p>Email: qiao@archplate.com</p>
          <p>Call: +65 9069 7106</p>

          <div>
            <a class="text-white" traget="_blank" href="https://instagram.com/archplatesg"
              >IG: @archplatesg</a
            >
            /
            <a class="text-white" target="_blank" href="https://xhslink.com/m/7yfqrPxwHNO"
              >小红书: 桥版画</a
            >
          </div>
        </div>
      </template>
      <template #right>
        <div>
          <!-- <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form> -->

          <!-- Use @submit.prevent so the page doesn't refresh -->
          <q-form name="contact" @submit.prevent="handleSubmit">
            <!-- CRITICAL: This tells Netlify which form is being submitted -->
            <input type="hidden" name="form-name" value="contact" />

            <q-input
              v-model="form.name"
              name="name"
              label="Name"
              flat
              class="bg-white q-mb-sm"
              dense
            />
            <q-input
              v-model="form.email"
              name="email"
              label="Email"
              type="email"
              class="bg-white q-mb-sm"
              dense
            />

            <q-btn type="submit" label="Send" color="white" class="text-black" />
          </q-form>
        </div>
      </template>
    </TwoCol>
  </div>
</template>

<script setup>
import TwoCol from './TwoCol.vue'
import { ref } from 'vue'
const form = ref({
  name: '',
  email: '',
})

const handleSubmit = async () => {
  try {
    const body = new URLSearchParams({
      'form-name': 'contact', // Must match your form name attribute
      ...form.value,
    }).toString()

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })

    alert('Form submitted successfully!')
  } catch (error) {
    alert('Error submitting form')
    console.log(error)
  }
}
</script>

<style lang="scss" scoped></style>
