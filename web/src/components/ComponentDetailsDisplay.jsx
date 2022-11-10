import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComponentsData } from '../database/mongodb.js';

export default function componentDetailsDisplay() {
	const [componentData, setComponentData] = useState({});
	// TODO pass data from ComponentsGrid.jsx to ComponentDetails.jsx via router, still load from db if no data passed

	const { id } = useParams();
	useEffect(() => {
		getComponentsData().then((data) => {
			const component = data.find((component) => {
				let componentId = component._id.valueOf();
				return componentId == id;
			});
			// Not found error handling
			if (!component) return (window.location.href = '/NotFound');
			setComponentData(component);
		});
	}, []);

	return (
		<div>
			<h1 className="font-bold text-red-600">{componentData.name}</h1>
			<img
				src={window.location.origin + componentData.thumbnail}
				alt={componentData.name}
			></img>
			<p className="font-bold text-blue-600">
				Description:
				<span className="font-thin text-gray-900">
					{componentData.description}
				</span>
			</p>
			<div>
				CODE CONTENT:
				<code className="bg-blue-50 p-2 rounded-lg ">
					{componentData.code}
				</code>
			</div>
		</div>
	);
}
