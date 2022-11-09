import { useState } from 'react';

function ComponentsGrid() {
	// components data array
	const [componentsData, setComponentsData] = useState([
		{
			id: 1,
			name: 'Button',
			thumbnail: '/img/D&M.webp',
			description: 'Button component'
		},
		{
			id: 2,
			name: 'Card',
			thumbnail: '/img/D&M.webp',
			description: 'Card component'
		},
		{
			id: 3,
			name: 'Input',
			thumbnail: '/img/D&M.webp',
			description: 'Input component'
		},
		{
			id: 4,
			name: 'Navbar',
			thumbnail: '/img/D&M.webp',
			description: 'Navbar component'
		}
	]);

	const openComponentRoute = (id) => {
		window.location.href = '/component/' + id;
	};

	return (
		<main className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
			{componentsData.map((component, index) => (
				<div
					key={index}
					className="group cursor-pointer relative border-2 border-transparent before:rounded-lg before:p-[2px] before:special-border before:special-border-gradient"
					onClick={() => openComponentRoute(component.id)}
				>
					<div className="bg-slate-300 rounded-t-lg">
						<img
							src={component.thumbnail}
							alt={component.name}
							className="aspect-video object-cover rounded-t-lg"
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
