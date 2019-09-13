import {
	GET_SMURFS,
	ADD_SMURF,
	DELETE_SMURF,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_SMURF,
	FILTER_SMURFS,
	CLEAR_SMURFS,
	SMURF_ERROR,
	CLEAR_FILTER
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
		case UPDATE_SMURF:
			return {
				...state,
				smurfs: state.smurfs.map(smurf =>
					smurf.id === action.payload.id ? action.payload : smurf
				),
				loading: false
			};
		case DELETE_SMURF:
			return {
				...state,
				smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
				loading: false
			};
		case CLEAR_SMURFS:
			return {
				...state,
				smurfs: null,
				filtered: null,
				error: null,
				current: null
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case FILTER_SMURFS:
			return {
				...state,
				filtered: state.smurfs.filter(smurf => {
					// used regex to grab the text that matches the name from the payload and use 'gi' to make case insensitive.
					const regex = new RegExp(`${action.payload}`, 'gi');
					// return name with match against reg expression that returns anything that matches text passed in from the payload
					return smurf.name.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null
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
