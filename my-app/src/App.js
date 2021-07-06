import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Main from './componenets/Main';
import Favorite  from './componenets/Favorite';

export class App extends Component {

	render() {
		return (
			<>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Main />
						</Route>
						<Route exact path="/favorite">
							<Favorite />
						</Route>
					</Switch>
				</Router>
			</>
		)
	}
}

export default App;