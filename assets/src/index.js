import { render } from '@wordpress/element';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';

const App = () => {
	return (
		<>
			<HashRouter>
				<Switch>
					<Route path='/' exact component={Table} />
					<Route path='/edit' component={Header} />
				</Switch>
			</HashRouter>
		</>
	);
};

render(<App />, document.getElementById('root'));
