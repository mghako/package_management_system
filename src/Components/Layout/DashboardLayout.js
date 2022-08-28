import React from 'react'
import Footer from '../Page/Footer'
import Navigation from '../Page/Navigation'

const DashboardLayout = ({children}) => {
    return (
        <>
            <div className='min-h-full'></div>
            <Navigation />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}


export default DashboardLayout