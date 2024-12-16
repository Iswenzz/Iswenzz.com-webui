import type { FC, PropsWithChildren } from "react";

import { getSEO, getViewport } from "@/libs/seo";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { roboto } from "./fonts";

import "./globals.css";
import "./markdown.css";

export const viewport = getViewport();

export const metadata = getSEO({
	url: "/",
	title: "Iswenzz.com",
	description:
		"I'm a Software Engineer and a Level Designer. Here you can find all my work. I've experience working on a diverse set of programming topics ...",
	keywords: [
		"Alexis Nardiello",
		"Iswenzz",
		"Software Engineer",
		"Software Developer",
		"Level Designer",
		"IzEngine",
		"IzUI",
		"SR",
		"IW3SR",
		"AION Project"
	]
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang="en" data-theme={process.env.WEBSITE_THEME}>
		<body className={roboto.className}>
			<Navbar />
			{children}
			<Footer />
		</body>
	</html>
);

export default RootLayout;
