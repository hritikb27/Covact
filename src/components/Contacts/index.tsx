import React from "react";
import { useAppSelector } from "../../app/hooks";
import ContactForm from "../Modal/ContactForm";
import Card from "./Card";
import { XCircleIcon } from "@heroicons/react/20/solid";

const Contacts = () => {
    const [openFormModal, setOpenFormModal] = React.useState(false)
    const { contacts } = useAppSelector(state => state)
    return (
        <div className="h-full w-full flex flex-col gap-5 px-10 ">
            <button onClick={() => setOpenFormModal(true)} className="max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Contact
            </button>
            {openFormModal && <ContactForm setOpen={setOpenFormModal} open={openFormModal} />}
            {contacts && contacts.length > 0 ? <div className="w-full flex gap-2 flex-wrap">
                {contacts.map(contact => {
                    return <Card contact={contact} />
                })}
            </div> : <div className="w-full h-[500px] text-black bg-gray-200 gap-5 rounded flex flex-col sm:flex-row justify-center items-center">
                <XCircleIcon className="w-16 h-16" />
                <h1 className="sm:text-2xl font-bold">No Contacts Found <br/> Please add contact from <br/> Create Contact Button</h1>
                </div>}
        </div>
    )
}

export default Contacts;