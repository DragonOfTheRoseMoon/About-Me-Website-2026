<script lang="ts">
    import { User, FolderOpen, AtSign, ArrowRight } from '@lucide/svelte';
    import { Divider } from '$lib/components';
</script>

<section class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <img src="/images/2026LogoDesignInvert.png" alt="Logo" class="h-48 md:h-70 lg:h-100 w-auto" />
    <h1 class="text-5xl md:text-7xl lg:text-[120px] font-bold">Caitlin Wells</h1>

<div class="flex flex-col items-center gap-2 w-full max-w-4xl">
    <Divider />
    <p class="text-2xl md:text-3xl lg:text-[42px] text-surface-300">Support Engineer</p>
    <p class="text-xl md:text-3xl lg:text-[36px] text-surface-400">Problem solving and systems thinking</p>
    <Divider />
</div>


<div class="max-w-4xl flex flex-col items-center gap-5">
        <a href="/about" class="text-[#a277ff] lg:text-white lg:hover:text-[#a277ff] hover:scale-105 transition flex items-center gap-2 py-6">
            <User size={40} />
            <span class="hover:underline text-xl md:text-3xl lg:text-5xl">About Me</span>
            <ArrowRight />
        </a>

        <a href="/work" class="text-[#6240fa] lg:text-white lg:hover:text-[#6240fa] hover:scale-105 transition flex items-center gap-2 py-6">
            <FolderOpen size={40}/>
            <span class="hover:underline text-xl md:text-3xl lg:text-5xl">View My Work</span>
            <ArrowRight />
        </a>

        <a href="/contact" class="text-[#cc5dff] lg:text-white lg:hover:text-[#cc5dff] hover:scale-105 transition flex items-center gap-2 py-6">
            <AtSign size={40}/>
            <span class="hover:underline text-xl md:text-3xl lg:text-5xl">Contact Me</span>
            <ArrowRight />
        </a>
</div>


</section>