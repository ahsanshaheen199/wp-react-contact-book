import { render } from '@wordpress/element';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AddContact } from './pages/AddContact';
import { EditContact } from './pages/EditContact';
import { ContactListPage } from './pages/index';
import { NotFound } from './pages/NotFound';
import './index.css';
import { ContactProvider } from './context/ContactContext';

const App = () => {
	return (
		<>
			<HashRouter>
				<ContactProvider>
					<Switch>
						<Route path='/' exact component={ContactListPage} />
						<Route path='/add' component={AddContact} />
						<Route
							path='/:contactId/edit'
							component={EditContact}
						/>
						<Route path='*' exact component={NotFound} />
					</Switch>
				</ContactProvider>
			</HashRouter>
		</>
	);
};

render(<App />, document.getElementById('root'));
