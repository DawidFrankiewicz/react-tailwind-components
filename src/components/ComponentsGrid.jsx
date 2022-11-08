import { useState } from 'react';

function ComponentsGrid() {
	// components data array
	const [componentsData, setComponentsData] = useState([
		{
			id: 1,
			name: 'Button',
			thumbnail: 'https://i.imgur.com/4Q4Q4Q4.png',
			description: 'Button component'
		},
		{
			id: 2,
			name: 'Card',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Card component'
		},
		{
			id: 3,
			name: 'Input',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Input component'
		},
		{
			id: 4,
			name: 'Navbar',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Navbar component'
		}
	]);

	const openComponentRoute = (id) => {
		window.location.href = '/component/' + id;
	};

	return (
		<main className="grid md:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
			{componentsData.map((component, index) => (
				<div
					key={index}
					className="group cursor-pointer"
					onClick={() => openComponentRoute(component.id)}
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
