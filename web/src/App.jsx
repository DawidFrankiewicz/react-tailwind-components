import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import ComponentDetails from './pages/ComponentDetails.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/component/:id" element={<ComponentDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
