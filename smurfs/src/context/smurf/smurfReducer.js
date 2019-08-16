import {
	GET_SMURFS,
	ADD_SMURF,
	DELETE_SMURF,
	UPDATE_SMURF,
	SMURF_ERROR
} from '../types';

export default (state, action) => {
	console.log(action);
	switch (action.type) {
		case GET_SMURFS:
			return {
				...state,
				smurfs: action.payload,
				loading: false
			};
		case ADD_SMURF:
			return {
				...state,
				smurfs: [action.payload, ...state.smurfs],
				loading: false
			};
		case DELETE_SMURF:
			return {
				...state,
				smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
				loading: false
			};
		case SMURF_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
