import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { ContactState } from '../../types/contactType';

// Define the initial state using that type
const initialState: ContactState[] = []

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<ContactState>) => {
            state.push(action.payload);
        },
        updateContacts: (state, action: PayloadAction<ContactState[]>) => {
            return action.payload;
        }
    }
});

// this is for dispatch
export const { addContact, updateContacts } = contactSlice.actions;
export const selectCount = (state: RootState) => state.contacts

// this is for configureStore
export default contactSlice.reducer;