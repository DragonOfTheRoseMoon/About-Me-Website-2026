<script lang="ts">
	import { onMount } from 'svelte';

	type Star = {
		top: number;
		left: number;
		size: number;
		color: string;
		delay: number;
		duration: number;
	};

	let stars = $state<Star[]>([]);

	const colors = ['#f5f3ff', '#e8e4ff', '#e8e4ff', '#dcd6ff', '#a277ff', '#61ffca', '#f694ff'];

	function random(min: number, max: number) {
		return min + Math.random() * (max - min);
	}

	onMount(() => {
		stars = Array.from({ length: 200 }, () => ({
			top: random(0, 100),
			left: random(0, 100),
			size: random(1, 3),
			color: colors[Math.floor(Math.random() * colors.length)],
			delay: random(0, 5),
			duration: 5.5 * random(0.7, 1.3)
		}));
	});
</script>

<div class="starfield" aria-hidden="true">
	{#each stars as star}
		<span
			class="star"
			style="
				top: {star.top}%;
				left: {star.left}%;
				width: {star.size}px;
				height: {star.size}px;
				color: {star.color};
				animation-delay: {star.delay}s;
				animation-duration: {star.duration}s;
			"
		></span>
	{/each}
</div>

<style>
	.starfield {
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}

	.star {
		position: absolute;
		border-radius: 50%;
		background: currentColor;
		box-shadow: 0 0 9px currentColor;
		animation: twinkle 5.5s ease-in-out infinite;
	}

	@keyframes twinkle {
		0%, 100% { opacity: 0.015; transform: scale(0.85); }
		50%      { opacity: 1; transform: scale(1.1); }
	}

    @media (prefers-reduced-motion: reduce) {
        .star {
            animation: none;
            opacity: 0.7;
        }
    }
</style>