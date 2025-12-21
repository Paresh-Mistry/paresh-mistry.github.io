import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { Link } from "react-router-dom";

const CFile = ({ name, file }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.div
        key={name}
        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:shadow-xl transition-all duration-300"
        variants={fadeInUp}
      >
        <Folder className="text-blue-400 w-5 h-5 group-hover:scale-110 transition" />
        <Link to={file} target="_blank" rel="noopener noreferrer">
          <h3 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-300 hover:underline">
            {name.length > 18 ? name.slice(0, 18) + "..." : name}
          </h3>
        </Link>
      </motion.div>
    </>
  );
};

export default CFile;
