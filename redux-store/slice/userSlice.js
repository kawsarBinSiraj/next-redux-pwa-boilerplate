import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		name: 'Kawsar Bin Siraj',
		age: 28,
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
