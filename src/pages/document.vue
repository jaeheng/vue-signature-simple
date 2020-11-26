<template>
  <div class="container document">
    <h1>Document</h1>
    <section class="section section-2">
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

      <h4 id="s0">Attributes</h4>
      <table class="table">
        <thead>
        <tr>
          <th>param</th>
          <th>explain</th>
          <th>type</th>
          <th>optional</th>
          <th>default</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>width</td>
          <td>width of image</td>
          <td>Number</td>
          <td>-</td>
          <td>300</td>
        </tr>
        <tr>
          <td>height</td>
          <td>height of image</td>
          <td>Number</td>
          <td>-</td>
          <td>100</td>
        </tr>
        <tr>
          <td>stroke-color</td>
          <td>color of line</td>
          <td>String</td>
          <td>Standard CSS color values</td>
          <td>black</td>
        </tr>
        <tr>
          <td>stroke-size</td>
          <td>size of line</td>
          <td>Number</td>
          <td>-</td>
          <td>2</td>
        </tr>
        </tbody>
      </table>

      <h4 id="s-1">Methods</h4>

      <table class="table">
        <thead>
        <tr>
          <th>Method Name</th>
          <th>Explain</th>
          <th>params</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>getSignature</td>
          <td>get base64 data of signature image</td>
          <td>
            format:
            <ul>
              <li>1. image/png (default)</li>
              <li>2. image/jpeg</li>
              <li>3. image/svg+xml</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>isEmpty</td>
          <td>Check whether the signature image is empty</td>
          <td>-</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>clear data of signature image</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<style lang="scss">
.document {
  h1 {
    margin-top: 1em;
    margin-bottom: 1em;
  }
}
</style>
<script>
export default {
  methods: {
    scrollToSx (id) {
      window.scrollTo(0, document.getElementById(id).offsetTop)
    }
  }
}
</script>
