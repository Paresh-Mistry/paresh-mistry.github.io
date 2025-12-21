import { Link } from "react-router-dom";
import pdf from "../assets/Paresh-Mistry-Resume.pdf";
import image from "../assets/Profileimg.jpg";
import {
  Github,
  CodepenIcon,
  Code2,
  Mail,
  Command,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const MobNumber = import.meta.env.VITE_MOBILE_NUMBER;
  const MailId = import.meta.env.VITE_MAIL_ID;

  const softwaresUse = [
    {
      title: "Visual Studio Code",
      image: CodepenIcon,
      link: "https://code.visualstudio.com/",
    },
    {
      title: "Github Version Control",
      image: Github,
      link: "https://github.com",
    },
    {
      title: "Leetcode",
      image: Code2,
      link: "https://leetcode.com/",
    },
    {
      title: "Github Version Control",
      image: Command,
      link: "https://github.com",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      {/* bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  */}
      <section className="bg-[url(https://plus.unsplash.com/premium_photo-1752514500095-142a96b1d3c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8)] brightness-90 bg-cover bg-no-repeat  relative flex flex-col gap-y-8 min-h-screen sm:flex-row items-center justify-around bg-[#040D12] px-8 py-32 drop-shadow-lg overflow-hidden">
        {/* bg-blue-600 */}
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-[#5C8374] rounded-full blur-3xl opacity-20"></div>
        {/* bg-purple-600 */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5C8374] rounded-full blur-2xl opacity-20"></div>

        {/* Animated Left Text */}
        <motion.div
          className="sm:w-1/2 sm:text-left z-10" // text-center
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 md:px-4 px-2 md:py-2 py-1 bg-slate-800/50 border border-slate-700 rounded-full">
            <Sparkles className="md:w-4 md:h-4 w-3 h-3 text-teal-400" />
            <span className="md:text-sm text-xs font-medium text-slate-400">
              Available for work
            </span>
          </div>

          <div>
            {/* from-blue-400 to-purple-400 */}
            <h1 className="font-bold text-[40px] md:text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#93B1A6] to-[#5C8374] ">
              Paresh Mistry
            </h1>

            <h3 className="text-gray-300 text-2xl md:text-3xl mb-6">
              Full Stack Web Developer
            </h3>
          </div>

          <p className="text-gray-400 md:text-lg text-base font-medium leading-relaxed mb-6">
            Passionate about crafting elegant coding architectures and an avid
            contributor to open-source projects. Let's build something
            extraordinary together!!
          </p>

          <div className="flex items-center gap-3 md:justify-normal ">
            {" "}
            {/* justify-center */}
            <div>
              <Link
                // from-blue-500 to-purple-600
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-br from-[#183D3D] to-[#5C8374]  text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-transform"
                to={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                &nbsp;Download Resume
              </Link>
            </div>
            <div className="flex gap-1.5">
              <Link
                to={`https://wa.me/${MobNumber}`}
                className="sm:p-4 bg-gradient-to-br from-gray-500 to-gray-800 p-3 rounded-full hover:scale-110"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </Link>
              <Link
                to={`mailto:${MailId}`}
                className="sm:p-4 bg-gradient-to-br from-gray-500 to-gray-800 p-3 rounded-full hover:scale-110"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" color="#ffffff" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Animated Right Image */}
        <motion.div
          className="sm:w-1/3 mt-10 sm:mt-0 flex justify-center relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="relative">*/}
          {/* border-blue-500  */}
          {/* <img
              src={image}
              alt="Profile"
              className="md:w-72 md:h-72 h-56 w-56 brightness-90 rounded-full shadow-[#183D3D] shadow-md"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold">
              Hi!
            </div>
            <div className="absolute inset-0 bg-blue-400 opacity-10 rounded-full blur-xl"></div>*/}
          {/* </div>*/}

          <div className="relative mx-auto">
            {/* Profile Card */}
            <div className="relative bg-slate-900/50  border-t border-b rounded-3xl border-slate-800 p-4">
              <img
                src={image}
                alt="Profile"
                className="md:w-72 md:h-72 h-56 w-56 brightness-90 rounded-3xl shadow-[#183D3D] shadow-md"
              />
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-6 -right-6 w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl rotate-12 flex items-center justify-center shadow-lg animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <Code2 className="w-8 h-8 text-teal-400" />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-800 border border-slate-700 rounded-2xl -rotate-12 flex items-center justify-center shadow-lg animate-bounce"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            >
              <Github className="w-8 h-8 text-teal-400" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 */}
      <section className="py-20 bg-[#040D12]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-outline text-4xl md:text-6xl font-extrabold uppercase text-transparent mb-8 md:mb-16 text-center [-webkit-text-stroke:2px_#ffffff]">
            Software{" "}
            <span className="bg-gradient-to-br from-[#183D3D] lowercase to-[#5C8374] bg-clip-text">
              Arsenal
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {softwaresUse.map((element, index) => {
              const Icon = element.image;

              return (
                <motion.a
                  href={element.link}
                  key={element.title}
                  className="group transform transition-transform duration-500 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* bg-gray-800 */}
                  <div className="relative md:h-72 h-32 bg-gradient-to-r from-[#040D12] via-[#183D3D] to-[#040D12] rounded-xl overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                    <span className="object-cover transition-transform duration-700 group-hover:scale-110">
                      <Icon className="mx-auto flex items-center md:w-32 h-full w-16 text-gray-400" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="md:absolute bottom-6 left-6 text-[#5C8374] text-2xl z-10 tracking-wide drop-shadow-md">
                      <h3 className="group-hover:text-blue-400 text-xs md:text-sm transition-colors duration-300">
                        {element.title}
                      </h3>
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
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
