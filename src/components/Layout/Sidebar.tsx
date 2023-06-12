import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    ChartPieIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import classNames from '../../utils/classNames'

const navigation = [
    { name: 'Contact', href: '/', icon: UsersIcon },
    { name: 'Charts and Maps', href: '/charts', icon: ChartPieIcon },
]

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (sidebarOpen: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

    return (
        <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-100 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                                    <nav className="flex flex-1 mt-12 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    window.location.href === `${process.env.REACT_APP_URL}${item.href}`
                                                                        ? 'bg-indigo-700 text-white'
                                                                        : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                )}
                                                            >
                                                                <item.icon
                                                                    className={classNames(
                                                                        window.location.href === `${process.env.REACT_APP_URL}${item.href}` ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                                                        'h-6 w-6 shrink-0'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                           
                                            
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            {/* Static sidebar for desktop */}
            <div className="hidden lg:border-2 lg:border-black lg:fixed lg:inset-y-0 lg:mt-[3.9rem] lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white text-black px-6 pb-4">
                    <nav className="flex flex-1 flex-col mt-10">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    window.location.href === `${process.env.REACT_APP_URL}${item.href}`
                                                        ? 'bg-indigo-700 text-white'
                                                        : 'text-black hover:text-white hover:bg-indigo-700',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                )}
                                            >
                                                <item.icon
                                                    onClick={() => console.log(`${process.env.REACT_APP_URL}${item.href}`)}
                                                    className={classNames(
                                                        window.location.href === `${process.env.REACT_APP_URL}${item.href}` ? 'text-white' : 'text-black group-hover:text-white',
                                                        'h-6 w-6 shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
};

export default Sidebar;