<template>
  <div class="container document">
    <h1>Document</h1>
    <section class="section section-2">
      <h3>Install</h3>
      <div class="content">
        <pre class="code">npm install vue-signature-simple</pre>
      </div>
      <h3>Usage</h3>
      <div class="content">
        <h4>main.js</h4>
        <pre class="code">
<span class="keyword">import</span> VueSignature <span class="keyword">from</span> <span class="string">'vue-signature-simple'</span>;
Vue.use(VueSignature);
</pre>
        <h4 style="margin-top: 1em;">Attributes example</h4>
        <pre>
<span class="tag">&lt;vue-signature ref=</span><span class="string">"s1"</span><span class="tag"> width=</span><span class="string">"400"</span><span class="tag"> /&gt;</span>
<span class="tag">&lt;vue-signature ref=</span><span class="string">"s2"</span><span class="tag"> /&gt;</span>
</pre>
        <p class="help">The ref attribute can distinguish multiple signature components</p>
        <h4 style="margin-top: 1em;">Methods example</h4>
        <pre><span class="keyword">this</span>.$refs.s1.clear()</pre>
      </div>

      <h3 id="s0">Attributes</h3>
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

      <h3 id="s-1">Methods</h3>

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
    font-size: 34px;
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
