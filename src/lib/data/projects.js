export const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with current SvelteKit and Skeleton UI, with Lucide and Devicon for icons. Fun features include size reactive layouts, Svelte animations, Mesher customized background. Deployed on Vercel for always-on access with my own custom domain!",
        image: null,
        tags:[
                    { label: "Svelte 5", icon: "svelte-plain" },
                    { label: "Tailwind CSS", icon: "tailwindcss-original" },
                    { label: "Skeleton UI", icon: null },
                    { label: "NPM", icon: "npm-original-wordmark" },
                    { label: "Vercel", icon: "vercel-original" }
            ],
        githubUrl: "https://github.com/DragonOfTheRoseMoon/About-Me-Website-2026",
        liveUrl: null
    },

    {
        title: "AutoHoard - Book Search",
        description: "A python and bootstrap project using the OpenLibrary API in order to use a barcode scanner to scan, automatically search, and populate data in the UI. From there you may correct information, and then confirm it, which inserts it into a SQLite Database for tracking.",
        image: "/images/AutoHoard.png",
        tags:[
            { label: "Python", icon: "python-plain" },
            { label: "SQLite", icon: "sqlite-plain" },
            { label: "tkBootstrap", icon: "bootstrap-plain" },
            { label: "OpenLibrary API", icon: null }
            ], 
        githubUrl: "https://github.com/DragonOfTheRoseMoon/AutoHoard-ISBNLookup",
        liveUrl: null
    },

    {
        title: "Summoner - Discord Chat Game Bot",
        description: "A discord bot created using python that utilized the Discord API by randomizing monsters to fight when called in the chat, and keeps player statistics and levels in a CSV for continual progression!",
        image: "/images/Summoner.png",
        tags:[
            { label: "Python", icon: "python-plain" },
            { label: "Pandas", icon: "pandas-plain" },
            { label: "Discord API", icon: null }
        ],
        githubUrl: "https://github.com/DragonOfTheRoseMoon/Summoner-Discord-Bot",
        liveUrl: null
    },

]