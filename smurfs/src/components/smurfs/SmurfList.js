import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SmurfItem from './SmurfItem';
import Spinner from '../layout/Spinner';
import SmurfContext from '../../context/smurf/smurfContext';

const SmurfList = () => {
	const smurfContext = useContext(SmurfContext);
	const { smurfs, filtered, getSmurfs, loading } = smurfContext;

	useEffect(() => {
		getSmurfs();
		// eslint-disable-next-line
	}, []);

	if (smurfs !== null && smurfs.length === 0 && !loading) {
		return <h4>Please add a Smurf!</h4>;
	}

	return (
		<Fragment>
			{smurfs !== null && !loading ? (
				<TransitionGroup>
					{filtered !== null
						? filtered.map(smurf => (
								<CSSTransition key={smurf.id} timeout={500} classNames='item'>
									<SmurfItem smurf={smurf} />
								</CSSTransition>
						  ))
						: smurfs.map(smurf => (
								<CSSTransition key={smurf.id} timeout={500} classNames='item'>
									<SmurfItem smurf={smurf} />
								</CSSTransition>
						  ))}
				</TransitionGroup>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default SmurfList;
