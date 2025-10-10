import React from 'react'

const Layoutwrap = ({ children } ) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mx-auto px-6 py-16">
            <div className='mt-12 '>{children}</div>
        </div>
    )
}

export default Layoutwrap