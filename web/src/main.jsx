import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// REDUX
// REDUCERS
const components = (state = [], action) => {
	switch (action.type) {
		case 'LOG_COMPONENTS':
			console.log(state);
			return state;
		case 'LOAD_COMPONENTS':
			return action.payload;
		default:
			return state;
	}
};

// STORE
const store = createStore(
	components,
	// Browser extension
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// END REDUX

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
