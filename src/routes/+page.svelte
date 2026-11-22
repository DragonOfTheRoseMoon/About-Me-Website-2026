<script lang="ts">
	import { User, FolderOpen, AtSign, ArrowRight } from '@lucide/svelte';
	import { Divider } from '#lib/components/index.js';
	import { resolve } from '$app/paths';
</script>

<section class="flex min-h-screen flex-col items-center justify-center px-4 text-center">
	<img src="/images/2026LogoDesignInvert.png" alt="Logo" class="h-48 w-auto md:h-70 lg:h-100" />
	<h1 class="text-5xl font-bold md:text-7xl lg:text-[120px]">Caitlin Wells</h1>

	<div class="flex w-full max-w-4xl flex-col items-center gap-2">
		<Divider />
		<p class="text-2xl text-surface-300 md:text-3xl lg:text-[42px]">Software Engineer</p>
		<p class="text-xl text-surface-400 md:text-3xl lg:text-[36px]">
			Problem solving and systems thinking
		</p>
		<Divider />
	</div>

	<div class="flex max-w-4xl flex-col items-center gap-5">
		<a
			href={resolve('/about')}
			class="flex items-center gap-2 py-6 text-[#a277ff] transition hover:scale-105 lg:text-white lg:hover:text-[#a277ff]"
		>
			<User size={40} />
			<span class="text-xl hover:underline md:text-3xl lg:text-5xl">About Me</span>
			<ArrowRight />
		</a>

		<a
			href={resolve('/work')}
			class="flex items-center gap-2 py-6 text-[#6240fa] transition hover:scale-105 lg:text-white lg:hover:text-[#6240fa]"
		>
			<FolderOpen size={40} />
			<span class="text-xl hover:underline md:text-3xl lg:text-5xl">View My Work</span>
			<ArrowRight />
		</a>

		<a
			href={resolve('/contact')}
			class="flex items-center gap-2 py-6 text-[#cc5dff] transition hover:scale-105 lg:text-white lg:hover:text-[#cc5dff]"
		>
			<AtSign size={40} />
			<span class="text-xl hover:underline md:text-3xl lg:text-5xl">Contact Me</span>
			<ArrowRight />
		</a>
	</div>
</section>
