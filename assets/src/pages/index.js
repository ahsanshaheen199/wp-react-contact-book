import { __ } from '@wordpress/i18n';
import { Link } from 'react-router-dom';
import { ContactList } from '../components/ContactList';

export const ContactListPage = () => {
	return (
		<>
			<div className='bg-white rounded shadow p-4 flex items-center'>
				<div className='w-1/2'>
					<h2 className='text-2xl'>{__('Contact List', 'wprcb')}</h2>
				</div>
				<div className='w-1/2 text-right'>
					<Link
						to='/add'
						className='bg-blue-700 hover:bg-blue-800 px-6 py-3 hover:text-white text-white font-medium rounded mr-3'>
						{__('Add Contact', 'wprcb')}
					</Link>
				</div>
			</div>
			<ContactList />
		</>
	);
};
