import React, { useState, useContext, useEffect } from 'react';
import SmurfContext from '../../context/smurf/smurfContext';

const SmurfForm = () => {
	// access to any methods or stat with this variable
	const smurfContext = useContext(SmurfContext);
	// get addSmurf from destructuring
	const { addSmurf, clearCurrent, updateSmurf, current } = smurfContext;

	useEffect(() => {
		if (current !== null) {
			setSmurf(current);
		} else {
			setSmurf({
				name: '',
				age: '',
				height: ''
			});
		}
	}, [smurfContext, current]);

	// create local state for the form
	const [smurf, setSmurf] = useState({
		name: '',
		age: '',
		height: ''
	});

	const { name, age, height } = smurf;

	console.log('smurf form', smurf);

	const handleChanges = e => {
		setSmurf({ ...smurf, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		if (current === null) {
			addSmurf(smurf);
		} else {
			updateSmurf(smurf);
		}
		setSmurf({
			name: '',
			age: '',
			height: ''
		});
		console.log(smurf);
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			{console.log('onSubmit', onSubmit)}
			<h2 className='text-primary'>{current ? 'Edit Smurf' : 'Add Smurf'}</h2>
			<input
				type='text'
				placeholder='name'
				name='name'
				value={name}
				onChange={handleChanges}
			/>
			<input
				type='text'
				placeholder='age'
				name='age'
				value={age}
				onChange={handleChanges}
			/>
			<input
				type='text'
				placeholder='height'
				name='height'
				value={height}
				onChange={handleChanges}
			/>
			<div>
				<input 
					type='submit' 
					value={current ? 'Edit Smurf' : 'Add Smurf'} 
					className='btn btn-primary btn-block'
				/>
			</div>

			{current && (
				<div>
					<button className= 'btn btn-light btn-block' onClick={clearAll}>clear</button>
				</div>
			)}
		</form>
	);
};

export default SmurfForm;
