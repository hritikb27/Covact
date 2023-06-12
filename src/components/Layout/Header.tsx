import React from 'react'
import {
    Bars3Icon,
} from '@heroicons/react/24/outline'

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {

    return(
        <div className="sticky top-0 z-0 flex h-16 shrink-0 items-center lg:justify-center bg-indigo-600 text-white font-bold text-2xl gap-x-4 border-b border-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 justify-self-start text-gray-200 lg:hidden" onClick={() => setSidebarOpen(prev => !prev)}>
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            {window.location.href === process.env.REACT_APP_URL + '/' ? 'Contact Page' : 'Charts and Maps'}
        </div>
    )
}

export default Header;