<script lang="ts">
    import { ArrowRight } from '@lucide/svelte';
    import { Divider } from '$lib/components';
</script>


<section class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <img src="/images/ItsMe.jpg" alt="Portrait" class="rounded-lg h-48 md:h-70 lg:h-100 w-auto" />
    <h1 class="pt-8">About Me</h1>
    
    <Divider />

    <div class="max-w-4xl flex flex-col gap-6 py-8">
        <p class= "text-sm md:text-xl lg:text-2xl">Hi, I'm Caitlin! I'm an engineer driven by curiosity and a genuine desire to understand how things work, not just on the surface, but as a whole system. I care equally about what's visible to the user and what isn't, because good design lives in both places.</p>
        <p class= "text-sm md:text-xl lg:text-2xl">With a background in art and information science, I've always seen parallels between composing code and composing art. Art taught me that every choice is intentional and that the right tools matter as much as the craft itself. Information science taught me to see the whole system. Engineering is where those two things meet.</p>
        <p class= "text-sm md:text-xl lg:text-2xl">In my current role I work with large scale enterprise customers across technical support and engineering, building tools to streamline their workflows, maintaining and reporting on SQL databases, automating log parsing for preventative maintenance, and triaging bugs and enhancement requests directly with engineering teams.</p>
        <p class= "text-sm md:text-xl lg:text-2xl">I want to be the direct driving force behind building and maintaining a codebase. The years I've spent at the intersection of users and engineering have given me a perspective that informs how I want to build, and the conviction to see it through.</p>
    </div>
    
    <Divider />

    <a href="/work" class="hover:text-[#a277ff] hover:scale-105 transition hover:underline flex items-center gap-2 py-6">
        <h2 class="text-4xl">View My Work</h2>
        <ArrowRight />
    </a>
</section>
