<script lang="ts">
    import { ArrowRight } from '@lucide/svelte';
    import { Divider } from '$lib/components';
</script>


<section class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <img src="/images/ItsMe.jpg" alt="Portrait" class="rounded-lg h-48 md:h-70 lg:h-100 w-auto" />
    <h1 class="pt-8">About Me</h1>
    
    <Divider />

    <div class="max-w-4xl flex flex-col gap-6 py-8">
        <p class= "text-sm md:text-xl lg:text-2xl">Hi, I'm Caitlin! I'm an engineer interested in what makes things tick and why. I enjoy the cohesion between user experience and code design as a whole system to create efficient solutions. I like to create clean design and architecture in both what is visible and invisible to the user. I'm driven by curiosity and a genuine desire to help. I see challenges as opportunities to grow, and when conventional solutions fall short, I actively seek new ways to adapt.</p>
        <p class= "text-sm md:text-xl lg:text-2xl">With a background in both art and information science, I believe composing code is like composing a piece of art. Choosing the correct medium and tools is your starting point. In the active creation process you need to know your composition as a whole while choosing where the most important details are to convey your meaning. This is much like choosing a code language, framework, and architecture.</p>
        <p class= "text-sm md:text-xl lg:text-2xl">In my current role in technical support and engineering, I specialize in working with large scale enterprise customers to create tools designed to streamline processes in their environments, as well as maintain and report on their SQL databases. This includes consumption of data via APIs, log parsing automation for preventative maintenance, and triaging customer issues and enhancement requests directly to our engineers.</p>
        <p class= "text-sm md:text-xl lg:text-2xl">As I move forward in my career, I am seeking to transition my knowledge of triaging bugs or enhancements and usage of code into being the direct driving force behind creating and maintaining a code base.</p>
    </div>
    
    <Divider />

    <a href="/work" class="hover:text-[#a277ff] hover:scale-105 transition hover:underline flex items-center gap-2 py-6">
        <h2 class="text-4xl">View My Work</h2>
        <ArrowRight />
    </a>
</section>
