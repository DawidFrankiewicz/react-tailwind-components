import React from 'react';
import Header from './components/Header.jsx';
import ComponentsGrid from './components/ComponentsGrid.jsx';

function App() {
	return (
		<div className="App">
			<div className="container mx-auto">
				<Header />
				<ComponentsGrid />
			</div>
		</div>
	);
}

export default App;
