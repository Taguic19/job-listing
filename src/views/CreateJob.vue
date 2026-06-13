<script setup lang="ts">
import { reactive } from 'vue';
import { type Job } from '@/shared/job-type';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const job = reactive<Job>({
  id: new Date().toISOString(),
  title: '',
  company: '',
  location: '',
  salary: '',
  description: '',
  workType: 'Full Time',
});

const handleCreateJob = async () => {
  try{
    const res = await fetch('/api/jobs', {
      method: 'POST',
      body: JSON.stringify(job)
    });
    const data = await res.json();
    toast.success('Job Created!');
    router.push(`/jobs/${data.id}`);
  }
  catch(err) {
    console.error(err);
    toast.error(err instanceof Error ? err.message : 'Failed to create job');
  }
};
</script>

<template>
  <div class="mt-6">
    
  <form
    @submit.prevent="handleCreateJob"
    class="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm space-y-6"
  >
    <div>
      <h2 class="text-2xl font-bold text-black">Create Job</h2>
      <p class="text-gray-500 mt-1">
        Fill in the details below to create a new job posting.
      </p>
    </div>

    <!-- Job ID + Work Type -->
    <div class="grid grid-cols-1">

      <div>
        <label class="block text-sm font-medium mb-2">
          Work Type
        </label>
        <select
          v-model="job.workType"
          class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select Work Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>
      </div>
    </div>

    <!-- Title -->
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

    <!-- Buttons -->
    <div class="flex justify-end gap-3 pt-2">
      <button
        type="button"
        class="px-5 py-3 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100 transition"
      >
        Cancel
      </button>

      <button
        type="submit"
        class="px-5 py-3 cursor-pointer rounded-lg bg-black text-white hover:opacity-90 transition"
      >
        Create Job
      </button>
    </div>
  </form>
  </div>

</template>

