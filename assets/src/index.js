import { render } from '@wordpress/element';
import { Header } from './components/Header';
import './index.css';

const App = () => {
	return <Header />;
};

render(<App />, document.getElementById('root'));
