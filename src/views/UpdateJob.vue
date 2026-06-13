<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { type Job } from '@/shared/job-type';
import { useToast } from 'vue-toastification';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const toast = useToast();
const route = useRoute();
const router = useRouter();

const jobId = route.params.id as string;

const job = ref<Job>({
  id: '',
  title: '',
  company: '',
  location: '',
  salary: '',
  description: '',
  workType: 'Part Time'
});

const fetchJobData = async (id: string) => {
	try{
		const res = await fetch(`/api/jobs/${id}`);
		const data = await res.json();
		console.log(data);
		job.value = {...data};
		console.log(job.value);
	}
	catch(err) {
		toast.error(err instanceof Error ? err.message : 'Failed to fetch job data');
		console.error(err);
	}
}

onMounted(() => {
	fetchJobData(jobId)
});


const handleJobUpdate = async (id: string) => {
	try{
		const res = await fetch(`/api/jobs/${id}`,{
			method: 'PUT',
			body: JSON.stringify(job.value)
		});
		const data = await res.json();
		toast.success('Job Updated!');
		router.push(`/jobs/${data.id}`);
		}
	catch(err) { 
		toast.error(err instanceof Error? err.message : 'Failed to fetch Job');
		console.error(err);
	}
}


</script>


<template>
  <form 
    @submit.prevent="handleJobUpdate(job.id)"
    class="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm space-y-6 mt-20"
  >
    <div>
      <h2 class="text-2xl font-bold text-black">Update Job</h2>
      <p class="text-gray-500 mt-1">
        Update the job information below.
      </p>
    </div>

    <!-- Title + Work Type -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium mb-2">
          Job Title
        </label>
        <input
 			
          v-model="job.title"
          type="text"
          placeholder="Frontend Developer"
          class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">
          Work Type
        </label>
        <select
       
        v-model="job.workType"
          class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option>Full Time</option>
          <option>Part Time</option>
 
        </select>
      </div>
    </div>

    <!-- Company + Location -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium mb-2">
          Company
        </label>
        <input
        v-model="job.company"
          type="text"
          placeholder="Pixel Labs"
          class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">
          Location
        </label>
        <input
        v-model="job.location"
          type="text"
          placeholder="Cebu City"
          class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>

    <!-- Salary -->
    <div>
      <label class="block text-sm font-medium mb-2">
        Salary
      </label>
      <input
      v-model="job.salary"
        type="text"
        placeholder="₱40,000 - ₱60,000"
        class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <!-- Description -->
    <div>
      <label class="block text-sm font-medium mb-2">
        Job Description
      </label>
      <textarea
      v-model="job.description"
        rows="6"
        placeholder="Describe the responsibilities, requirements, and benefits..."
        class="w-full px-4 py-3 rounded-lg bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-3 pt-2">
      <button
        type="button"
        class="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
      >
        Cancel
      </button>

      <button
        type="submit"
        class="px-5 py-3 rounded-lg bg-black text-white hover:opacity-90 transition"
      >
        Update Job
      </button>
    </div>
  </form>
</template>