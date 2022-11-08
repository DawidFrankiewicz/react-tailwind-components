import Home from './pages/Home.jsx';
import ComponentDetails from './pages/ComponentDetails.jsx';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/component/:id" element={<ComponentDetails />} />
		</Routes>
	);
}

export default App;
