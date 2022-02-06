import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import ReactDOM from "react-dom";

import { Themes } from "App/components";
import Redux from "App/store";
import "App/i18next";

import Router from "router/routes";
import Apollo from "api/apollo";
import "styles/Main.scss";

import { unregister } from "./serviceWorker";

ReactDOM.render((
	<Apollo>
		<Redux>
			<Themes>
				<Router />
			</Themes>
		</Redux>
	</Apollo>
), document.getElementById("iswenzz-react-root"));

unregister();
