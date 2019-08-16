import React, { useContext } from 'react';
import SmurfContext from '../../context/smurf/smurfContext';

const SmurfItem = ({ smurf }) => {
	const smurfContext = useContext(SmurfContext);
	const { deleteSmurf } = smurfContext

	const { id, name, age, height } = smurf;
	console.log('smurfItem', age, name, height, id);

	const onDelete = () => {
		deleteSmurf(id)
	}

	return (
		<div>
			<h1>{name}</h1>
			<h3>
				Age:{age} Height: {height}
			</h3>
			<button onClick={onDelete}>Delete</button>
		</div>
	);
};

export default SmurfItem;
