import { GET_SMURFS, ADD_SMURFS, DELETE_SMURFS, UPDATE_SMURFS } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_SMURFS:
			return {
				...state,
				smurfs: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
