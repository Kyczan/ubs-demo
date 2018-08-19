import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Panels from './components/panels';

ReactDOM.render(<Panels />, document.getElementById('root'));
registerServiceWorker();
