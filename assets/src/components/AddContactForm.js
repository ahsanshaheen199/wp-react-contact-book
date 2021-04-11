import { __ } from '@wordpress/i18n';
import { useContext, useState } from '@wordpress/element';
import { ContactContext } from '../context/ContactContext';
import { addContact } from '../actions/contactActions';
import { addContactRequest } from '../http/serverRequest';
import { useHistory } from 'react-router-dom';

export const AddContactForm = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
	});

	const { state, dispatch } = useContext(ContactContext);

	const history = useHistory();

	const addContactData = (e) => {
		e.preventDefault();
		addContactRequest(contact, contactId).then((data) => {
			dispatch(addContact(contact));
			history.push('/');
		});
	};

	const contactData = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className='bg-white rounded showdow p-6'>
			<form onSubmit={addContactData}>
				<div className='mb-4'>
					<input
						className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
						type='text'
						placeholder={__('Full Name', 'wprcb')}
						name='name'
						value={contact.name}
						onChange={contactData}
					/>
				</div>
				<div className='mb-4'>
					<div className='flex -mx-4'>
						<div className='w-1/2 px-4'>
							<input
								className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
								type='email'
								placeholder={__('Email Address', 'wprcb')}
								name='email'
								value={contact.email}
								onChange={contactData}
							/>
						</div>
						<div className='w-1/2 px-4'>
							<input
								className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
								type='text'
								placeholder={__('Phone', 'wprcb')}
								name='phone'
								value={contact.phone}
								onChange={contactData}
							/>
						</div>
					</div>
				</div>
				<div className='mb-4'>
					<textarea
						className='w-full wprcb-input placeholder-gray-500 text-gray-800 font-medium focus:border-blue-600'
						type='text'
						placeholder={__('Address', 'wprcb')}
						name='address'
						value={contact.address}
						onChange={contactData}></textarea>
				</div>
				<button
					type='submit'
					className='bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-medium rounded'>
					{__('Add Contact', 'wprcb')}
				</button>
			</form>
		</div>
	);
};
