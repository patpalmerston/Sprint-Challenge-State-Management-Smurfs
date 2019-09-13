import React, { Component, useEffect } from 'react';
import SmurfList from './smurfs/SmurfList';
import SmurfForm from './smurfs/SmurfForm';
import SmurfFilter from './smurfs/SmurfFilter';

import SmurfState from '../context/smurf/SmurfState';

import './App.css';
class App extends Component {
	render() {
		return (
			<SmurfState>
				<div className='container'>
					<SmurfForm />
          <SmurfFilter />
					<SmurfList />
				</div>
			</SmurfState>
		);
	}
}

export default App;
