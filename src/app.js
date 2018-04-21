import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';

const appDiv = document.getElementById('app');

ReactDOM.render(<App/>, appDiv);

import appStyles from 'styles/app.css';

console.log(appStyles);

const div = document.createElement('div');
div.className = appStyles.flexWithShadow;
div.innerText = 'Styled with CSS Modules';
document.body.appendChild(div);
