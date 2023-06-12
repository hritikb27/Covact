import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface ContactState {
    firstName: string,
    lastName: string,
    status: boolean,
    contact: number
}

// Define the initial state using that type
const initialState: ContactState[] = [{
    contact: 0,
    firstName: 'John',
    lastName: 'Doe',
    status: true,
}]

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<ContactState>) => {
            state.push(action.payload);
        },
    }
});

// this is for dispatch
export const { addContact } = contactSlice.actions;
export const selectCount = (state: RootState) => state.contacts

// this is for configureStore
export default contactSlice.reducer;