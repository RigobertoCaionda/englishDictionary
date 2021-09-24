const initialState = {
	history: []
};
const Page = (state = initialState, action) => {
	let history = [...state.history];
	// eslint-disable-next-line
	switch (action.type) {
		case 'ADD_TO_HISTORY':
			history.unshift(action.payload.word);
			return {...state, history};
		//break;Ja nao vai chegar aqui por causa do return
	}
	return state;
}
export default Page;