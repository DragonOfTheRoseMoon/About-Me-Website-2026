<script lang="ts">
    import { GitHubCalendar, Divider } from '$lib/components';
    import { projects } from '$lib/data/projects';
    import { ArrowRight } from '@lucide/svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    
    const visibleProjects = projects.filter(p => p.visible);


</script>


<div class="container mx-auto px-4 py-2 md:py-4 lg:py-6">
    <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Projects</h1>
        <Divider />
</div>

<section class="my-4 flex flex-col items-center mx-auto gap-4">
    <div class="w-3/4 lg:max-w-5xl rounded-xl backdrop-blur-md p-6" style="background-color: rgba(162, 119, 255, 0.08) !important;">
        <Divider />
        <h2 class="text-xl md:text-2xl font-semibold text-center my-4">Recent GitHub Activity</h2>
        <Divider />
        <GitHubCalendar />
    </div>
</section>

<div class="flex flex-col items-center gap-6">
    {#each visibleProjects as project}
        <ProjectCard {project} />
    {/each}

<div class="flex flex-col items-center w-full">
    <Divider />
    <a href="/contact" class="hover:text-[#a277ff] hover:scale-105 transition hover:underline flex items-center gap-2 py-6">
        <h2 class="text-4xl">Contact Me</h2>
        <ArrowRight />
    </a>
</div>

</div>

