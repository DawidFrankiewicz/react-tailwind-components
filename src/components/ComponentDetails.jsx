import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
			description: 'Card component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
		},
		{
			id: 3,
			name: 'Input',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Input component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
		},
		{
			id: 4,
			name: 'Navbar',
			thumbnail: 'https://i.imgur.com/4Q4QZ0M.png',
			description: 'Navbar component',
			code: 'const [firstEffect, setFirstEffect] = useState(true);'
		}
	]);

	const { id } = useParams();

	useEffect(() => {
		if (firstEffect) {
			const component = componentsData.find(
				(component) => component.id === parseInt(id)
			);
			setComponentData(component);
			console.log('test');

			setFirstEffect(false);
		} else {
			console.log('test2');
		}
	}, []);

	return (
		<div id={componentData.id}>
			<h1 className="font-bold text-red-600">{componentData.name}</h1>
			<img src={componentData.thumbnail} alt={componentData.name}></img>
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
