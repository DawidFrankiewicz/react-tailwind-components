import axios from 'axios';

export const getComponentsData = async () => {
	const response = await axios.get('http://127.0.0.1:5000/data/components');
	return response.data;
};
