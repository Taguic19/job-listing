<script lang="ts" setup >
 import type { Job } from '@/shared/job-type';
import Card from './Card.vue';
import { computed, ref } from 'vue';

const props = defineProps<{job: Job}>();
const isShowFullDesc = ref(false);

const truncateFullDescription = computed(() => isShowFullDesc.value ? props.job.description : props.job.description.substring(0,100) + '...');


const updateDescription = () => {
	isShowFullDesc.value = !isShowFullDesc.value;
}

</script>


<template>
	<Card
    class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
  >
    <div class="flex items-start justify-between">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">
          {{ job.title }}
        </h2>

        <p class="mt-1 text-gray-600">
          {{ job.company }}
        </p>
      </div>

      <span
        class="rounded-full bg-black px-3 py-1 text-sm font-medium text-white"
      >
        {{ job.workType }}
      </span>
    </div>

    <div class="mt-4 space-y-2 text-sm text-gray-500">
      <p>📍 {{ job.location }}</p>
      <p>💰 {{ job.salary }}</p>
    </div>

    <p class="mt-4 text-gray-700">
      {{ truncateFullDescription }}
    </p>
    <button @click="updateDescription"> {{isShowFullDesc ? 'Less' : 'More'}} </button>

    <div class="mt-6 flex items-center justify-between">
      <span class="text-xs text-gray-400">
        ID: {{ job.id }}
      </span>

      <RouterLink :to="'/jobs/' + job.id"
        class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition cursor-pointer"
      >
       View Details
      </RouterLink>
    </div>
  </Card>

</template>