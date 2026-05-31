
<script lang="ts">
    import type { Project } from '$lib/types/types';
    import { Divider } from '$lib/components';

    const { project }: { project: Project } = $props();

</script>


<div class="w-3/4 lg:max-w-5xl rounded-xl backdrop-blur-md p-4 text-center" style="background-color: rgba(162, 119, 255, 0.08) !important;">

    <div class="w-full pt-2">
    <Divider />
    <h2 class="text-md md:text-xl lg:text-2xl font-bold m-2">{project.title}</h2>
    <Divider />
    </div>
    
    {#if project.image}
        <div class="w-full h-60 md:h-80 lg:h-100">
            <img class="w-full h-full object-contain py-3" loading="eager" src={project.image} alt={project.title} />
        </div>
    {:else}
        <div class="h-8"></div>
    {/if}

    <div class="flex flex-wrap gap-3 justify-center py-3">
        {#each project.tags as tag}
            {#if tag.icon}
                <span class="badge preset-filled">
                    <i class={tag.icon}></i>
                    <span>{tag.label}</span>
                </span>
            
            {:else}
                    <span class="badge preset-filled">
                    <span>{tag.label}</span>
                </span>
            {/if}
        {/each}
    </div>

    <p class="text-md md:text-xl lg:text-2xl mt-4">{project.description}</p>

    {#if project.githubUrl}
        <div class="mt-4">
            <a href={project.githubUrl} class="btn preset-outlined-primary-500 hover:scale-110 hover:preset-filled-primary-500 transition duration-300">
                <i class="devicon-github-original"></i> See The Code
            </a>
        </div>
    {:else}
        <div class="h-5"></div>
    {/if}
</div>