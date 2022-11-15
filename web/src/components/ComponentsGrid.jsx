import { useState, useEffect } from 'react';
// import { getComponentsData } from '../database/mongodb.js';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadComponents } from '../actions/components.js';

export default function ComponentsGrid() {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	// const [componentsData, setComponentsData] = useState([]);

	const componentsData = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		loadComponents(dispatch('loadComponents'));
		console.log(componentsData);
		setIsLoading(false);
		// Get all components from db
		// getComponentsData()
		// 	.then((data) => {
		// 		setComponentsData(data);
		// 		setIsLoading(!isLoading);
		// 	})
		// 	.catch((err) => {
		// 		setError(err);
		// 		console.error(err);
		// 	});
	}, []);

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
								<Link
									key={index}
									to={`/component/${component._id.valueOf()}`}
									state={component}
									className="group cursor-pointer relative border-2 border-transparent before:rounded-lg before:p-[2px] before:special-border before:special-border-gradient"
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
								</Link>
							);
						})}
					</main>
				)
			)}
		</div>
	);
}
