<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { reactive } from 'vue';

export interface UserInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  description: string;
  skills: string[];
  phone: string;
}

const state = reactive<UserInfo>({
  name: 'Elmar Taguic',
  title: 'Laravel Developer', 
  location: 'Cebu City',
  email: 'elmargamalo@gmail.com',
  description: " Passionate frontend developer specializing in Vue.js,TypeScript, Tailwind CSS,Laravel and modern web technologies.Focused on creating clean, responsive, and user-friendly experiences.",
  skills: ['Vue','Typescript','Express','Laravel','React'],
  phone: '09284315773'
})


</script>

<template>
  <div class="min-h-screen bg-white py-10 px-6 mt-10" >
    <div class="mx-auto max-w-6xl space-y-6">

      <!-- Profile Header -->
      <section class="rounded-3xl bg-gray-50 p-8 shadow-sm">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center">

          <!-- Avatar -->
          <div
            class="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-black text-4xl font-bold text-white"
          >
            ET
          </div>

          <!-- Profile Info -->
          <div class="flex-1">
            <h1 class="text-4xl font-bold text-black">
              {{state.name}}
            </h1>

            <div class="mt-3 flex flex-wrap gap-5 text-gray-600">
              <div class="flex items-center gap-2">
                <Icon icon="mdi:briefcase-outline" class="text-xl" />
                <span>{{state.title}}</span>
              </div>

              <div class="flex items-center gap-2">
                <Icon icon="mdi:map-marker-outline" class="text-xl" />
                <span>{{state.location}} </span>
              </div>

              <div class="flex items-center gap-2">
                <Icon icon="mdi:email-outline" class="text-xl" />
                <span>{{state.email}}</span>
              </div>
            </div>

            <p class="mt-5 max-w-3xl leading-relaxed text-gray-600">
             
            </p>

            <!-- Skills -->
            <div class="mt-6 flex flex-wrap gap-3">
              <span class="rounded-full bg-black px-4 py-2 text-sm text-white" v-for="skill in state.skills" :key="skill">
               {{skill}}
              </span>

            </div>
          </div>

          <!-- Actions -->
          <div class="flex gap-3">
            <button
              class="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
            >
              <Icon icon="mdi:pencil-outline" />
              Edit Profile
            </button>

            <button
              class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm transition hover:shadow"
            >
              <Icon icon="mdi:email-outline" />
              Message
            </button>
          </div>

        </div>
      </section>

      <!-- Stats -->
      <section class="grid gap-5 md:grid-cols-3">

        <div class="rounded-3xl bg-black p-6 text-white">
          <Icon
            icon="mdi:folder-multiple-outline"
            class="mb-4 text-4xl"
          />
          <h3 class="text-3xl font-bold">128</h3>
          <p class="mt-1 text-gray-300">
            Projects Completed
          </p>
        </div>

        <div class="rounded-3xl bg-gray-50 p-6 shadow-sm">
          <Icon
            icon="mdi:calendar-clock"
            class="mb-4 text-4xl"
          />
          <h3 class="text-3xl font-bold">1.6 Years</h3>
          <p class="mt-1 text-gray-500">
            Professional Experience
          </p>
        </div>

        <div class="rounded-3xl bg-gray-50 p-6 shadow-sm">
          <Icon
            icon="mdi:account-group-outline"
            class="mb-4 text-4xl"
          />
          <h3 class="text-3xl font-bold">42</h3>
          <p class="mt-1 text-gray-500">
            Clients Served
          </p>
        </div>

      </section>

      <!-- Main Content -->
      <div class="grid gap-6 lg:grid-cols-3">

        <!-- Left Side -->
        <div class="space-y-6 lg:col-span-2">

          <!-- About -->
          <section class="rounded-3xl bg-gray-50 p-7 shadow-sm">
            <div class="mb-5 flex items-center gap-3">
              <Icon icon="mdi:account-outline" class="text-2xl" />
              <h2 class="text-xl font-semibold">
                About Me
              </h2>
            </div>

            <p class="leading-relaxed text-gray-600">
              {{state.description}}
            </p>
          </section>

          <!-- Experience -->
          <section class="rounded-3xl bg-gray-50 p-7 shadow-sm">
            <div class="mb-6 flex items-center gap-3">
              <Icon icon="mdi:briefcase-outline" class="text-2xl" />
              <h2 class="text-xl font-semibold">
                Experience
              </h2>
            </div>

            <div class="space-y-4">

              <div class="rounded-2xl bg-white p-5 shadow-sm">
                <div class="flex gap-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white"
                  >
                    <Icon icon="mdi:briefcase-outline" />
                  </div>

                  <div>
                    <h3 class="font-semibold">
                      Frontend Developer
                    </h3>

                    <p class="text-sm text-gray-500">
                      Pixel Labs • 2024 - Present
                    </p>

                    <p class="mt-2 text-gray-600">
                      Built modern Vue applications, reusable UI
                      components, dashboards, and integrated REST APIs.
                    </p>
                  </div>
                </div>
              </div>

              <div class="rounded-2xl bg-white p-5 shadow-sm">
                <div class="flex gap-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white"
                  >
                    <Icon icon="mdi:laptop" />
                  </div>

                  <div>
                    <h3 class="font-semibold">
                      Web Development Intern
                    </h3>

                    <p class="text-sm text-gray-500">
                      Tech Solutions Inc. • 2023 - 2024
                    </p>

                    <p class="mt-2 text-gray-600">
                      Assisted with frontend development, testing,
                      maintenance, and website optimization.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>

        <!-- Right Side -->
        <div class="space-y-6">

          <!-- Contact -->
          <section class="rounded-3xl bg-gray-50 p-7 shadow-sm">
            <div class="mb-5 flex items-center gap-3">
              <Icon
                icon="mdi:card-account-details-outline"
                class="text-2xl"
              />
              <h2 class="text-xl font-semibold">
                Contact
              </h2>
            </div>

            <div class="space-y-4">

              <div class="flex items-center gap-3">
                <Icon icon="mdi:email-outline" class="text-xl" />
                <span class="text-gray-600">
                  elmar.taguic@example.com
                </span>
              </div>

              <div class="flex items-center gap-3">
                <Icon icon="mdi:phone-outline" class="text-xl" />
                <span class="text-gray-600">
                {{state.phone}}
                </span>
              </div>

              <div class="flex items-center gap-3">
                <Icon icon="mdi:web" class="text-xl" />
                <span class="text-gray-600">
                  www.elmartaguic.dev
                </span>
              </div>

              <div class="flex items-center gap-3">
                <Icon icon="mdi:map-marker-outline" class="text-xl" />
                <span class="text-gray-600">
                  {{state.location}}
                </span>
              </div>

            </div>
          </section>

          <!-- Education -->
          <section class="rounded-3xl bg-gray-50 p-7 shadow-sm">
            <div class="mb-5 flex items-center gap-3">
              <Icon icon="mdi:school-outline" class="text-2xl" />
              <h2 class="text-xl font-semibold">
                Education
              </h2>
            </div>

            <h3 class="font-semibold">
              Bachelor of Science in Information Technology
            </h3>

            <p class="mt-1 text-gray-500">
              2022 - 2026
            </p>

            <p class="mt-3 text-gray-600">
              Focused on software development, databases,
              networking, and web technologies.
            </p>
          </section>

        </div>

      </div>

    </div>
  </div>
</template>

