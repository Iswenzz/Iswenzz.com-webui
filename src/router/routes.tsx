import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "Home/Home";
import Docx from "Docx/Docx";

import NavigationLayout from "./components/NavigationLayout/NavigationLayout";

/**
 * App router.
 */
const Router: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<NavigationLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/docs" element={<Docx />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
