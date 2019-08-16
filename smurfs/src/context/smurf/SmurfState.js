import React, { useReducer } from 'react';
import axios from 'axios';

import SmurfContext from './smurfContext';
import smurfReducer from './smurfReducer';

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

const SmurfState = props => {
	const initialState = {
		smurfs: null,
		current: null,
		filtered: null,
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
			getSmurfs();
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

	const deleteSmurf = async id => {
		try {
			await axios.delete(`http://localhost:3333/smurfs/${id}`);

			dispatch({
				type: DELETE_SMURF,
				payload: id
			});
		} catch (err) {
			dispatch({
				type: SMURF_ERROR,
				payload: err.response.msg
			});
		}
	};

	//Edit Smurfs
	const updateSmurf = async smurf => {
		try {
			const res = await axios.put(
				`http://localhost:3333/smurfs/${smurf.id}`,
				smurf
			);

			dispatch({
				type: UPDATE_SMURF,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				tpe: SMURF_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Clear Smurfs
	const clearSmurfs = () => {
		dispatch({ type: CLEAR_SMURFS });
	};

	// Set Current Smurf
	const setCurrent = smurf => {
		dispatch({ type: SET_CURRENT, payload: smurf });
	};

	// Clear Current Smurf
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Filter Smurfs
	const filterSmurfs = text => {
		dispatch({ type: FILTER_SMURFS, payload: text });
	};

	// Clear Filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<SmurfContext.Provider
			value={{
        smurfs: state.smurfs,
        current: state.current,
        filtered: state.filtered,
				error: state.error,
				getSmurfs,
				addSmurf,
				deleteSmurf,
				updateSmurf,
				clearSmurfs,
				setCurrent,
				clearCurrent,
				filterSmurfs,
				clearFilter
			}}
		>
			{props.children}
		</SmurfContext.Provider>
	);
};

export default SmurfState;
