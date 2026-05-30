export interface ProjectTag {
    label: string;
    icon: string | null;
}

export interface Project {
    title: string;
    description: string;
    image: string | null;
    tags: ProjectTag[];
    githubUrl: string | null;
    liveUrl: string | null;
    visible: boolean;
}