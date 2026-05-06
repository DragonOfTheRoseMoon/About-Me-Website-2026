<script lang="ts">
    import { AppBar, Menu, Portal } from '@skeletonlabs/skeleton-svelte';
    import { MenuIcon } from '@lucide/svelte';
    import { goto } from '$app/navigation';
</script>

<AppBar class="w-full">
    <AppBar.Toolbar class="grid grid-cols-2">

    <AppBar.Lead class="flex items-center gap-3 pt-2 px-3">
        <a href="/" class="flex items-center gap-3">
            <img src="/images/2026LogoDesignInvert.png" alt="Logo" class="h-10 md:h-15 lg:h-20 w-auto" />
            <p class="lg:text-4xl">Caitlin Wells</p>
        </a>
    </AppBar.Lead>

        <AppBar.Trail class="flex justify-end items-center gap-3 px-3">
            <Menu onSelect={(details) => goto(details.value)}>
				<Menu.Trigger class="btn-icon size-8 preset-outlined-primary-500 hover:preset-filled-primary-500 transition duration-300">
                    <MenuIcon />
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content class="preset-filled-surface-900 p-3 rounded-lg">
                            <Menu.Item value="/">
                                <Menu.ItemText>Home</Menu.ItemText>
                            </Menu.Item>
                            <Menu.Item value="/about">
                                <Menu.ItemText>About Me</Menu.ItemText>
                            </Menu.Item>
                            <Menu.Item value="/work">
                                <Menu.ItemText>View My Work</Menu.ItemText>
                            </Menu.Item>
                            <Menu.Item value="/contact">
                                <Menu.ItemText>Contact Me</Menu.ItemText>
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu>
        </AppBar.Trail>

    </AppBar.Toolbar>
</AppBar>