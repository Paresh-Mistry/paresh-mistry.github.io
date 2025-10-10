import React from 'react';
import { motion } from 'framer-motion';

import Eurogrip from '../assets/Eurogrip_Torq.pdf';
import Invictus from '../assets/invictus.pdf';
import Code_w from '../assets/Code_Warrior.pdf';
import Flipkart from '../assets/flipkart_grid.pdf';
import Ai_agent from '../assets/Ai_agent.pdf';
import Reactjs from '../assets/React.pdf';
import Java from '../assets/Java.pdf';
import Claidroid from '../assets/Claidroid.jpg';
import Layoutwrap from '../Layout/Layoutwrap';
import Linux from '../assets/Linux.pdf';
import Database from '../assets/Database.pdf';
import CFile from '../Components/CFile';

// 
const Certificate = () => {
  const certs = [
    {
      hackathons: [
        { name: 'Eurogrip Torq 2025', file: Eurogrip },
        { name: 'Invictus 2025', file: Invictus },
        { name: 'Code Warrior 2025', file: Code_w },
        { name: 'Flipkart Grid 2024', file: Flipkart },
        { name: 'Multi AI Agent System', file: Ai_agent },
      ],
    },
    {
      Course: [
        { name: 'React JS Beginner', file: Reactjs },
        { name: 'Java Certificate', file: Java },
        { name: 'DBMS Certificate', file: Database },
        { name: 'Linux OS', file: Linux },
      ],
    },
    {
      Internship: [
        { name: 'Claidroid Technologies', file: Claidroid },
      ],
    },
  ];

  const cert_ = certs[0].hackathons;
  const course = certs[1].Course;
  const internship = certs[2].Internship;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (

    <Layoutwrap>

      <div className="space-y-20">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <div className="mb-6">
            <h1 className="font-bold text-[40px] md:text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{"hackathons".toUpperCase()}</h1>
            <div className='text-white text-xs bg-gray-700 w-fit px-1.5 py-1 rounded mb-3'>
              Total Certificates- {cert_.length + course.length + internship.length}
            </div>

            <p className="text-sm text-gray-300 mt-1"># Participated in competitive hackathons, showcasing problem-solving and teamwork.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cert_.map((item, i) => (
              <CFile key={i} item={item} />
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <div className="mb-6">
            <h1 className="font-bold text-right text-[40px] md:text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{"courses".toUpperCase()}</h1>

            <p className="text-sm text-right text-gray-300 mt-1"># Completed certified courses to enhance technical and domain knowledge.</p>
          </div>

          <div className="md:flex md:justify-end w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {course.map((item, i) => (
                <CFile key={i} item={item} />
              ))}
            </div>
          </div>


        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <div className="mb-6">
            <h1 className="font-bold text-[40px] md:text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{"internship".toUpperCase()}</h1>

            {/* <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Internship</h1> */}
            <p className="text-sm text-gray-300 mt-1"># Completed internships gaining hands-on industry exposure and practical skills.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {internship.map((item, i) => (
              <CFile key={i} item={item} />
            ))}
          </div>
        </motion.div>

      </div>

    </Layoutwrap>

  );

};

export default Certificate;
