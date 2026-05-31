<script lang="ts">

    import { ArrowRight, Mail } from '@lucide/svelte';
    import { Divider } from '$lib/components';
    
</script>


<section class="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 class="pt-8">Contact Me</h1>

    <div class="flex flex-col items-center gap-2 w-full max-w-4xl">
        <Divider />
        <p class= "text-md md:text-xl lg:text-2xl">Have questions or want to connect?</p>
        <p class= "text-md md:text-xl lg:text-2xl">I am always open to discussing my work or taking feedback and suggestions. Choose one of the following to reach out whenever!</p>
        <Divider />
    </div>


    <div class="max-w-4xl flex flex-col items-center gap-6">
            <a href="mailto:caitlin@lunadraconis.dev" class="text-[#a277ff] lg:text-white lg:hover:text-[#a277ff] hover:scale-105 transition flex items-center gap-2 py-6">
                <Mail size={40} />
                <span class="hover:underline text-xl md:text-3xl lg:text-5xl">Email Me</span>
                <ArrowRight />
            </a>

            <a href="https://www.linkedin.com/in/caitlin-wells-784939243/" class="text-[#6240fa] lg:text-white lg:hover:text-[#6240fa] hover:scale-105 transition flex items-center gap-2 py-6">
                <i class="devicon-linkedin-plain text-3xl md:text-3xl lg:text-5xl"></i>
                <span class="hover:underline text-xl md:text-3xl lg:text-5xl">LinkedIn</span>
                <ArrowRight />
            </a>

            <a href="https://github.com/DragonOfTheRoseMoon" class="text-[#cc5dff] lg:text-white lg:hover:text-[#cc5dff] hover:scale-105 transition flex items-center gap-2 py-6">
                <i class="devicon-github-original text-3xl md:text-3xl lg:text-5xl"></i>
                <span class="hover:underline text-xl md:text-3xl lg:text-5xl">GitHub</span>
                <ArrowRight />
            </a>
    </div>

</section>