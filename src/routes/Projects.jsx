import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import Layoutwrap from '../Layout/Layoutwrap';
import projects from '../Json/projects.json'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const Projects = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tech.toLowerCase().includes(term)
    );
  });

  return (

    <Layoutwrap>

      <motion.h1
        className="flex items-center gap-3 font-bold text-white tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bold text-[40px] md:text-[70px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">PROJECT's</h1>
      </motion.h1>

      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <div className='text-white text-xs bg-gray-700 w-fit px-1.5 py-1 rounded mb-3'>
          Total Projects- {filteredProjects.length}
        </div>

        <div className="relative mb-6 w-full sm:w-1/2 lg:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by title, description or tech..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none border border-white/20 focus:border-purple-500 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (


            <motion.div
              key={index}
              className="relative group border border-l-purple-500 border-l-4 border-white/10 border-b bg-white/5 backdrop-blur-md 
             overflow-hidden shadow-xl transition duration-300 hover:scale-[1.02]"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >

              <div className=' text-white absolute top-2 right-3 text-xs'>0{index + 1}</div>


              <div className="p-6 text-white">
                <h2 className="text-xl mb-2">{project.title.toUpperCase()}</h2>
                <p className="text-gray-300 text-sm mb-3">
                  {project.description.trim().slice(0, 200).slice(-1) === "." ? project.description : project.description.slice(0, 200) + "..."}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-700/60 text-white text-xs px-3 py-1 rounded-full shadow hover:bg-indigo-800 transition"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://github.com/paresh-mistry/${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center md:absolute bottom-0 right-0 justify-end"
                >
                  <motion.div
                    className="opacity-100 lg:opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <ArrowUpRight size={55} className="text-white/80 hover:text-white transition-colors" />
                  </motion.div>
                </a>

              </div>
            </motion.div>
          )))
          : (
            <div className="text-gray-400 text-center col-span-full">
              No projects found 🫤
            </div>
          )}
      </div>

    </Layoutwrap>

  );
};

export default Projects;
