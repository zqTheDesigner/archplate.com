<template>
  <div class="page">
    <h1>Black Pixel Percentage Calculator</h1>

    ```
    <div class="controls">
      <label class="camera-btn">
        📷 Take Photo
        <input
          type="file"
          accept="image/*"
          capture="environment"
          @change="handleImageUpload"
          hidden
        />
      </label>

      <label class="camera-btn">
        🖼 Select Existing Image
        <input type="file" accept="image/*" @change="handleImageUpload" hidden />
      </label>

      <div class="slider-section">
        <div class="slider-header">
          <span>Threshold</span>
          <strong>{{ threshold }}</strong>
        </div>

        <input v-model="threshold" type="range" min="0" max="255" @input="processImage" />
      </div>

      <div class="stats">
        <div>
          Black Pixels:
          <strong>{{ blackPercentage.toFixed(2) }}%</strong>
        </div>

        <div>
          White Pixels:
          <strong>{{ whitePercentage.toFixed(2) }}%</strong>
        </div>
      </div>
    </div>

    <div class="preview-container">
      <div class="panel">
        <h3>Original Image</h3>
        <canvas ref="originalCanvas"></canvas>
      </div>

      <div class="panel">
        <h3>Binary Image</h3>
        <canvas ref="binaryCanvas"></canvas>
      </div>
    </div>
    ```
  </div>
</template>

<script setup>
import { ref } from 'vue'

const threshold = ref(128)

const blackPercentage = ref(0)
const whitePercentage = ref(100)

const originalCanvas = ref(null)
const binaryCanvas = ref(null)

const loadedImage = ref(null)

function handleImageUpload(event) {
  const file = event.target.files?.[0]

  if (!file) return

  const reader = new FileReader()

  reader.onload = (e) => {
    const img = new Image()

    img.onload = () => {
      loadedImage.value = img
      processImage()
    }

    img.src = e.target.result
  }

  reader.readAsDataURL(file)
}

function processImage() {
  if (!loadedImage.value) return

  const img = loadedImage.value

  const originalCtx = originalCanvas.value.getContext('2d')
  const binaryCtx = binaryCanvas.value.getContext('2d')

  const MAX_SIZE = 1200

  let width = img.width
  let height = img.height

  if (width > MAX_SIZE || height > MAX_SIZE) {
    const scale = Math.min(MAX_SIZE / width, MAX_SIZE / height)

    width = Math.round(width * scale)
    height = Math.round(height * scale)
  }

  originalCanvas.value.width = width
  originalCanvas.value.height = height

  binaryCanvas.value.width = width
  binaryCanvas.value.height = height

  originalCtx.clearRect(0, 0, width, height)
  binaryCtx.clearRect(0, 0, width, height)

  originalCtx.drawImage(img, 0, 0, width, height)

  const imageData = originalCtx.getImageData(0, 0, width, height)

  const data = imageData.data

  let blackPixels = 0
  const totalPixels = width * height

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]

    const gray = 0.299 * r + 0.587 * g + 0.114 * b

    if (gray < threshold.value) {
      data[i] = 0
      data[i + 1] = 0
      data[i + 2] = 0

      blackPixels++
    } else {
      data[i] = 255
      data[i + 1] = 255
      data[i + 2] = 255
    }
  }

  binaryCtx.putImageData(imageData, 0, 0)

  blackPercentage.value = (blackPixels / totalPixels) * 100

  whitePercentage.value = 100 - blackPercentage.value
}
</script>

<style lang="scss" scoped>
.page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.controls {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}

.camera-btn {
  display: inline-block;
  padding: 14px 20px;
  background: #2563eb;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
}

.slider-section {
  margin-bottom: 20px;

  input[type='range'] {
    width: 100%;
  }
}

.slider-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.stats {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  strong {
    color: #2563eb;
  }
}

.preview-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.panel {
  flex: 1;
  min-width: 320px;
  background: white;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #ddd;

  h3 {
    margin-top: 0;
  }
}

canvas {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  display: block;
}
</style>
