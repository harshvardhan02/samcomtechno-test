import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from './views/UserList';
import Header from './views/Header';
import Favourites from './views/Favourites';
import UserDetails from './views/UserDetails';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
			<Header/>
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={UserList} />
					<Route exact path={`${process.env.PUBLIC_URL}/favourite`} component={Favourites} />
					<Route exact path={`${process.env.PUBLIC_URL}/userdetails/:id`} component={UserDetails} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
