import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import 'b:Page';

import Zen from 'b:Zen';

ReactDOM.render(<Zen />, document.getElementById('root'));
registerServiceWorker();
