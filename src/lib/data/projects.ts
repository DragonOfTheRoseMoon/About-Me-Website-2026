import type { Project } from '#lib/types/types.js';

export const projects: Project[] = [
	{
		title: 'Portfolio Website',
		description:
			'A personal portfolio built with current SvelteKit and Skeleton UI, with Lucide and Devicon for icons. Fun features include size reactive layouts, Svelte animations, Mesher customized background. Deployed on Vercel for always-on access with my own custom domain!',
		image: '/images/PortfolioSite.png',
		tags: [
			{ label: 'Svelte 5', icon: 'devicon-svelte-plain' },
			{ label: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
			{ label: 'Skeleton UI', icon: null },
			{ label: 'NPM', icon: 'devicon-npm-original-wordmark' },
			{ label: 'Vercel', icon: 'devicon-vercel-original' }
		],
		githubUrl: 'https://github.com/DragonOfTheRoseMoon/About-Me-Website-2026',
		liveUrl: null,
		visible: true
	},

	{
		title: 'Home Lab Server',
		description:
			'I set up a home lab and media server that is fully containerized in Docker, with a CloudFlare network tunnel running through my own domain to allow for access to my JellyFin streaming service from anywhere I go, and pi-hole to keep my network clear of ads while browsing at home. Comes complete with a Homarr dashboard and Cockpit for full observability and management from anywhere in my home.',
		image: '/images/HomeLab.png',
		tags: [
			{ label: 'Ubuntu', icon: 'devicon-ubuntu-plain' },
			{ label: 'Linux', icon: 'devicon-linux-plain' },
			{ label: 'Docker', icon: 'devicon-docker-plain' },
			{ label: 'CloudFlare', icon: 'devicon-cloudflare-plain' }
		],
		githubUrl: null,
		liveUrl: null,
		visible: true
	},

	{
		title: 'Libra Draconis - Active Development',
		description:
			"Currently active project taking my concepts of my AutoHoard python project and turning it into a full-stack web app. Chosen framework is Sveletkit, using Typescript as a back end connected via Drizzle ORM to a Postgres Database. Upgrades are to include containerizing for self-hosting, use of multiple API's, wishlist features, and in app collection management. See GitHub for the most up to date project details!",
		image: '/images/LibraDraconisWIP.png',
		tags: [
			{ label: 'Svelte 5', icon: 'devicon-svelte-plain' },
			{ label: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
			{ label: 'Typescript', icon: 'devicon-typescript-plain' },
			{ label: 'Skeleton UI', icon: null },
			{ label: 'PostgresSQL', icon: 'devicon-postgresql-plain' },
			{ label: 'Docker', icon: 'devicon-docker-plain' }
		],
		githubUrl: 'https://github.com/DragonOfTheRoseMoon/LibraDraconis',
		liveUrl: null,
		visible: true
	},

	{
		title: 'AutoHoard - Book Search',
		description:
			'A python and bootstrap project using the OpenLibrary API in order to use a barcode scanner to scan, automatically search, and populate data in the UI. From there you may correct information, and then confirm it, which inserts it into a SQLite Database for tracking.',
		image: '/images/AutoHoard.png',
		tags: [
			{ label: 'Python', icon: 'devicon-python-plain' },
			{ label: 'SQLite', icon: 'devicon-sqlite-plain' },
			{ label: 'tkBootstrap', icon: 'devicon-bootstrap-plain' },
			{ label: 'OpenLibrary API', icon: null }
		],
		githubUrl: 'https://github.com/DragonOfTheRoseMoon/AutoHoard-ISBNLookup',
		liveUrl: null,
		visible: true
	},

	{
		title: 'Summoner - Discord Chat Game Bot',
		description:
			'A discord bot created using python that utilized the Discord API by randomizing monsters to fight when called in the chat, and keeps player statistics and levels in a CSV for continual progression!',
		image: '/images/Summoner.png',
		tags: [
			{ label: 'Python', icon: 'devicon-python-plain' },
			{ label: 'Pandas', icon: 'devicon-pandas-plain' },
			{ label: 'Discord API', icon: null }
		],
		githubUrl: 'https://github.com/DragonOfTheRoseMoon/Summoner-Discord-Bot',
		liveUrl: null,
		visible: true
	}
];
