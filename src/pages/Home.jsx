import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ComponentsGrid from '../components/ComponentsGrid.jsx';

function App() {
	return (
		<div className="App">
			<div className="container mx-auto px-2">
				<Header />
				<ComponentsGrid />
			</div>
			<Footer />
		</div>
	);
}

export default App;