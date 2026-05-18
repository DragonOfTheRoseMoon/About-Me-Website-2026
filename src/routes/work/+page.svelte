<script lang="ts">
    import { GitHubCalendar, Divider } from '$lib/components';
</script>


<div class="container mx-auto px-4 py-8 md:py-12 lg:py-16">
    <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Projects</h1>

    <!-- project cards will go here later -->

    <section class="mt-8 md:mt-16 flex flex-col items-center gap-2">
        <Divider />
        <h2 class="text-xl md:text-2xl font-semibold">Recent GitHub Activity</h2>
        <Divider />
        <div class="mt-8 w-full">
            <GitHubCalendar />
        </div>
    </section>
</div>
