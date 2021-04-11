export const ContactReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_CONTACTS':
			return {
				...state,
				contacts: [...action.payload],
			};
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: [
					...state.contacts.filter(
						(contact) => contact.id !== action.payload
					),
				],
			};
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [action.payload, ...state.contacts],
			};
		case 'EDIT_CONTACT':
			return {
				...state,
				contacts: [
					...state.contacts.filter((contact) =>
						contact.id === action.contactId
							? action.contact
							: contact
					),
				],
			};
		case 'IS_LOADING':
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
