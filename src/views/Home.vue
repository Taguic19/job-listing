<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import JobListings from '@/components/JobListings.vue'
import { onMounted } from 'vue';
import {useToast} from 'vue-toastification';
import { RouterLink } from 'vue-router';

</script>


<template>

<div>
	<Hero />
	<JobListings :limit='6' />
	<div class="py-2 bg-black text-white text-center mx-4 rounded mb-2">
		<RouterLink to="/jobs">Browse All Jobs</RouterLink>
	</div>
</div>
	
</template>