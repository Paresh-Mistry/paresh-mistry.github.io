import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  BookOpen,
  Briefcase,
  Award,
  Filter,
  Search,
  Download,
  ExternalLink,
} from "lucide-react";
import Layoutwrap from "../Layout/Layoutwrap";
import CFile from "../Components/CFile";

import Eurogrip from "../assets/Eurogrip_Torq.pdf";
import Invictus from "../assets/invictus.pdf";
import Code_w from "../assets/Code_Warrior.pdf";
import Flipkart from "../assets/flipkart_grid.pdf";
import Ai_agent from "../assets/Ai_agent.pdf";
import Reactjs from "../assets/React.pdf";
import Java from "../assets/Java.pdf";
import Claidroid from "../assets/Claidroid.jpg";
import Linux from "../assets/Linux.pdf";
import Database from "../assets/Database.pdf";

const Certificate = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const certificates = {
    hackathons: [
      {
        name: "Eurogrip Torq 2025",
        file: Eurogrip,
        year: "2025",
        category: "Hackathon",
      },
      {
        name: "Invictus 2025",
        file: Invictus,
        year: "2025",
        category: "Hackathon",
      },
      {
        name: "Code Warrior 2025",
        file: Code_w,
        year: "2025",
        category: "Hackathon",
      },
      {
        name: "Flipkart Grid 2024",
        file: Flipkart,
        year: "2024",
        category: "Hackathon",
      },
      {
        name: "Multi AI Agent System",
        file: Ai_agent,
        year: "2024",
        category: "Hackathon",
      },
    ],
    courses: [
      {
        name: "React JS Beginner",
        file: Reactjs,
        year: "2024",
        category: "Course",
      },
      {
        name: "Java Certificate",
        file: Java,
        year: "2024",
        category: "Course",
      },
      {
        name: "DBMS Certificate",
        file: Database,
        year: "2024",
        category: "Course",
      },
      { name: "Linux OS", file: Linux, year: "2024", category: "Course" },
    ],
    internships: [
      {
        name: "Claidroid Technologies",
        file: Claidroid,
        year: "2024",
        category: "Internship",
      },
    ],
  };

  const allCertificates = [
    ...certificates.hackathons,
    ...certificates.courses,
    ...certificates.internships,
  ];

  const filteredCertificates = allCertificates.filter((cert) => {
    const matchesFilter =
      activeFilter === "All" || cert.category === activeFilter;
    const matchesSearch = cert.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { name: "All", icon: Award, count: allCertificates.length },
    { name: "Hackathon", icon: Trophy, count: certificates.hackathons.length },
    { name: "Course", icon: BookOpen, count: certificates.courses.length },
    {
      name: "Internship",
      icon: Briefcase,
      count: certificates.internships.length,
    },
  ];

  const stats = [
    {
      label: "Hackathons",
      value: certificates.hackathons.length,
      icon: Trophy,
      color: "from-[#5C8374] to-[#93B1A6]",
    },
    {
      label: "Courses",
      value: certificates.courses.length,
      icon: BookOpen,
      color: "from-[#5C8374] to-[#93B1A6]",
    },
    {
      label: "Internships",
      value: certificates.internships.length,
      icon: Briefcase,
      color: "from-[#5C8374] to-[#93B1A6]",
    },
    {
      label: "Total",
      value: allCertificates.length,
      icon: Award,
      color: "from-[#183D3D] to-[#5C8374]",
    },
  ];

  return (
    <Layoutwrap>
      <div className="space-y-12">
        {/* Header Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent [-webkit-text-stroke:2px_#5C8374]">
              Achieve
            </span>
            <span className="text-[#93B1A6]">ments</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            A collection of certifications, hackathons, and professional
            milestones achieved throughout my journey.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group transform transition-transform duration-500 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* bg-gray-800 */}
                <div className="relative md:h-72 h-32 bg-gradient-to-r from-[#040D12] via-[#183D3D] to-[#040D12] rounded-xl overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <span className="object-cover transition-transform duration-700 group-hover:scale-110">
                    <Icon className="mx-auto flex items-center md:w-28 h-full w-16 text-gray-400" />
                  </span>
                  <div className="md:absolute bottom-6 w-full px-6  text-[#5C8374] text-2xl z-10 tracking-wide drop-shadow-md">
                    <div className="flex justify-between items-center">
                      <h3 className="group-hover:text-blue-400 text-xs md:text-base transition-colors duration-300">
                        {stat.label}
                      </h3>
                      <h3 className="group-hover:text-blue-400 text-base md:text-2xl transition-colors duration-300">
                        {stat.value}
                      </h3>
                    </div>
                  </div>
                  {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white bg-gray-700/90 px-6 py-3 rounded-lg text-sm shadow-lg">
                      Click to Learn More
                    </p>
                  </div> */}
                  {/* <div className="absolute top-4 right-4 bg-blue-400/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      Tool
                    </div> */}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.name
                      ? "bg-gradient-to-r from-[#183D3D] to-[#5C8374] text-white shadow-lg shadow-[#5C8374]/20"
                      : "bg-[#183D3D]/20 border border-[#5C8374]/30 text-[#93B1A6] hover:bg-[#183D3D]/30 hover:border-[#5C8374]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === category.name
                        ? "bg-white/20"
                        : "bg-[#183D3D]/50"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#183D3D]/20 border border-[#5C8374]/30 text-white placeholder-gray-500 outline-none focus:border-[#5C8374] focus:bg-[#183D3D]/30 transition-all duration-300"
            />
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Showing{" "}
              <span className="text-[#93B1A6] font-semibold">
                {filteredCertificates.length}
              </span>{" "}
              of{" "}
              <span className="text-[#93B1A6] font-semibold">
                {allCertificates.length}
              </span>{" "}
              certificates
            </p>
            {(searchTerm || activeFilter !== "All") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("All");
                }}
                className="text-sm text-[#93B1A6] hover:text-[#5C8374] transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CFile {...cert} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="inline-flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-[#183D3D]/30 border border-[#5C8374]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Search className="w-8 h-8 text-[#5C8374]" />
                </div>
                <p className="text-gray-400 text-lg">No certificates found</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("All");
                  }}
                  className="text-sm text-[#93B1A6] hover:text-[#5C8374] transition-colors px-4 py-2 border border-[#5C8374]/30 rounded-full hover:bg-[#183D3D]/30"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Category Sections with Timeline View */}
        <motion.div
          className="mt-16 space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Hackathons Section */}
          {activeFilter === "All" && (
            <>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#183D3D] to-[#5C8374] rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl mono font-bold text-[#93B1A6]">
                      Hackathons
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Competitive events showcasing problem-solving and
                      innovation
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {certificates.hackathons.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <CFile {...item} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Courses Section */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-8 justify-end">
                  <div>
                    <h2 className="text-3xl font-bold text-[#93B1A6] text-right">
                      Courses
                    </h2>
                    <p className="text-sm text-gray-400 mt-1 text-right">
                      Certified learning paths to enhance technical expertise
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#183D3D] to-[#5C8374] rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {certificates.courses.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CFile {...item} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Internships Section */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#183D3D] to-[#5C8374] rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#93B1A6]">
                      Internships
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Professional experience gaining hands-on industry exposure
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {certificates.internships.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <CFile {...item} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </Layoutwrap>
  );
};

export default Certificate;
