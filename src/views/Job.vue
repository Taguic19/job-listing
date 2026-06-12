<script setup lang="ts">
	import type { Job } from '@/shared/job-type';
import {ref, onMounted, reactive} from 'vue';
import { useToast } from 'vue-toastification';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
const toast = useToast();
const route = useRoute();

const jobId = route.params.id;
  const job = ref<Job | null>(null);

  const fetchSingleJob = async () => {
    try{
      const res = await fetch(`/api/jobs/${jobId}`);
      const data = await res.json();
      job.value = data;
      console.log(job.value);
    }
    catch(error) {
      toast.error('Error fetching job');
      console.error(error);
    }
  }

  onMounted(fetchSingleJob);

</script>


<template>

	 <div class="max-w-4xl mx-auto p-6 mt-10"> 
    <RouterLink to="/jobs" class="text-white bg-black py-1.5 px-4 rounded-lg inline-block mb-4">Return to Jobs</RouterLink>
    <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
      
      <!-- Header -->
      <div class="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
        <div>
          <h1 class="text-3xl font-bold text-black">
            {{ job?.title }}
          </h1>

          <p class="text-lg text-gray-600 mt-1">
            {{ job?.company }}
          </p>
        </div>

        <button
          class="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Apply Now
        </button>
      </div>

      <!-- Job Info -->
      <div class="flex flex-wrap gap-3 mt-6">
        <span
          class="bg-black text-white text-sm px-4 py-2 rounded-full"
        >
          {{ job?.workType }}
        </span>

        <span
          class="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-full"
        >
          📍 {{ job?.location }}
        </span>

        <span
          class="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-full"
        >
          💰 {{ job?.salary }}
        </span>
      </div>

      <!-- Description -->
      <div class="mt-10">
        <h2 class="text-xl font-semibold text-black mb-4">
          Job Description
        </h2>

        <p class="text-gray-700 leading-8">
          {{ job?.description }}
        </p>
      </div>


    </div>
  </div> 

</template>
