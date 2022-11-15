import { getComponentsData } from '../database/mongodb.js';
// import { useDispatch } from 'react-redux';

export const loadComponents = (dispatch) => {
	return getComponentsData()
		.then((data) => {
			dispatch(loadComponentsAction(data));
		})
		.catch((err) => {
			console.error(err);
		});
};

const loadComponentsAction = (data) => {
	return {
		type: 'LOAD_COMPONENTS',
		payload: data
	};
};
