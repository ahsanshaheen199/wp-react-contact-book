import { __ } from '@wordpress/i18n';
import { AddContactForm } from '../components/AddContactForm';
import { Header } from '../components/Header';

export const AddContact = () => {
	return (
		<>
			<Header title={__('Add Contact', 'wprcb')} />
			<div className='flex justify-center mt-8'>
				<div className='w-1/3'>
					<AddContactForm />
				</div>
			</div>
		</>
	);
};
