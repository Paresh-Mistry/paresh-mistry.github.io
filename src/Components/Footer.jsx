import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    // bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  border-t border-white/10
    <footer className=" text-white py-12 bg-[#040D12] px-6 shadow-inner">
      <div className="container md:flex justify-around items-center mx-auto text-center md:space-y-0 space-y-8">
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/paresh-mistry-975b64270/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 backdrop-blur-sm"
          >
            <Linkedin className="text-blue-400 w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/Paresh-Mistry"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 backdrop-blur-sm"
          >
            <Github className="text-gray-300 w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 backdrop-blur-sm"
          >
            <Instagram className="text-pink-400 w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="text-xs text-gray-500">
          <p>pareshkmistry04@gmail.com</p>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-300 font-bold">Paresh-Dev</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
