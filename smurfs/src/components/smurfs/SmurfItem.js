import React, { useContext } from 'react';
import SmurfContext from '../../context/smurf/smurfContext';

const SmurfItem = ({ smurf }) => {
	const smurfContext = useContext(SmurfContext);
	const { deleteSmurf, setCurrent, clearCurrent } = smurfContext;

	const { id, name, age, height } = smurf;
	console.log('smurfItem', age, name, height, id);

	const onDelete = () => {
		deleteSmurf(id);
		clearCurrent();
	};

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{name}{' '}
				<span
					style={{ float: 'right' }}
					className={
						'badge' + (age === age < 10 ? 'badge-success' : 'badge-primary')
					}
				>
					info
				</span>
			</h3>

			<ul className='list'>
				{age && (
					<li>
						<i class='fas fa-battery-half' /> {'  '} Age: {' '} {age}
					</li>
				)}
				{height && (
					<li>
						<i class='fas fa-heartbeat' /> {'  '}Height: {' '}{height}
					</li>
				)}
			</ul>
			<p>
				<button
					className='btn btn-dark btn-sm'
					onClick={() => setCurrent(smurf)}
				>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

export default SmurfItem;
