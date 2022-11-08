import { useState, useEffect } from 'react';
export default function componentDetails() {
	const [firstEffect, setFirstEffect] = useState(true);
	const [componentData, setComponentData] = useState({});
	const [componentsData, setComponentsData] = useState([
		{
			id: 1,
			name: 'Button',
			thumbnail: 'https://i.imgur.com/4Q4Q4Q4.png',
			description: 'Button component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
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

	useEffect(() => {
		if (firstEffect) {
			const componentId = window.location.href.split('/').pop();
			const component = componentsData.find(
				(component) => component.id === parseInt(componentId)
			);
			setComponentData(component);
			console.log('test');

			setFirstEffect(false);
		} else {
			console.log('test2');
		}
	}, []);

	return (
		<div>
			<h1 className="font-bold text-red-600">{componentData.name}</h1>
			<img src={componentData.thumbnail} alt={componentData.name}></img>
			<p className="font-bold text-blue-600">
				Description:
				<span className="font-thin text-gray-900">
					{componentData.description}
				</span>
			</p>
			<p>
				<p>CODE CONTENT:</p>
				<code className="bg-blue-50 p-2 rounded-lg ">
					{componentsData.code}
				</code>
			</p>
		</div>
	);
}
