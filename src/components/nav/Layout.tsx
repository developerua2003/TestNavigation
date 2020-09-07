import React, {useState} from 'react';

import Menu from './Menu';
import Main from './Main';

import '../../styles/layout.scss';

interface ILayoutProps {
	children: any;
}

const Layout: React.FC<ILayoutProps> = (props) => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const onMenuTrigger = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	return (
		<>
			{isMenuOpened ?
				<>
					<Menu/>
					<Main onMenuTrigger={onMenuTrigger} isSloped={true}>
						{props.children}
					</Main>
				</>
				 : <>
					<Main onMenuTrigger={onMenuTrigger} isSloped={false}>
						{props.children}
					</Main>
				</>}
		</>
	);
};

export default Layout;