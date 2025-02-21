<template>
  <div class="row">
    <div class="col">
      <vue-signature-simple
          ref="vss"
          :width="width"
          :height="height"
          :stroke-size="strokeSize"
          :stroke-color="strokeColor"
          @change="getSignature"
          style="margin: 0 auto;"
      />
      <ul class="colors">
        <li
            class="color"
            :style="{ background: item }"
            @click="changeColor(item)"
            v-for="item in colors"
            :key="item"
            :class="{ active: strokeColor === item }"></li>
      </ul>
      <input type="text" v-model="strokeColor" class="input">
    </div>
    <div class="col">
      <img :src="signature" alt="signature" v-if="signature" class="signature">
      <div class="signature" :style="{ width: (parseInt(width) + 2) + 'px', height: (parseInt(height) + 2) + 'px' }" v-else></div>
      <p>Signature Image (base64)</p>
    </div>
  </div>
  <div class="btn">
    <button @click="deleteImg" class="primary">Clear</button>
    <button @click="isEmpty">is empty?</button>
  </div>
</template>

<style>
.row {
  display: flex;
  overflow: hidden;
  text-align: center;
}
.col {
  flex: 1;
}
.input {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 5px;
}
.signature {
  border: 1px dashed #ccc;
  display: block;
  margin: 0 auto;
}
.btn {
  text-align: center;
  margin-top: 20px;
}
.btn button {
  margin: 0 5px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, .1);
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, .1);
}
.btn button.primary {
  background: #3860da;
  color: #fff;
}
.btn button:hover {
  opacity: .7;
}
.colors {
  list-style: none;
  margin-top: 10px;
}
.colors li {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 4px dashed transparent;
  box-sizing: border-box;
  margin: 0 3px;
  border-radius: 2px;
  cursor: pointer;
}
.colors li.active {
  border-color: #f0f8fc;
}

@media screen and (max-width: 1024px) {
  .row {
    flex-direction: column;
  }
  .row .col {
    margin-bottom: 15px;
  }
}
</style>

<script setup>
import { ref, useTemplateRef } from 'vue';
import VueSignatureSimple from '../../src/components/vue-signature-simple.vue';
const width = ref(340);
const height = ref(150);
const strokeSize = ref(2);
const strokeColor = ref('#4b5cc4');
const signature = ref('');
const colors = ref(['#161823', '#3b2e7e', '#4b5cc4', '#4c8dae', '#c3272b', '#FF7F00', '#eacd76', '#40de5a', '#fafafa']);
const vssRef = useTemplateRef('vss');

function getSignature () {
  signature.value = vssRef.value.getSignature()
}
function changeColor (color) {
  strokeColor.value = color
}
function deleteImg () {
  vssRef.value.clear();
  signature.value = '';
}
function isEmpty () {
  if (vssRef.value.isEmpty()) {
    alert('There is no signature content in the image')
  } else {
    alert('The image contains signature content')
  }
}
</script>
