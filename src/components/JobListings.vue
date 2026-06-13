<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type Job } from '@/shared/job-type';
 import JobListing from './JobListing.vue';

const props = defineProps<{limit?: number}>();

const jobs = ref<Array<Job>>([]);

const fetchJobs = async () => {
	try{
		const res = await fetch('/api/jobs');
		const data = await res.json();
		jobs.value = data;	
	}
	catch(error) {
		console.error('Error Fetching jobs',error);
	}
}

onMounted(() => fetchJobs());

</script>


<template>
	
	<div class="grid grid-cols-1 sm:gap-y-4 md:grid-cols-3 p-4 gap-x-8">
		<JobListing v-for="job in jobs.slice(0,limit) ?? jobs.length " :key="job.id" :job="job" />
	</div>
</template>