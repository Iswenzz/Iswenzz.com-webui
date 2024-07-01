import { FC } from "react";
import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import { Layout } from "router";
import Home from "Home/Home";
import Docx from "Docx/Docx";

/**
 * Application animated routes.
 */
const AnimatedRoutes: FC = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<ReactRoutes key={location.pathname} location={location}>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/docs" element={<Docx />} />
				</Route>
			</ReactRoutes>
		</AnimatePresence>
	);
};

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<AnimatedRoutes />
	</BrowserRouter>
);

export default Router;
