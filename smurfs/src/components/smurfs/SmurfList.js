import React, { Fragment, useContext, useEffect } from 'react';
import SmurfItem from './SmurfItem';
import SmurfContext from '../../context/smurf/smurfContext';

const SmurfList = () => {
	const smurfContext = useContext(SmurfContext);
	const { smurfs, getSmurfs } = smurfContext;

	useEffect(() => {
		getSmurfs();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			{smurfs && smurfs.map(smurf => <SmurfItem smurf={smurf} key={smurf.id} />)}
		</Fragment>
	);
};

export default SmurfList;
