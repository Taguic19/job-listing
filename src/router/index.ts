import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import Job from '@/views/Job.vue';
import Jobs from '@/views/Jobs.vue';
import Profile from '@/views/Profile.vue';
import CreateJob from '@/views/CreateJob.vue';
import UpdateJob from '@/views/UpdateJob.vue';


const router = createRouter({

	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},

		{
			path: '/jobs',
			name: 'jobs',
			component: Jobs
		},
		{
			path: '/jobs/:id',
			name: 'job',
			component: Job
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile
		},
		{
			path: '/jobs/update/:id',
			name: 'update-job',
			component: UpdateJob
		},

		{	
			path: '/jobs/create',
			 name: 'create-job',
			  component: CreateJob},

		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFound
		}
	]
})


export default router;