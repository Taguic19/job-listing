<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import {RouterView} from 'vue-router';
</script>

<template>
<NavBar />
<RouterView class="pt-12"/>
</template>