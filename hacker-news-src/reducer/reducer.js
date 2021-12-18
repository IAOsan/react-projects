export default function reducer(state, action) {
	const actions = {
		SET_PAGE: { ...state, page: action.page },
		SET_QUERY: { ...state, query: action.query },
		SET_TOTAL_PAGES: {
			...state,
			totalPages: action.total || state.totalPages,
		},
		SET_NEWS: { ...state, hits: action.hits || state.hits },
		ON_REMOVE: {
			...state,
			hits: state.hits.filter((item) => item.objectID !== action.id),
		},
	};
	return actions[action.type] || state;
}
