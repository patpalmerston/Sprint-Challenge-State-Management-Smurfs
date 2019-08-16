import React, { useReducer } from 'react';
import axios from 'axios';

import SmurfContext from './smurfContext';
import smurfReducer from './smurfReducer';

import {
	GET_SMURFS,
	ADD_SMURF,
	DELETE_SMURFS,
	UPDATE_SMURFS,
	SMURF_ERROR
} from '../types';

const SmurfState = props => {
	const initialState = {
		smurfs: null,
		error: null
	};

	const [state, dispatch] = useReducer(smurfReducer, initialState);

	// Get Smurfs
	const getSmurfs = async () => {
		try {
			const res = await axios.get('http://localhost:3333/smurfs');
			dispatch({
				type: GET_SMURFS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: SMURF_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Add Smurfs
	const addSmurf = async smurf => {
		try {
      const res = await axios.post('http://localhost:3333/smurfs', smurf);
      
			dispatch({
				type: ADD_SMURF,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: SMURF_ERROR,
				payload: err.response.msg
			});
		}
	};

	//Delete Smurfs

	//Edit Smurfs

	return (
		<SmurfContext.Provider
			value={{
				smurfs: state.smurfs,
				error: state.error,
				getSmurfs,
				addSmurf
			}}
		>
			{props.children}
		</SmurfContext.Provider>
	);
};

export default SmurfState;
