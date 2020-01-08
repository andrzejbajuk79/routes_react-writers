import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

import Writers from './writers/writers.component';
import {NotFound} from './errors/errors.component';

export class App extends Component {
	state = {
		writers: []
	};
	async componentDidMount() {
		const writers = await (await fetch('http://localhost:3004/writers?_embed=texts')).json();
		this.setState({ writers });
	}
	render() {
		const { writers } = this.state;
		return (
			<BrowserRouter>
				<Fragment>
					<h1>test</h1>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/writers">writers</Link>
						</li>
					</ul>
					<hr />
					<Switch>
						<Route exact path="/" render={() => <div>Home</div>} />
						<Route
							path="/writers"
							render={props => <Writers {...props} writers={writers} />}
						/>
						<Route  component={NotFound} />
					</Switch>
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default App;

//  "start": "react-scripts start & json-server --watch store.json --port 3000/writers ",

// import React, { Component } from 'react';
// import { BrowserRouter,Link } from 'react-router-dom';

// export class App extends Component {
// 	state = {
// 		writers: []
// 	};

// 	async componentDidMount() {
// 		const writers = await (await fetch('http://localhost:3004/writers')).json();
// 		this.setState({ writers });

// 		// fetch('http://localhost:3004/writers')
// 		// 	.then(res => res.json())
// 		// 	.then(writers => {
// 		//     console.log(writers);
// 		//     this.setState({ writers:writers})});
// 	}
// 	render() {
// 		return (

// 				<div className='app'>
// 					<ul>

// 						<Link to='/'>home</Link>
//             <Link to='/writers'>writers</Link>
// 					</ul>
// 				</div>

// 		);
// 	}
// }

// export default App;
