---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue-Signature-Simple"
  text: ""
  tagline: A lightweight electronic signature module for Vue3
  actions:
    - theme: brand
      text: Quickstart
      link: /quick-start
    - theme: alt
      text: Github
      link: https://github.com/jaeheng/vue-signature-simple
  image:
    src: /images/logo.png
    alt: Vue-Signature-Simple

features:
  - title: Easy Integration
    details: Seamlessly integrate Vue-Signature-Simple into your Vue projects with minimal setup. Simply install and start collecting electronic signatures right away, without complicated configuration.
    icon: 🛠️
  - title: Customizable Design
    details: Fully customizable signature styles to match your app’s look and feel. Adjust canvas size, pen color, and line thickness to create a smooth and personalized signing experience.
    icon: 🛠️
  - title: Save & Export Signatures
    details: Capture and save electronic signatures as high-quality images or data URLs. Easily export them for secure storage or document processing.
    icon: 🛠️
---

<script setup>
import VueSignatureSimpleDemo from './components/SignatureDemo.vue';
</script>

## Example

<vue-signature-simple-demo />
