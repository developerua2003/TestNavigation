import * as React from 'react';
import MenuItem from './MenuItem';

import '../../styles/menu.scss';

const Menu: React.FC = () => {
	return (
		<div className="menu">
			<div className="menu_navBlock">
				<div className="menu_navBlock_devName">
					<span>David</span>
				</div>
				<div className="menu_navBlock_items">
					<MenuItem href={"/start"} >
						Start
					</MenuItem>
					<MenuItem href={"/yourCart"} >
						Your Cart
					</MenuItem>
					<MenuItem href={"/favourites"} >
						Favourites
					</MenuItem>
					<MenuItem href={"/yourOrders"} >
						Your Orders
					</MenuItem>
				</div>
			</div>
		</div>
	);
};

export default Menu;
