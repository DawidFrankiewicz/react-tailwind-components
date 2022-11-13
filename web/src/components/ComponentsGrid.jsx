import { useState, useEffect } from 'react';
import { getComponentsData } from '../database/mongodb.js';

function ComponentsGrid() {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	// components data array
	const [componentsData, setComponentsData] = useState([]);

	useEffect(() => {
		getComponentsData()
			.then((data) => {
				setComponentsData(data);
				setIsLoading(!isLoading);
			})
			.catch((err) => {
				setError(err);
				console.error(err);
			});
	}, []);

	const openComponentRoute = (id) => {
		window.location.href = '/component/' + id;
	};

	return (
		<div className="container mx-auto">
			{error && (
				<div className="flex justify-center items-center my-14">
					<h1 className="text-red-600 text-2xl font-bold">
						Error loading components, try again later
					</h1>
				</div>
			)}
			{isLoading && !error ? (
				<div className="flex justify-center items-center my-14">
					<div className="animate-spin rounded-full h-32 w-32 border-b-4 border-react-blue"></div>
				</div>
			) : (
				!error && (
					<main className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-5 ">
						{componentsData.map((component, index) => {
							return (
								<div
									key={index}
									className="group cursor-pointer relative border-2 border-transparent before:rounded-lg before:p-[2px] before:special-border before:special-border-gradient"
									onClick={() =>
										openComponentRoute(
											component._id.valueOf()
										)
									}
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
							);
						})}
					</main>
				)
			)}
		</div>
	);
}

export default ComponentsGrid;
