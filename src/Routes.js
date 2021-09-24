import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
const Page = () => {
	return (
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route><div>Page not found</div></Route>
			</Switch>
		);
}
export default Page;