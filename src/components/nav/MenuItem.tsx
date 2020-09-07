import React from 'react';
import { NavLink } from 'react-router-dom';

interface IPopoverMenuProps {
	children: React.ReactChildren | string | React.ReactNode;
	href: string;
}


const MenuItem: React.FC<IPopoverMenuProps> = (props: IPopoverMenuProps) => {
	return (
		<NavLink
			to={props.href}
			className={"navLink"}
		>
			<span>{props.children}</span>
		</NavLink>
	);
};

export default MenuItem;
