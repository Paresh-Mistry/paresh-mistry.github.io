import React, { useState } from "react";
import {
  GraduationCap,
  BookOpenText,
  Settings,
  Github,
  Award,
  Calendar,
  TrendingUp,
  Code,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Layoutwrap from "../Layout/Layoutwrap";

const Education = () => {
  const currentYear = new Date().getFullYear();
  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "JavaScript Frameworks",
      icon: Code,
      level: 90,
      color: "from-[#5C8374] to-[#93B1A6]",
    },
    {
      name: "HTML & CSS",
      icon: Code,
      level: 95,
      color: "from-[#5C8374] to-[#93B1A6]",
    },
    {
      name: "Python Frameworks",
      icon: Code,
      level: 85,
      color: "from-[#5C8374] to-[#93B1A6]",
    },
    {
      name: "SQL/NoSQL Database",
      icon: Code,
      level: 80,
      color: "from-[#5C8374] to-[#93B1A6]",
    },
  ];

  const courses = [
    { name: "Data Structures & Algorithms", status: "completed" },
    { name: "Machine Learning", status: "in-progress" },
    { name: "Web Development", status: "completed" },
    { name: "Operating System", status: "completed" },
  ];

  return (
    <Layoutwrap>
      <div className="space-y-12">
        {/* Header Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent [-webkit-text-stroke:2px_#5C8374]">
              Edu
            </span>
            <span className="text-[#93B1A6]">cation</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            My academic journey, skills, and continuous learning path in
            technology.
          </p>
        </motion.div>

        {/* University Card - Enhanced */}
        <div className="relative space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#93B1A6]">
            University
          </h2>

          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-white font-semibold">
              Bachelor's in Electronics & Telecommunications Engineering
            </p>
            <p className="text-lg text-[#93B1A6] font-medium">
              K.J. Somaiya College of Engineering
            </p>

            <div className="flex items-center  gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {currentYear > 2026
                    ? "Under Graduated"
                    : `${currentYear} - Present`}
                </span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="inline-flex items-center gap-2 md:px-6 px-4 md:py-3 py-2 bg-gradient-to-r from-[#183D3D] to-[#5C8374] rounded-full mt-4">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white font-bold md:text-lg text-sm">
                CGPA: 8.29
              </span>
            </div>
          </div>
        </div>

        {/* GitHub Chart Card */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#93B1A6]">
              GitHub Activity
            </h2>
          </div>

          <div className="bg-[#183D3D]/20 border border-[#5C8374]/30 rounded-xl p-6 overflow-hidden">
            <img
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
              alt="GitHub contribution chart"
              className="w-full mx-auto rounded-lg"
            />
          </div>

          <p className="text-center text-gray-400 text-sm">
            Consistent contributions showing dedication to learning and building
          </p>
        </div>

        {/* Skills & Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Skills Card - Enhanced with Progress Bars */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#183D3D] to-[#5C8374] rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#93B1A6]">
                Skills Acquired
              </h2>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#93B1A6]" />
                        <span className="text-white font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[#93B1A6] text-sm font-semibold">
                        {hoveredSkill === index ? `${skill.level}%` : ""}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-[#183D3D]/30 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Courses Card - Enhanced with Status */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#183D3D] to-[#5C8374] rounded-full flex items-center justify-center">
                <BookOpenText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#93B1A6]">
                Relevant Courses
              </h2>
            </div>

            <div className="space-y-3">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between bg-[#183D3D]/20 border border-[#5C8374]/30 rounded-lg p-4 hover:bg-[#183D3D]/30 hover:border-[#5C8374] transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#183D3D] to-[#5C8374] rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-white font-medium">
                      {course.name}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.status === "completed"
                        ? "bg-[#5C8374]/20 text-[#93B1A6] border border-[#5C8374]/30"
                        : "bg-[#183D3D]/30 text-gray-400 border border-[#5C8374]/20"
                    }`}
                  >
                    {course.status === "completed"
                      ? "✓ Completed"
                      : "⟳ In Progress"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layoutwrap>
  );
};

export default Education;
