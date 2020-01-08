import React, { Fragment } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import { NotFound } from '../errors/errors.component';
import Book from './books.component';

export default ({
	match: { url },
	name,
	deceased,
	born,
	description,
	image,
	texts
}) => (
	<Fragment>
		<img src={image} style={{ maxWidth: 300 }} />
		<h2>{name}</h2>
		<h3>
			{born} &mdash; {deceased}
		</h3>
		<p>{description}</p>
		<ul>
			{' '}
			{texts.map(({ id, title }) => (
				<li key={id}>
					<Link to={`${url}/texts/${id}`}>{title}</Link>
				</li>
			))}
		</ul>

		<Route
			path={`${url}/texts/:textId`}
			render={props => {
				const book = texts.find(text => text.id === props.match.params.textId);
				if (!book) {
					return <NotFound />;
				}
				return <Book {...props} {...book} />;
			}}
		/>
	</Fragment>
);
