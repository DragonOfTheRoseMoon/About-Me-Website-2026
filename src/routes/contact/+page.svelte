<script lang="ts">
	import { ArrowRight, Mail } from '@lucide/svelte';
	import { Divider } from '#lib/components/index.js';
</script>

<section class="flex min-h-screen flex-col items-center justify-center px-4 text-center">
	<h1 class="pt-8">Contact Me</h1>

	<div class="flex w-full max-w-4xl flex-col items-center gap-2">
		<Divider />
		<p class="text-md md:text-xl lg:text-2xl">Have questions or want to connect?</p>
		<p class="text-md md:text-xl lg:text-2xl">
			I am always open to discussing my work or taking feedback and suggestions. Choose one of the
			following to reach out whenever!
		</p>
		<Divider />
	</div>

	<div class="flex max-w-4xl flex-col items-center gap-6">
		<a
			href="mailto:caitlin@lunadraconis.dev"
			class="flex items-center gap-2 py-6 text-[#a277ff] transition hover:scale-105 lg:text-white lg:hover:text-[#a277ff]"
		>
			<Mail size={40} />
			<span class="text-xl hover:underline md:text-3xl lg:text-5xl">Email Me</span>
			<ArrowRight />
		</a>

		<a
			href="https://www.linkedin.com/in/caitlin-wells-784939243/"
			class="flex items-center gap-2 py-6 text-[#6240fa] transition hover:scale-105 lg:text-white lg:hover:text-[#6240fa]"
		>
			<i class="devicon-linkedin-plain text-3xl md:text-3xl lg:text-5xl"></i>
			<span class="text-xl hover:underline md:text-3xl lg:text-5xl">LinkedIn</span>
			<ArrowRight />
		</a>

		<a
			href="https://github.com/DragonOfTheRoseMoon"
			class="flex items-center gap-2 py-6 text-[#cc5dff] transition hover:scale-105 lg:text-white lg:hover:text-[#cc5dff]"
		>
			<i class="devicon-github-original text-3xl md:text-3xl lg:text-5xl"></i>
			<span class="text-xl hover:underline md:text-3xl lg:text-5xl">GitHub</span>
			<ArrowRight />
		</a>
	</div>
</section>
