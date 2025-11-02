import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
	NAME: "pansah",
	EMAIL: "ansahpeter123@gmail.com",
	NUM_POSTS_ON_HOMEPAGE: 3,
	NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION: "Thoughts,Journey in life and programming",
};

export const BLOG: Metadata = {
	TITLE: "Blog",
	DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
	TITLE: "Projects",
	DESCRIPTION:
		"A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
	{
		NAME: "twitter-x",
		HREF: "https://x.com/yourfav_dev",
	},
	{
		NAME: "github",
		HREF: "https://github.com/PeterKwesiAnsah",
	},
	{
		NAME: "linkedin",
		HREF: "https://www.linkedin.com/in/peter-ansah-25519520a/",
	},
];
