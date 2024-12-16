import type { Metadata, Viewport } from "next";

export const getSEO = ({
	url,
	title,
	description,
	keywords,
	openGraph,
	extra
}: Props): Metadata => ({
	// 50 characters
	title,
	// 160 characters
	description,
	keywords,
	applicationName: title,
	metadataBase: new URL(
		process.env.NODE_ENV === "development"
			? "http://localhost:3000/"
			: process.env.WEBSITE_URL || ""
	),
	// app/opengraph-image.jpg 1200x630
	openGraph: {
		title: openGraph?.title || title,
		description: openGraph?.description || description,
		url: openGraph?.url || process.env.WEBSITE_URL,
		siteName: (openGraph?.title as string) || title,
		images: "/opengraph-image.jpg",
		locale: "en_US",
		type: "website"
	},
	// app/twitter-image.jpg 1200x630
	twitter: {
		title: openGraph?.title || title,
		description: openGraph?.description || description,
		card: "summary_large_image",
		images: "/twittergraph-image.jpg",
		creator: "@AlexisNardiello"
	},
	alternates: {
		canonical: url
	},
	...extra
});

export const getViewport = (): Viewport => ({
	themeColor: "dark",
	width: "device-width",
	initialScale: 1,
	maximumScale: 2
});

type Props = {
	url: string;
	title: string;
	description: string;
	keywords: string[];
	openGraph?: Metadata["openGraph"];
	extra?: Partial<Metadata>;
};
