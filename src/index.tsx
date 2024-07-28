import { createRoot } from "react-dom/client";

import { Themes } from "App/components";
import Redux from "App/store";
import "App/i18next";

import Apollo from "api/apollo";
import { Router } from "router";

import "styles/Main.scss";

const element = document.getElementById("iswenzz.com");

if (element) {
	createRoot(element).render(
		<Apollo>
			<Redux>
				<Themes>
					<Router />
				</Themes>
			</Redux>
		</Apollo>
	);
}
