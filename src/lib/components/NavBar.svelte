<script lang="ts">
	import { AppBar, Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import { MenuIcon } from '@lucide/svelte';
	import { goto } from '$app/navigation';
</script>

<AppBar class="w-full">
	<AppBar.Toolbar class="grid grid-cols-2">
		<AppBar.Lead class="flex items-center gap-3 px-3 pt-2">
			<a href="/" class="flex items-center gap-3">
				<img
					src="/images/2026LogoDesignInvert.png"
					alt="Logo"
					class="h-10 w-auto md:h-15 lg:h-20"
				/>
				<p class="hover:text-[#a277ff] lg:text-4xl">Caitlin Wells</p>
			</a>
		</AppBar.Lead>

		<AppBar.Trail class="flex items-center justify-end gap-3 px-3">
			<Menu onSelect={(details) => goto(details.value)}>
				<Menu.Trigger
					class="btn-icon size-8 preset-outlined-primary-500 transition duration-300 hover:preset-filled-primary-500 lg:size-12"
				>
					<MenuIcon size={16} class="lg:hidden" />
					<MenuIcon size={24} class="hidden lg:block" />
				</Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content
							class="rounded-lg p-3 lg:p-4"
							style="background-color: rgba(18, 18, 28, 0.95);"
						>
							<Menu.Item value="/">
								<Menu.ItemText class="hover:text-[#a277ff] hover:underline lg:text-lg"
									>Home</Menu.ItemText
								>
							</Menu.Item>
							<Menu.Item value="/about">
								<Menu.ItemText class="hover:text-[#4426ca] hover:underline lg:text-lg"
									>About Me</Menu.ItemText
								>
							</Menu.Item>
							<Menu.Item value="/work">
								<Menu.ItemText class="hover:text-[#f694ff] hover:underline lg:text-lg"
									>View My Work</Menu.ItemText
								>
							</Menu.Item>
							<Menu.Item value="/contact">
								<Menu.ItemText class="hover:text-[#a277ff] hover:underline lg:text-lg"
									>Contact Me</Menu.ItemText
								>
							</Menu.Item>
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
