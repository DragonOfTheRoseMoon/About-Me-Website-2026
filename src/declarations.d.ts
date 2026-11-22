declare module 'github-calendar' {
	interface GitHubCalendarOptions {
		responsive?: boolean;
		tooltips?: boolean;
		global_stats?: boolean;
		summary_text?: string;
		cache?: number;
	}

	export default function GitHubCalendar(
		container: string | Element,
		username: string,
		options?: GitHubCalendarOptions
	): Promise<void>;
}
