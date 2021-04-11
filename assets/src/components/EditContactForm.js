import { __ } from '@wordpress/i18n';
import { useContext, useState, useEffect } from '@wordpress/element';
import { ContactContext } from '../context/ContactContext';
import { editContact, isLoading } from '../actions/contactActions';
import { useParams, useHistory } from 'react-router-dom';
import { fetchContactRequest, editContactRequest } from '../http/serverRequest';

export const EditContactForm = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
	});

	const { contactId } = useParams();
	const { state, dispatch } = useContext(ContactContext);
	const { loading } = state;

	useEffect(() => {
		dispatch(isLoading(true));
		fetchContactRequest(contactId).then((data) => {
			setContact({
				...data.contact,
			});

			dispatch(isLoading(false));
		});
	}, [contactId]);

	const history = useHistory();

	const editContactData = (e) => {
		e.preventDefault();
		editContactRequest(contact, contactId).then((data) => {
			dispatch(editContact(contact, contactId));
			history.push('/');
		});
	};

	const contactData = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		!loading && (
			<div className='bg-white rounded showdow p-6'>
				<form onSubmit={editContactData}>
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
						{__('Update Contact', 'wprcb')}
					</button>
				</form>
			</div>
		)
	);
};
