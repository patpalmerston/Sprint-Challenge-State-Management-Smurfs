import React, { useState, useContext, useEffect } from 'react';
import SmurfContext from '../../context/smurf/smurfContext';

const SmurfForm = () => {
	// access to any methods or stat with this variable
	const smurfContext = useContext(SmurfContext);
	// get addSmurf from destructuring
	const { addSmurf } = smurfContext;


	// useEffect(() => {
	// 	setSmurf({
	// 		name: '',
	// 		age: '',
	// 		height: ''
	// 	});
	// }, [smurfContext]);

	// create local state for the form
	const [smurf, setSmurf] = useState({
		name: '',
		age: '',
		height: '',
	
	});

	// const { name, age, height } = smurf;
	console.log('smurf form',smurf)

	const handleChanges = e => {
		setSmurf({ ...smurf, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		addSmurf(smurf);
		setSmurf({
			name: '',
			age: '',
			height: ''
		})
		console.log(smurf);
	};

	return (
		<form onSubmit={onSubmit}>
			{console.log('onSubmit', onSubmit)}
			<input
				type='text'
				placeholder='name'
				name='name'
				// value={name}
				onChange={handleChanges}
			/>
			<input
				type='text'
				placeholder='age'
				name='age'
				// value={age}
				onChange={handleChanges}
			/>
			<input
				type='text'
				placeholder='height'
				name='height'
				// value={height}
				onChange={handleChanges}
			/>
			<button onClick={onSubmit}>Add Smurf</button>
		</form>
	);
};

export default SmurfForm;
