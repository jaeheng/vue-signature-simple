<template>
  <div id="app">
    <div class="container">
      <ul class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="https://github.com/jaeheng/vue-signature-simple" target="_blank">Github</a></li>
      </ul>

      <section class="section section-1">
        <h3 class="section-title">VueSignature demo</h3>
        <div class="row">
          <div class="col">
            <vue-signature
              ref="s1"
              :width="width"
              :height="height"
              :strokeSize="strokeSize"
              :strokeColor="strokeColor" />
            <p>签名板</p>
          </div>
          <div class="col">
            <img :src="signature" alt="signature" v-if="signature" class="signature">
            <div class="signature" :style="{ width: (parseInt(width) + 2) + 'px', height: (parseInt(height) + 2) + 'px' }" v-else></div>
            <p>获取的签名图片</p>
          </div>
        </div>
        <div class="btns">
          <button @click="deleteImg">清除内容</button>
          <button @click="isEmpty">是否为空</button>
          <button @click="getSignature">获取签名图片</button>
        </div>
      </section>
      <section class="section section-2">
        <h4>基础使用</h4>
        <div class="content">
<pre>
<code class="javascript">// install
npm install vue-signature-simple

// main.js
import VueSignature from 'vue-signature-simple'
Vue.use(VueSignature)

// .vue template
// ref属性可以区分多个签名组件
&lt;VueSignature ref="s1" /&gt;
</code>
</pre>
        </div>
        <h4>获取图片base64数据</h4>
        <div class="content">
          点击demo中的获取签名图片后，生成的签名图片img标签的src属性值就是签名的base64数据
<pre>
<code class="javascript">// .vue template
// s1是VueSignature组件的ref属性
// getSignature默认使用png格式生成图片base64数据,可选：
// 1. image/png (default)
// 2. image/jpeg
// 3. image/svg+xml
const base64Data = this.$refs.s1.getSignature()
const base64DataJpeg = this.$refs.s1.getSignature('image/jpeg')
</code>
</pre>
        </div>
        <h4>设置宽高</h4>
        <div class="content">
          宽: <input type="number" v-model="width">
          高: <input type="number" v-model="height">
          <p class="help">在demo处查看设置宽高后的签名版, 注意这里的width/height属性必须是数字</p>
<pre><code class="javascript">// 设置宽高
&lt;VueSignature ref="s1" :width="100" :height="200" /&gt;
</code></pre>
        </div>
        <h4>设置线条颜色</h4>
        <div class="content">
          颜色: <input type="text" v-model="strokeColor" @change="deleteImg">
          <p class="help">在demo处查看设置宽高后的签名版, 注意这里的strokeColor必须是英文、十六进制颜色值、rgba等正规颜色标识</p>
<pre><code class="javascript">// 设置线条颜色
&lt;VueSignature ref="s1" strokeColor="#f0f" /&gt;
&lt;VueSignature ref="s1" strokeColor="red" /&gt;
&lt;VueSignature ref="s1" strokeColor="rgb(255, 255, 0)" /&gt;
</code></pre>
        </div>
        <h4>设置线条宽度</h4>
        <div class="content">
          宽度: <input type="number" v-model="strokeSize" @change="deleteImg">
          <p class="help">在demo处查看设置宽高后的签名版, 注意这里的strokeSize必须是数字，建议2-10以内</p>
<pre><code class="javascript">// 设置线条宽度
&lt;VueSignature ref="s1" strokeSize="2" /&gt;
&lt;VueSignature ref="s1" :strokeColor="4" /&gt;
</code></pre>
        </div>
        <h4>清除内容</h4>
        <p class="help">清除内容使用函数 <code>clear()</code>， 清除功能在demo处查看</p>
        <div class="content">
<pre><code class="javascript">// 清除内容
this.$refs.s1.clear()
</code></pre>
        </div>
        <h4>判断图片内容是否为空</h4>
        <p class="help">判断图片内容是否为空使用函数 <code>isEmpty()</code>，判断功能在demo处查看</p>
        <div class="content">
<pre><code class="javascript">// 判断图片内容是否为空
this.$refs.s1.isEmpty()
</code></pre>
        </div>
      </section>
    </div>

    <div class="footer">
      @ <a href="https://github.com/jaeheng" target="_blank">jaeheng</a>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/doc";
</style>

<script>
import VueSignature from './../index'

export default {
  name: 'App',
  components: {
    VueSignature
  },
  data () {
    return {
      signature: '',
      strokeColor: '',
      strokeSize: 2,
      width: 400,
      height: 150
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
    }
  },
  mounted () {
    window.hljs.initHighlightingOnLoad()
  }
}
</script>
