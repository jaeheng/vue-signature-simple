<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <ul class="menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/document">Document</router-link></li>
          <li><router-link to="/donate">Donate</router-link></li>
          <li class="fr"><a href="https://github.com/jaeheng/vue-signature-simple" target="_blank">Github</a></li>
        </ul>
      </div>
    </header>

    <router-view></router-view>
    <div class="footer">
      <a href="https://github.com/jaeheng/vue-signature-simple" target="_blank">Github</a>
    </div>
  </div>
</template>
