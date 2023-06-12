import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import {
    Bars3Icon,
    BellIcon,
} from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import classNames from '../../utils/classNames'

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const userNavigation = [


    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {

    return(
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-center bg-indigo-600 text-white font-bold text-2xl gap-x-4 border-b border-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
           Contact Page
        </div>
    )
}

export default Header;