import { Header } from '../components/Header';
import { __ } from '@wordpress/i18n';
import { ContactList } from '../components/ContactList';

export const ContactListPage = () => {
	return (
		<>
			<Header title={__('Contact List', 'wprcb')} />
			<ContactList />
		</>
	);
};
