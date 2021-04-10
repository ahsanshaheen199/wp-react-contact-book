import { useContext, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { fetchContacts } from '../actions/contactActions';
import { ContactContext } from '../context/ContactContext';
import apiFetch from '@wordpress/api-fetch';

export const ContactList = () => {
	const { state, dispatch } = useContext(ContactContext);
	const { isLoading, contacts } = state;
	useEffect(() => {
		apiFetch({
			path: `/wprcb/v1/contacts`,
			headers: {
				'X-WP-Nonce': wprcbData.nonce,
			},
		}).then((data) => {
			dispatch(fetchContacts(data.contacts));
		});
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return (
		!isLoading && (
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
							{contacts.map((contact) => {
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
											<button className='bg-blue-700 hover:bg-blue-800 px-6 py-3 text-white font-medium rounded mr-3'>
												{__('View', 'wprcb')}
											</button>
											<button className='bg-red-700 hover:bg-red-800 px-6 py-3 text-white font-medium rounded'>
												{__('Delete ', 'wprcb')}
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	);
};
