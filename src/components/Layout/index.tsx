import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="lg:pl-72">
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </div>
    );
}

export default Layout;