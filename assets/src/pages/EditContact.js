import { __ } from '@wordpress/i18n';
import { Link } from 'react-router-dom';
import { EditContactForm } from '../components/EditContactForm';

export const EditContact = () => {
	return (
		<>
			<div className='bg-white rounded shadow p-4 flex items-center'>
				<div className='w-1/2'>
					<h2 className='text-2xl'>{__('Edit Contact', 'wprcb')}</h2>
				</div>
				<div className='w-1/2 text-right'>
					<Link
						to='/'
						className='bg-blue-700 hover:bg-blue-800 px-6 py-3 hover:text-white text-white font-medium rounded mr-3'>
						{__('Back to home', 'wprcb')}
					</Link>
				</div>
			</div>
			<div className='flex justify-center mt-8'>
				<div className='w-1/3'>
					<EditContactForm />
				</div>
			</div>
		</>
	);
};
