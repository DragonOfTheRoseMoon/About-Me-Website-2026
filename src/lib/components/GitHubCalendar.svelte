<script lang="ts">
	import { onMount } from 'svelte';
	import GitHubCalendar from 'github-calendar';
	import 'github-calendar/dist/github-calendar-responsive.css';

	const USERNAME = 'DragonOfTheRoseMoon';

	onMount(() => {
		GitHubCalendar('.github-calendar', USERNAME, {
			responsive: true,
			tooltips: true,
			global_stats: false
		});
	});
</script>

<div class="calendar-wrapper mx-auto">
	<div class="github-calendar">Loading contributions...</div>
</div>

<style>
	:global(.github-calendar) {
		border: none !important;
	}
	:global(.graph-before-activity-overview) {
		border: none !important;
	}

	.calendar-wrapper {
		min-width: 300px;
		max-width: 800px;
		margin: 0 auto;
	}

	:global(.show-on-focus) {
		display: none;
	}

	:global(.ContributionCalendar-day[data-level='0']) {
		background-color: #1e1e2e;
	}
	:global(.ContributionCalendar-day[data-level='1']) {
		background-color: #3d2b6e;
	}
	:global(.ContributionCalendar-day[data-level='2']) {
		background-color: #6b3fa0;
	}
	:global(.ContributionCalendar-day[data-level='3']) {
		background-color: #a277ff;
	}
	:global(.ContributionCalendar-day[data-level='4']) {
		background-color: #61ffca;
	}
</style>
