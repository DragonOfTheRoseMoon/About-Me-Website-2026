<script lang="ts">
	import './layout.css';
	import { NavBar, StarField } from '$lib/components';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	const { children } = $props();
</script>

<div class="relative">
	<StarField />

	{#if page.url.pathname !== '/'}
		<div in:fade={{ duration: 600 }}>
			<NavBar />
		</div>
	{/if}

	{#key page.url.pathname}
		<div class="min-h-screen" in:fade={{ duration: 600 }}>
			{@render children()}
		</div>
	{/key}
</div>
