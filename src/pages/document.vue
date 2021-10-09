<template>
  <div class="container document">
    <h1>API</h1>
    <section class="section section-2">

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
          <td>width of image (px)</td>
          <td>Number</td>
          <td>-</td>
          <td>300</td>
        </tr>
        <tr>
          <td>height</td>
          <td>height of image (px)</td>
          <td>Number</td>
          <td>-</td>
          <td>100</td>
        </tr>
        <tr>
          <td>stroke-color</td>
          <td>color of line</td>
          <td>String</td>
          <td>eg: #000 / black / rgb(0, 0, 0) / rgba(0, 0, 0, .5)</td>
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
