<script lang="ts" setup>
	import logo from '@/assets/logo.webp';
	import {RouterLink} from 'vue-router';
</script>
<template>
	<header class="flex justify-between fixed top-0 left-0 right-0 h-15 bg-black">
		<div class="w-1/2 flex items-center">
		<img :src="logo" class="w-10 ml-20" alt="This is logo">
	</div>
	<nav class="flex-1 flex justify-center items-center gap-x-4 text-white">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/jobs">Jobs</RouterLink>
		<RouterLink to="/profile">Profile</RouterLink>
	</nav>
	</header>
</template>