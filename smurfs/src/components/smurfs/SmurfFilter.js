import React, { useContext, useRef, useEffect } from 'react';
import SmurfContext from '../../context/smurf/smurfContext';

const SmurfFilter = () => {
	const smurfContext = useContext(SmurfContext);
	const text = useRef('');

	const { filterSmurfs, clearFilter, filtered } = smurfContext;

	useEffect(() => {
		if (filtered == null) {
			text.current.value = '';
		}
	});

	const onChange = e => {
		if (text.current.value !== '') {
			filterSmurfs(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				ref={text}
				type='text'
				placeholder='Filter Contacts'
				onChange={onChange}
			/>
		</form>
	);
};

export default SmurfFilter;
