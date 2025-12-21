import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Github, ExternalLink } from "lucide-react";
import Layoutwrap from "../Layout/Layoutwrap";
import projects from "../Json/projects.json";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Get unique tech categories
  const allTechs = [
    ...new Set(projects.flatMap((p) => p.tech.split(",").map((t) => t.trim()))),
  ];
  const filters = ["All", ...allTechs.slice(0, 5)]; // Show top 5 techs

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tech.toLowerCase().includes(term);

    const matchesFilter =
      selectedFilter === "All" ||
      project.tech
        .split(",")
        .map((t) => t.trim())
        .includes(selectedFilter);

    return matchesSearch && matchesFilter;
  });

  const projectDescSlice = (desc) => {
    return desc.length > 200 ? desc.slice(0, 200) + "..." : desc;
  };

  return (
    <Layoutwrap>
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent [-webkit-text-stroke:2px_#5C8374]">
              Pro
            </span>
            <span className="text-[#93B1A6]">jects</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            A collection of projects I've built, showcasing my skills and
            passion for development.
          </p>
        </motion.div>

        {/* Filters & Search Section */}
        <div className="space-y-4">
          {/* Tech Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-[#183D3D] to-[#5C8374] text-white shadow-lg shadow-[#5C8374]/20"
                    : "bg-[#183D3D]/20 border border-[#5C8374]/30 text-[#93B1A6] hover:bg-[#183D3D]/30 hover:border-[#5C8374]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Project Count Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#183D3D]/30 border border-[#5C8374]/30 rounded-full text-sm backdrop-blur-sm">
              <span className="text-gray-400">Projects:</span>
              <span className="text-[#93B1A6] font-semibold">
                {filteredProjects.length} / {projects.length}
              </span>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-auto sm:min-w-[300px]">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#183D3D]/20 border border-[#5C8374]/30 text-white placeholder-gray-500 outline-none focus:border-[#5C8374] focus:bg-[#183D3D]/30 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-[#183D3D]/20 backdrop-blur-xl border border-[#5C8374]/30 rounded-2xl overflow-hidden hover:border-[#5C8374] hover:bg-[#183D3D]/30 hover:shadow-lg hover:shadow-[#5C8374]/10 transition-all duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                {/* Project Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#183D3D]/50 border border-[#5C8374]/30 rounded-full flex items-center justify-center text-[#93B1A6] text-xs font-semibold z-10 backdrop-blur-sm">
                  {index < 9 && "0"}
                  {index + 1}
                </div>

                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5C8374] to-[#93B1A6] group-hover:w-1.5 transition-all duration-300"></div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5C8374]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white pr-12 group-hover:text-[#93B1A6] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {projectDescSlice(project.description)}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#183D3D]/30 border border-[#5C8374]/30 rounded-lg text-xs font-medium text-[#93B1A6] hover:bg-[#183D3D]/50 hover:border-[#5C8374] transition-all duration-300"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={`https://github.com/paresh-mistry/${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#93B1A6] transition-colors duration-300 text-sm font-medium mt-4 group/link"
                  >
                    <Github size={16} />
                    <span>View Source</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#5C8374]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="inline-flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-[#183D3D]/30 border border-[#5C8374]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Search className="w-8 h-8 text-[#5C8374]" />
                </div>
                <p className="text-gray-400 text-lg">No projects found</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedFilter("All");
                  }}
                  className="text-sm text-[#93B1A6] hover:text-[#5C8374] transition-colors px-4 py-2 border border-[#5C8374]/30 rounded-full hover:bg-[#183D3D]/30"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layoutwrap>
  );
};

export default Projects;
