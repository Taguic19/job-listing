<script setup lang="ts">
import { ref, onMounted } from 'vue';
 import NavBar from '@/components/NavBar.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
	<NavBar />
	<JobListings class="mt-15" />
</template>