import ReactDOM from "react-dom";

import { Themes } from "App/components";
import Redux from "App/store";
import "App/i18next";

import Apollo from "api/apollo";
import Router from "router";
import "@/config/highlight";

import "styles/Main.scss";

ReactDOM.render(
	<Apollo>
		<Redux>
			<Themes>
				<Router />
			</Themes>
		</Redux>
	</Apollo>,
	document.getElementById("iswenzz-react-root")
);
