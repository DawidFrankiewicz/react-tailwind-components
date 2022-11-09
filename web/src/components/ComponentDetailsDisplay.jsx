import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function componentDetailsDisplay() {
	const [componentData, setComponentData] = useState({});
	const [componentsData, setComponentsData] = useState([
		{
			id: 1,
			name: 'Button',
			thumbnail: '/img/D&M.webp',
			description: 'Button component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
		},
		{
			id: 2,
			name: 'Card',
			thumbnail: '/img/D&M.webp',
			description: 'Card component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
		},
		{
			id: 3,
			name: 'Input',
			thumbnail: '/img/D&M.webp',
			description: 'Input component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
		},
		{
			id: 4,
			name: 'Navbar',
			thumbnail: '/img/D&M.webp',
			description: 'Navbar component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
		}
	]);

	const { id } = useParams();

	useEffect(() => {
		const component = componentsData.find(
			(component) => component.id == id
		);
		// Not found error handling
		if (!component) return (window.location.href = '/NotFound');

		setComponentData(component);
	}, []);

	return (
		<div id={componentData.id}>
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
