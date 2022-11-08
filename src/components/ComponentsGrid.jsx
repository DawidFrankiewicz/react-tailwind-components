import React from 'react';
import { useState } from 'react';

function ComponentsGrid() {
	// components data array
	const [componentsData, setComponentsData] = useState([
		{
			name: 'Button',
			thumbnail: 'https://i.imgur.com/4Q4Q4Q4.png',
			description: 'Button component',
			path: '/button'
		},
		{
			name: 'Card',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Card component',
			path: '/card'
		},
		{
			name: 'Input',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Input component',
			path: '/input'
		},
		{
			name: 'Navbar',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Navbar component',
			path: '/navbar'
		}
	]);

	const openComponentRoute = (path) => {
		console.log(path);
	};

	return (
		<main className="grid md:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
			{componentsData.map((component, index) => (
				<div
					key={index}
					className="group cursor-pointer"
					onClick={() => openComponentRoute(component.path)}
				>
					<div className="bg-slate-300 rounded-t-lg h-64">
						<img
							src={component.thumbnail}
							alt={component.name}
							className="w-full h-full object-cover rounded-t-lg"
						/>
					</div>
					<div className=" rounded-b-lg shadow-lg p-3">
						<h3 className="text-react-blue font-bold text-2xl group-hover:text-cyan-900 transition-colors group-hover:drop-shadow-lg">
							{component.name}
						</h3>
					</div>
				</div>
			))}
		</main>
	);
}

export default ComponentsGrid;
