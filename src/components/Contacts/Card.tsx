import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateContacts } from "../../features/Contacts/contactSlice";
import { ContactState } from "../../types/contactType";
import ContactForm from "../Modal/ContactForm";

interface CardProps {
    contact: ContactState;
}

const Card = ({ contact }: CardProps) => {
    const [openEditModal, setOpenEditModal] = useState(false)
    const { contacts } = useAppSelector(state => state)
    const dispatch = useAppDispatch();

    const handleDelete = (contact: ContactState) => {
        // delete contact from redux store
        const newContacts = contacts.filter(item => item.id !== contact.id)
        dispatch(updateContacts(newContacts))
    }

    return (<div className="w-[40%] h-[200px] flex justify-center max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center justify-center">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{contact.firstName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{contact.status ? 'Active' : 'Inactive'}</span>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-center mt-4 space-x-3 md:mt-6">
                <button onClick={() => setOpenEditModal(true)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                <button onClick={() => handleDelete(contact)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </div>
        </div>
        {openEditModal && <ContactForm open={openEditModal} setOpen={setOpenEditModal} contact={contact} />}
    </div>)

}

export default Card;