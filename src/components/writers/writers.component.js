import React, { Fragment } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import Writer from './writer.component';
import {NotFound} from '../errors/errors.component';

export default ({ match: { url }, writers }) => (
	// {history: {…}, location: {…}, match: {…}, staticContext: undefined, writers: Array(5)}

	// const { writers } = props;

	<Fragment>
		<ul>
			{writers.map(({ id, name }) => (
				<li key={id}>
					<Link to={`${url}/${id}`}>{name}</Link>
				</li>
			))}
		</ul>
		{/* <Route path={`${url}/:writerId`} render={
			props => <Writer {...props}/>} /> */}
		<Route exact path={url} render={() => <h4>wybierz autora</h4>} />
		<Route
			path={`${url}/:writerId`}
			render={(props) => {
				const writer = writers.find(
					({id}) => id === props.match.params.writerId
				);
				if (!writer) {
					// return <Redirect to="/404" />;
					return <NotFound />
				}
				return <Writer {...props} {...writer} />;
			}}
		/>
	</Fragment>
);
