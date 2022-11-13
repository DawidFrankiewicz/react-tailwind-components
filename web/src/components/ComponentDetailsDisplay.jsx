import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComponentsData } from '../database/mongodb.js';

export default function componentDetailsDisplay() {
	const [isLoading, setIsLoading] = useState(true);
	const [componentData, setComponentData] = useState({});
	// TODO pass data from ComponentsGrid.jsx to ComponentDetails.jsx via router, still load from db if no data passed

	const { id } = useParams();
	useEffect(() => {
		getComponentsData(id).then((data) => {
			// Not found error handling
			if (!data) return (window.location.href = '/NotFound');
			setComponentData(data);
			setIsLoading(!isLoading);
		});
	}, []);

	return (
		<div>
			{isLoading ? (
				<div className="flex justify-center items-center my-14">
					<div className="animate-spin rounded-full h-32 w-32 border-b-4 border-react-blue"></div>
				</div>
			) : (
				<>
					<h1 className="font-bold text-red-600">
						{componentData.name}
					</h1>
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
					<div className="bg-blue-50 p-2 rounded-lg">
						CODE CONTENT:
						<pre>
							<embed
								style={{ width: '100%', height: '100%' }}
								src={componentData.code_path}
							></embed>
						</pre>
					</div>
				</>
			)}
		</div>
	);
}
