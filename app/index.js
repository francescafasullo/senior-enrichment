'use strict';
// thie is the entry point into our React DOM
// everything else happens in main

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

ReactDOM.render(
	<Main />,
	document.getElementById('main')
	);