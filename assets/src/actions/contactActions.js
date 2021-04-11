export const fetchContacts = (contacts) => {
	return {
		type: 'FETCH_CONTACTS',
		payload: contacts,
	};
};

export const deleteContact = (id) => {
	return {
		type: 'DELETE_CONTACT',
		payload: id,
	};
};

export const addContact = (contact) => {
	return {
		type: 'ADD_CONTACT',
		payload: contact,
	};
};

export const isLoading = (value) => {
	return {
		type: 'IS_LOADING',
		payload: value,
	};
};

export const editContact = (contact, contactId) => {
	return {
		type: 'EDIT_CONTACT',
		contact,
		contactId,
	};
};
