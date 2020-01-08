import React, { Fragment } from 'react';

export default ({ match, title, description, published }) =>
	console.log('books com', match) || (
		<Fragment>
			<h4>
				{title} {published ? (`${published}`) : ''}
			</h4>
			<p>{description ? description : <i>Brak Opisu</i>}</p>
		</Fragment>
	);
