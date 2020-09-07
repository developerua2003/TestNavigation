import * as React from 'react';
import { Redirect, Route, RouteProps, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Layout from '../components/nav/Layout';
import Start from '../components/Start';
import YourCart from '../components/Start';
import Favourites from '../components/Start';
import YourOrder from '../components/Start';

interface IPrivateRouteProps extends RouteProps {
	component: any;
}

const RestrictedRoute = (props: IPrivateRouteProps) => {
	const { component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={routeProps => (
				<Layout>
					<Component {...routeProps} />
				</Layout>
			)}
		/>
	);
};


const AppNavigator: React.FC<RouteComponentProps> = ({ location }) => {

	return (
		<React.Fragment>
			<Switch location={location}>
				<RestrictedRoute path="/start" exact component={Start} />
				<RestrictedRoute path="/yourCart" exact component={YourCart} />
				<RestrictedRoute path="/favourites" exact component={Favourites} />
				<RestrictedRoute path="/yourOrders" exact component={YourOrder} />
				<Redirect to="/start" />
			</Switch>
		</React.Fragment>
	);
};

export default withRouter(AppNavigator);