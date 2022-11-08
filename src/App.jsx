import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import ComponentDetails from './pages/ComponentDetails.jsx';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/component/:id" element={<ComponentDetails />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
