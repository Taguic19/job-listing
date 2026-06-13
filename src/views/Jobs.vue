<script setup lang="ts">
import { ref, onMounted } from 'vue';
 import NavBar from '@/components/NavBar.vue';
import JobListings from '@/components/JobListings.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
	<NavBar />
	<div class=" mt-15 text-right flex justify-end pr-4 text-white">
		<RouterLink class="bg-black px-4 py-1.5 rounded-lg mt-4" to="/jobs/create">Create New Job</RouterLink>
	</div>
	<JobListings />
</template>