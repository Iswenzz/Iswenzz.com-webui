import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Layout } from "router/components";
import Home from "Home/Home";
import Docx from "Docx/Docx";

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/docs" element={<Docx />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
