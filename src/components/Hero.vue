<script lang="ts" setup>

const props = withDefaults(defineProps<{
	title?: string;
	description?: string;
}>(),{
	title: 'Be a Vue Dev',
	description: 'From script to setup — keep shipping.'
}
)

</script>


<template>
	<div class="mt-4 bg-black py-10 text-center">
		<h1 class="text-3xl text-white" >{{title}}</h1>
		<p class="text-white">{{description}}</p>
	</div>

</template>