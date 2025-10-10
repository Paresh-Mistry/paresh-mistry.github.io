import React from 'react';
import {
  GraduationCap,
  BookOpenText,
  Settings,
  BadgeCheck,
  Github,
} from 'lucide-react';

import { motion } from 'framer-motion';
import Layoutwrap from '../Layout/Layoutwrap';

const Education = () => {
  const currentYear = new Date().getFullYear();

  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME

  const skills = [
    "JavaScript Frameworks",
    "HTML & CSS",
    "Embedded Programming",
    "Python Frameworks",
    "SQL/NoSQL Database",
  ];

  const courses = [
    "Data Structures & Algorithms",
    "Digital Circuits & Microprocessors",
    "Machine Learning",
    "Web Development",
    "Operating System",
    "Computer Networks",
  ];

  return (

    <Layoutwrap>

      {/* <div className="relative"> */}

      <div className="md:px-6 mx-auto z-10 relative">

        <motion.h1
          className="flex items-center gap-3 font-bold text-white mb-8 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-[40px] md:text-[70px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">EDUCATION</h1>
        </motion.h1>

        <Card>
          <SectionTitle icon={<GraduationCap className="w-6 h-6 mr-2" />} title="University" />
          <p className="text-xl text-white text-center">Bachelor's in Electronics & Telecommunications Engineering</p>
          <p className="text-center text-gray-300">K.J. Somaiya College of Engineering</p>
          <p className="text-center text-gray-400">
            {currentYear > 2026 ? "Under Graduated" : `${currentYear} - Present`}
          </p>
          <p className="text-center text-blue-300 font-medium">CGPA: 8.29</p>
        </Card>

        <Card>
          <SectionTitle icon={<Github className="w-6 h-6 mr-2" />} title="Github Charts" />
          <img
            src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
            alt="Paresh's Github chart"
            className="w-full mx-auto"
          />
        </Card>

        <div className='grid md:grid-cols-2 gap-3'>
          <Card>
            <SectionTitle icon={<Settings className="w-6 h-6 mr-2" />} title="Skills Acquired" />
            <div className="flex flex-col justify-center gap-4 mt-4">
              {skills.map((skill, i) => (
                <span key={i} className="bg-indigo-600 hover:bg-indigo-700 transition-all px-4 py-2 rounded-full shadow text-white text-sm font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <SectionTitle icon={<BookOpenText className="w-6 h-6 mr-2" />} title="Relevant Courses" />
            <ul className="list-inside list-decimal text-gray-300 space-y-2">
              {courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </Card>
        </div>

      </div>

      {/* </div> */}

    </Layoutwrap >

  );
};

const Card = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 md:p-8 mb-8 hover:shadow-2xl transition-all duration-300"
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ icon, title }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-white tracking-wide flex items-center justify-center">
    {icon}
    {title}
  </h2>
);

export default Education;
