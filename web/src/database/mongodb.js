import axios from 'axios';

export const getComponentsData = async (id) => {
	if (id) {
		const response = await axios.get(
			`http://127.0.0.1:5000/data/components/${id}`
		);
		return response.data;
	}
	const response = await axios.get('http://127.0.0.1:5000/data/components');
	return response.data;
};
