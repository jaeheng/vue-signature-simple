<template>
  <div class="vue-signature" :style="{ width: width + 'px', height: height + 'px' }">
    <canvas
      :id="id"
      :width="width"
      :height="height"
      @mousedown.prevent="mouseDown"
      @mouseup.prevent="mouseUp"
      @mouseout.prevent="mouseUp"
      @mousemove.prevent="mouseMove"
      @touchstart.prevent="mouseDown"
      @touchmove.prevent="mouseMove"
      @touchend.prevent="mouseUp"
      @touchcancel.prevent="mouseUp">
      Your browser doesn't support canvas
    </canvas>
  </div>
</template>

<script>
/**
 * random string
 * @param num string length
 * @returns {string}
 */
function randomString (num) {
  const str = '82gwp7a9e0tzvsqrjy3kubif6l5cnodxhm41'
  const arr = str.split('')

  let randomString = ''
  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * str.length)
    randomString += arr[index]
  }
  return randomString
}

export default {
  name: 'vue-signature',
  emits: ['change'],
  props: {
    height: {
      default: 100
    },
    width: {
      default: 300
    },
    strokeColor: {
      default: 'black',
      type: String
    },
    strokeSize: {
      default: 2
    }
  },
  data () {
    return {
      id: 'vue-signature-' + randomString(5),
      isMouseDown: false,
      lastLocation: {
        x: 0,
        y: 0
      },
      log: [],
      empty: true
    }
  },
  methods: {
    /**
     * initialization
     */
    init () {
      this.canvas = document.getElementById(this.id)
      this.context = this.canvas.getContext('2d')
    },
    /**
     * Clear canvas
     */
    clear () {
      this.context.clearRect(0, 0, this.width, this.height)
      this.empty = true
    },
    /**
     * coordinate transformation
     * @param x
     * @param y
     * @returns {{x: number, y: number}}
     */
    coordinateTransfer (x, y) {
      const box = this.canvas.getBoundingClientRect()
      return {
        x: Math.round(x - box.left),
        y: Math.round(y - box.top)
      }
    },
    /**
     * Start writing
     * @param e
     */
    mouseDown (e) {
      const clientX = e.clientX || e.changedTouches[0].clientX
      const clientY = e.clientY || e.changedTouches[0].clientY
      this.isMouseDown = true
      this.lastLocation = this.coordinateTransfer(clientX, clientY)
    },
    /**
     * Pause writing
     * @param e
     */
    mouseUp (e) {
      this.isMouseDown = false
    },
    /**
     * Writing
     * @param e
     */
    mouseMove (e) {
      if (this.isMouseDown) {
        const clientX = e.clientX || e.changedTouches[0].clientX
        const clientY = e.clientY || e.changedTouches[0].clientY
        const currentLocation = this.coordinateTransfer(clientX, clientY)
        const context = this.context
        const lastLocation = this.lastLocation
        // draw
        context.beginPath()
        context.moveTo(lastLocation.x, lastLocation.y)
        context.lineTo(currentLocation.x, currentLocation.y)
        context.strokeStyle = this.strokeColor
        context.lineWidth = Number(this.strokeSize)
        context.lineCap = 'round'
        context.lineJoin = 'round'
        context.stroke()
        this.lastLocation = currentLocation
        this.empty = false
      }
      this.$emit('change', this.getSignature())
    },
    /**
     * Get Base64 data of signature image
     * @param format
     * 1. image/png (default)
     * 2. image/jpeg
     * 3. image/svg+xml
     * @returns {string}
     */
    getSignature (format = 'image/png') {
      return this.canvas.toDataURL(format, 1)
    },
    /**
     * is empty ?
     * @returns {boolean}
     */
    isEmpty () {
      return this.empty
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
.vue-signature canvas {
  display: block;
  background: #efefef;
}
</style>
