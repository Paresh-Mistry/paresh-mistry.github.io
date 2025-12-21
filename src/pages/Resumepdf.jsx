import React, { useState, useEffect } from 'react';
import pdf from '../assets/Resume.pdf'
import { Link } from 'react-router-dom';


const ResumeViewer = () => {

    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen'>
            <h2 className="text-4xl font-extrabold text-center text-indigo-600 py-8">My Resume</h2>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4">

            </div>
            <div className='text-center py-3'>
                <Link
                    variant="primary"
                    className="inline-block px-6  py-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-transform"
                    to={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    &nbsp;Download Resume
                </Link>
            </div>

        </div>
    );
};

export default ResumeViewer;
