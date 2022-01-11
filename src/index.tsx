import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import ReactDOM from "react-dom";

import { unregister } from "./serviceWorker";
import Apollo from "./api/apollo";
import Redux from "./containers/App/store";
import Themes from "./containers/App/components/Themes/Themes";
import Router from "./router/routes";
import "./containers/App/i18n";

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
