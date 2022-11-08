import React from 'react';
import Header from './components/Header.jsx';
import ComponentsGrid from './components/ComponentsGrid.jsx';
import Footer from './components/Footer.jsx';
import ComponentDetails from './components/ComponentDetails.jsx';
function App() {
	return (
		<div className="App">
			<div className="container mx-auto">
				<Header />
				<ComponentsGrid />
				<ComponentDetails />
			</div>
			<Footer />
		</div>
	);
}

export default App;
