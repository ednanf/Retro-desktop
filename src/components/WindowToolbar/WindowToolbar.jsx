import React from 'react';
import { Toolbar, Button } from 'react95';

function WindowToolbar({ buttonsArray }) {
	return (
		<Toolbar>
			{buttonsArray.map((button) => (
				<Button variant="menu" size="sm" key={button}>
					{button}
				</Button>
			))}
		</Toolbar>
	);
}

export default WindowToolbar;
