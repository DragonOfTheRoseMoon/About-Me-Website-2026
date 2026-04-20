<script lang="ts">
	import './layout.css';

	const { children } = $props();
</script>




<nav>
	<!-- your navbar here -->
</nav>


<div class="min-h-screen">
	{@render children()}
</div>