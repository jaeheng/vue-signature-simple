<template>
  <div class="home">
    <div class="container">
      <div class="section-1">
        <h3 class="title">Vue-Signature-Simple</h3>
        <p class="sub-title">A electronic signature component by Vue.js</p>
        <div class="row">
          <div class="col">
            <vue-signature
              ref="s1"
              :width="width"
              :height="height"
              :stroke-size="strokeSize"
              :stroke-color="strokeColor" />
            <ul class="colors">
              <li
                class="color"
                :style="{ background: item }"
                @click="changeColor(item)"
                v-for="item in colors"
                :key="item"
                :class="{ active: strokeColor === item }"></li>
            </ul>
          </div>
          <div class="col">
            <img :src="signature" alt="signature" v-if="signature" class="signature">
            <div class="signature" :style="{ width: (parseInt(width) + 2) + 'px', height: (parseInt(height) + 2) + 'px' }" v-else></div>
            <p style="margin-top: 5px;">signature image</p>
          </div>
        </div>
        <div class="btns">
          <button @click="deleteImg">clear</button>
          <button @click="isEmpty">pad is empty?</button>
          <button @click="getSignature">get signature</button>
        </div>
      </div>

      <div class="section-2">
        <h4>Install</h4>
        <div class="content">
          <pre class="code">> npm install vue-signature-simple</pre>
        </div>
        <h4>Usage</h4>
        <div class="content">
          <pre class="code">

// main.js
import VueSignature from 'vue-signature-simple'
Vue.use(VueSignature)

// Attributes example
// The ref attribute can distinguish multiple signature components
&lt;vue-signature ref="s1" /&gt;
&lt;vue-signature ref="s2" /&gt;

// Methods example
this.$refs.s1.clear()
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
// section-1
.section-1 {
  padding: 70px 0;
  margin-bottom: 30px;
  text-align: center;
  .title {
    font-size: 40px;
    font-family: cursive;
    color: #3860da;
  }
  .sub-title {
    font-size: 13px;
    color: #ccc;
  }
  .vue-signature {
    margin: 0 auto;
  }
  .signature {
    border: 1px solid #efefef;
    display: block;
    margin: 0 auto;
  }
}

</style>
<script>
import VueSignature from '../../index'
export default {
  name: 'App',
  components: {
    VueSignature
  },
  data () {
    return {
      signature: '',
      strokeColor: '#000',
      strokeSize: 2,
      width: 400,
      height: 150,
      colors: ['#000', '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF', '#fafafa']
    }
  },
  methods: {
    getSignature () {
      this.signature = this.$refs.s1.getSignature()
    },
    deleteImg () {
      this.$refs.s1.clear()
      this.signature = ''
    },
    isEmpty () {
      if (this.$refs.s1.isEmpty()) {
        alert('内容为空')
      } else {
        alert('已有签名内容')
      }
    },
    changeColor (color) {
      this.strokeColor = color
    }
  }
}
</script>
