import React, {useContext} from 'react';
import SmurfContext from '../../context/smurf/smurfContext'

const SmurfItem = ({smurf}) => {
	const smurfContext = useContext(SmurfContext);
	// const { deleteSmurf } = smurfContext

	const {id, name, age, height} = smurf;

	return(
		 <div>
			 <h1>{name}</h1>
			 <h3>Age:{age} Height: {height}</h3>
		 <button>Delete</button>
		 </div>
		 );
};

export default SmurfItem;
