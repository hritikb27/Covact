import { Fragment, useEffect, useReducer, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addContact, updateContacts } from '../../features/Contacts/contactSlice'
import { ContactState } from '../../types/contactType'
import { v4 } from 'uuid';

interface ContactFormProps {
    open: boolean
    setOpen: (open: boolean) => void
    contact?: ContactState
}

// Define the state type
interface FormState {
    firstName: string;
    lastName: string;
    status: boolean;
}

// Define the action types
type FormAction =
    | { type: 'UPDATE_FIRST_NAME'; payload: string }
    | { type: 'UPDATE_LAST_NAME'; payload: string }
    | { type: 'UPDATE_STATUS'; payload: boolean }
    | { type: 'RESET_FORM', payload: ContactState };

// initial state
const initialState: FormState = {
    firstName: '',
    lastName: '',
    status: false
};

// Reducer function
const formReducer = (state: FormState = initialState, action: FormAction): FormState => {
    switch (action.type) {
        case 'UPDATE_FIRST_NAME':
            return { ...state, firstName: action.payload };
        case 'UPDATE_LAST_NAME':
            return { ...state, lastName: action.payload };
        case 'UPDATE_STATUS':
            return { ...state, status: action.payload };
        case 'RESET_FORM':
            return action.payload;
        default:
            return state;
    }
};

const ContactForm = ({ open, setOpen, contact }: ContactFormProps) => {
    const [state, dispatchForm] = useReducer(formReducer, contact ? contact : initialState);
    const { contacts } = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const isActive = type !== 'active';
        dispatchForm({ type: 'UPDATE_STATUS', payload: isActive });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(state);
        
        if(contact) {
            const newContacts = contacts.map(item => {
                if(item.id === contact.id) {
                    return {...item, ...state}
                }
                return item
            })
            dispatch(updateContacts(newContacts))
        } else {
            dispatch(addContact({
                id: v4(),
                firstName: state.firstName,
                lastName: state.lastName,
                status: state.status
            }))
        }
        setOpen(false);
    }

    return (<Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                            <div>
                                <div className="mt-3 text-center sm:mt-1">
                                    {/* <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Payment successful
                                    </Dialog.Title> */}
                                    <div className="mt-2">
                                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
                                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                                    Add contact
                                                </h2>
                                            </div>

                                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                                <form className="space-y-6" action="#" method="POST">
                                                    <div className="flex items-center gap-4 sm:gap-0 justify-between">
                                                        <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                                            First Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="email"
                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatchForm({ type: 'UPDATE_FIRST_NAME', payload: e.target.value })}
                                                                name="email"
                                                                value={state.firstName}
                                                                type="text"
                                                                autoComplete="email"
                                                                required
                                                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-4 sm:gap-0 justify-between">
                                                        <div className="flex items-center justify-between">
                                                            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Last Name
                                                            </label>
                                                        </div>
                                                        <div className="mt-2">
                                                            <input
                                                                id="password"
                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { dispatchForm({ type: 'UPDATE_LAST_NAME', payload: e.target.value }) }}
                                                                name="password"
                                                                value={state.lastName}
                                                                type="text"
                                                                autoComplete="current-password"
                                                                required
                                                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between sm:w-[74%] lg:w-[73%]">
                                                        <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Status
                                                        </label>
                                                        <div className="flex flex-col w-[70%] sm:w-auto gap-2 items-start ">
                                                            <div className='flex items-center gap-3 justify-between'>
                                                                <input
                                                                    id={'active'}
                                                                    name="notification-method"
                                                                    type="radio"
                                                                    onChange={(e) => handleStatusChange(e, 'inactive')}
                                                                    defaultChecked={state.status ? true : false}
                                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                />
                                                                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Active
                                                                </label>
                                                            </div>
                                                            <div className='flex items-center gap-3 justify-between'>
                                                                <input
                                                                    id={'inactive'}
                                                                    name="notification-method"
                                                                    type="radio"
                                                                    onChange={(e) => handleStatusChange(e, 'active')}
                                                                    defaultChecked={state.status ? false : true}
                                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                />
                                                                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Inactive
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={handleSubmit}
                                    >
                                        Save Contact
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition.Root>)
}

export default ContactForm;