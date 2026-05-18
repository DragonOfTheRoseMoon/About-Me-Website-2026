<script lang="ts">
    import { User, FolderOpen, AtSign } from '@lucide/svelte';
    import { Divider } from '$lib/components';
</script>

<section class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <img src="/images/2026LogoDesignInvert.png" alt="Logo" class="h-48 md:h-70 lg:h-100 w-auto" />
    <h1 class="text-5xl md:text-7xl lg:text-[120px] font-bold">Caitlin Wells</h1>
<Divider />
    <p class="text-2xl md:text-3xl lg:text-[42px] text-surface-300">Support Engineer</p>
    <p class="text-xl md:text-2xl lg:text-[36px] text-surface-400">Problem solving and systems thinking</p>
<Divider />
    <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-8">
        <a href="/about" type="button" class="btn btn-lg preset-outlined-primary-500 hover:preset-filled-primary-500 transition duration-300"> <User />About Me</a>
        <a href="/work" type="button" class="btn btn-lg preset-outlined-primary-500 hover:preset-filled-primary-500 transition duration-300"> <FolderOpen />View My Work</a>
        <a href="/contact" type="button" class="btn btn-lg preset-outlined-primary-500 hover:preset-filled-primary-500 transition duration-300"><AtSign />Contact Me</a>
    </div>
</section>