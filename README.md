# vue-signature-simple

> A electronic signature component by Vue.js

## Usage
install
```
npm install vue-signature-simple
```

main.js
```
import VueSignature from 'vue-signature-simple'
Vue.use(VueSignature)
```

.vue template
```
<vue-signature ref='s1' />
<vue-signature ref='s2' />
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

## donate

paypal

> paypal.me/jaeheng

wechat pay

![wechat](https://vss.phpat.com/wechat-pay.png)
