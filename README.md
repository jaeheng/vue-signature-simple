# vue-signature-simple

Vue-Signature-Simple is a lightweight Vue.js component designed to provide users with an easy and intuitive electronic signature functionality.

## Usage
### install
```
# npm
npm install vue-signature-simple
# yarn
yarn add vue-signature-simple
```

### component
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

## API

Props

|  name   | description  | default |
|  ----  | ----  | ---- |
| width  | signature width | 300 | 
| height  | signature height | 100 |
| strokeColor  | pen color | black |
| strokeSize  | pen size | 2 |

Methods

|  name   | description  | params |
|  ----  | ----  | ---- |
| clear  | clear canvas |  | 
| getSignature  | get signature base64 data | format: (image/png)(image/jpeg)(image/svg+xml) |
| isEmpty  | return canvas is empty? |  |

## License
MIT
