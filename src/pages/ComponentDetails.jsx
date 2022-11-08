import { useState } from 'react';
export default function componentDetails() {
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

	// get the id from the url
	const id = window.location.href.split('/').pop();

	return (
		<div>
			<h1 className="font-bold text-red-600">
				{componentsData[id].name}
			</h1>
			<img
				src={componentsData[id].thumbnail}
				alt={componentsData[id].name}
			></img>
			<p className="font-bold text-blue-600">
				Description:
				<span className="font-thin text-gray-900">
					{componentsData[id].description}
				</span>
			</p>
			<p className="font-bold text-blue-600">
				Path:
				<span className="font-thin text-gray-900">
					{componentsData[id].path}
				</span>
			</p>
		</div>
	);
}
