import apiFetch from '@wordpress/api-fetch';

export const fetchContactsRequest = () => {
	return apiFetch({
		path: `/wprcb/v1/contacts`,
		headers: {
			'X-WP-Nonce': wprcbData.nonce,
		},
	});
};

export const deleteContactRequest = (contactId) => {
	return apiFetch({
		path: `/wprcb/v1/contact/${contactId}`,
		method: 'DELETE',
		headers: {
			'X-WP-Nonce': wprcbData.nonce,
		},
	});
};

export const addContactRequest = (contact) => {
	return apiFetch({
		path: `/wprcb/v1/contacts`,
		method: 'POST',
		body: JSON.stringify(contact),
		headers: {
			'X-WP-Nonce': wprcbData.nonce,
		},
	});
};

export const fetchContactRequest = (contactId) => {
	return apiFetch({
		path: `/wprcb/v1/contact/${contactId}`,
		headers: {
			'X-WP-Nonce': wprcbData.nonce,
		},
	});
};

export const editContactRequest = (contact, contactId) => {
	return apiFetch({
		path: `/wprcb/v1/contact/${contactId}`,
		body: JSON.stringify(contact),
		method: 'PUT',
		headers: {
			'X-WP-Nonce': wprcbData.nonce,
		},
	});
};
