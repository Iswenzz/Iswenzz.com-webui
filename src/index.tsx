import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import application from './application';

ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();