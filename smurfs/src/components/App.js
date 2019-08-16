import React, { Component } from 'react';
import SmurfList from './smurfs/SmurfList';
import SmurfForm from './smurfs/SmurfForm';

import SmurfState from '../context/smurf/SmurfState';

import './App.css';
class App extends Component {
	render() {
		return (
			<SmurfState>
				<div className='App'>
					<h1>SMURFS! 2.0 W/ Redux</h1>
					<SmurfList />
					<SmurfForm />
				</div>
			</SmurfState>
		);
	}
}

export default App;
