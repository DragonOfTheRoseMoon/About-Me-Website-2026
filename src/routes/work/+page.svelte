<script lang="ts">
	import { GitHubCalendar, Divider } from '$lib/components';
	import { projects } from '$lib/data/projects';
	import { ArrowRight } from '@lucide/svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const visibleProjects = projects.filter((p) => p.visible);
</script>

<div class="container mx-auto px-4 py-2 md:py-4 lg:py-6">
	<h1 class="mb-8 text-center text-2xl font-bold md:mb-12 md:text-4xl lg:text-5xl">Projects</h1>
	<Divider />
</div>

<section class="mx-auto my-4 flex flex-col items-center gap-4">
	<div
		class="w-3/4 rounded-xl p-6 backdrop-blur-md lg:max-w-5xl"
		style="background-color: rgba(162, 119, 255, 0.08) !important;"
	>
		<Divider />
		<h2 class="my-4 text-center text-xl font-semibold md:text-2xl">Recent GitHub Activity</h2>
		<Divider />
		<GitHubCalendar />
	</div>
</section>

<div class="flex flex-col items-center gap-6">
	{#each visibleProjects as project}
		<ProjectCard {project} />
	{/each}

	<div class="flex w-full flex-col items-center">
		<Divider />
		<a
			href="/contact"
			class="flex items-center gap-2 py-6 transition hover:scale-105 hover:text-[#a277ff] hover:underline"
		>
			<h2 class="text-4xl">Contact Me</h2>
			<ArrowRight />
		</a>
	</div>
</div>
