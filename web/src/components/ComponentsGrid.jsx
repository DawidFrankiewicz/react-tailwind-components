import { useState, useEffect } from 'react';
import { getComponentsData } from '../database/mongodb.js';

function ComponentsGrid() {
	// components data array
	const [componentsData, setComponentsData] = useState([]);

	useEffect(() => {
		getComponentsData().then((data) => {
			setComponentsData(data);
		});
	}, []);

	const openComponentRoute = (id) => {
		window.location.href = '/component/' + id;
	};

	return (
		<main className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
			{componentsData.map((component, index) => (
				<div
					key={index}
					className="group cursor-pointer relative border-2 border-transparent before:rounded-lg before:p-[2px] before:special-border before:special-border-gradient"
					onClick={() => openComponentRoute(component._id.valueOf())}
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
