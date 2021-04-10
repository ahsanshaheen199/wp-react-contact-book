export const ContactReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_CONTACTS':
			return {
				...state,
				isLoading: false,
				contacts: [...action.payload],
			};
	}
	return state;
};
