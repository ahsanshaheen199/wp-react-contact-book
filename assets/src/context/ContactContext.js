import { createContext, useReducer } from '@wordpress/element';
import { ContactReducer } from '../reducer/ContactReducer';

const initialState = {
	loading: true,
	contacts: [],
};

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ContactReducer, initialState);
	return (
		<ContactContext.Provider value={{ state, dispatch }}>
			{children}
		</ContactContext.Provider>
	);
};
