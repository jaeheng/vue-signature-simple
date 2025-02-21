---
outline: deep
---
# Getting Started

### install
```sh
npm install vue-signature-simple
```
### Usage

```vue
<template>
    <vue-signature-simple
          ref="vss"
          :width="width"
          :height="height"
          :stroke-size="strokeSize"
          :stroke-color="strokeColor"
          @change="getSignature"
      />
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import VueSignatureSimple from 'vue-signature-simple'
const width = ref(340);
const height = ref(150);
const strokeSize = ref(2);
const strokeColor = ref('#4b5cc4');
const signature = ref('');
const vssRef = useTemplateRef('vss');

function getSignature (base64) {
  signature.value = base64
}
function isEmpty () {
  if (vssRef.value.isEmpty()) {
    alert('There is no signature content in the image')
  } else {
    alert('The image contains signature content')
  }
}
</script>
```
### License

[MIT](http://opensource.org/licenses/MIT)

