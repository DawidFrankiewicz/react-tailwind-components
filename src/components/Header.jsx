import React from 'react';
import reactLogo from '../assets/react.svg';

function App() {
	return (
		<header className="flex items-center justify-between p-4 gap-4 rounded-b-lg shadow-md">
			<div>
				<p className="text-5xl font-black inline bg-clip-text text-transparent bg-gradient-to-br from-react-blue to-indigo-700">
					D&M Hub
				</p>
			</div>
			<div className="flex items-center gap-4">
				<h1 className="font-bold text-3xl">
					TailwindCSS Components for
					<span className="text-react-blue font-black"> React</span>
				</h1>
				<img
					src={reactLogo}
					className="animate-spin [animation-duration:12s] logo react w-10 h-10"
					alt="React logo"
				/>
			</div>
		</header>
	);
}

export default App;
