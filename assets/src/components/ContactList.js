import { useContext, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Link } from 'react-router-dom';
import {
	fetchContacts,
	deleteContact,
	isLoading,
} from '../actions/contactActions';
import { ContactContext } from '../context/ContactContext';
import {
	fetchContactsRequest,
	deleteContactRequest,
} from '../http/serverRequest';

export const ContactList = () => {
	const { state, dispatch } = useContext(ContactContext);
	const { loading, contacts } = state;
	useEffect(() => {
		dispatch(isLoading(true));
		fetchContactsRequest().then((data) => {
			dispatch(fetchContacts(data.contacts));
			dispatch(isLoading(false));
		});
	}, []);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		!loading && (
			<div className='flex justify-center mt-8'>
				<div className='w-2/3'>
					<table className='w-full table-auto rounded'>
						<thead className='bg-gray-800 text-left'>
							<tr>
								<th className='text-white px-6 py-4'>
									{__('ID ', 'wprcb')}
								</th>
								<th className='text-white px-6 py-4'>
									{__('Name ', 'wprcb')}
								</th>
								<th className='text-white px-6 py-4'>
									{__('Email ', 'wprcb')}
								</th>
								<th className='text-white px-6 py-4'>
									{__('Phone ', 'wprcb')}
								</th>
								<th className='text-white px-6 py-4'>
									{__('Address ', 'wprcb')}
								</th>
								<th className='text-white px-6 py-4'>
									{__('Actions ', 'wprcb')}
								</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-200 bg-white'>
							{contacts.length > 0 ? (
								contacts.map((contact) => {
									return (
										<tr key={contact.id}>
											<td className='px-6 py-4 whitespace-nowrap w-2/12'>
												{contact.id}
											</td>
											<td className='px-6 py-4 whitespace-nowrap w-2/12'>
												{contact.name}
											</td>
											<td className='px-6 py-4 whitespace-nowrap w-2/12'>
												{contact.email}
											</td>
											<td className='px-6 py-4 whitespace-nowrap w-2/12'>
												{contact.phone}
											</td>
											<td className='px-6 py-4 whitespace-nowrap w-2/12'>
												{contact.address}
											</td>
											<td className='px-6 py-4 whitespace-nowrap w-2/12'>
												<Link
													to={`/${contact.id}/edit`}
													className='bg-blue-700 hover:bg-blue-800 px-6 py-3 hover:text-white text-white font-medium rounded mr-3'>
													{__('Edit', 'wprcb')}
												</Link>
												<button
													onClick={(e) =>
														deleteContactRequest(
															contact.id
														).then((data) => {
															dispatch(
																deleteContact(
																	contact.id
																)
															);
														})
													}
													className='bg-red-700 hover:bg-red-800 px-6 py-3 text-white font-medium rounded'>
													{__('Delete ', 'wprcb')}
												</button>
											</td>
										</tr>
									);
								})
							) : (
								<tr>
									<td
										colSpan='6'
										className='px-6 py-4 whitespace-nowrap w-full text-center'>
										{__('No Contact Found', 'wprcb')}
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		)
	);
};
