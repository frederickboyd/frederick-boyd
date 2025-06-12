import React, { useRef } from "react";
import { motion } from "framer-motion";
import { scrollAnimation } from "./ScrollAnimation";
import Journy from "./Journy";
import personImg from "../img/blackpantherblue.png";
const AboutSection = () => {
  const constraintsRef = useRef(null);
  const onDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Frederick Boyd Resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      className="w-11/12 h-auto lg:w-2/3"
      variants={scrollAnimation}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col justify-center items-center md:flex-row mb-10">
        <div className="flex-[6] flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <motion.h3
            className="relative font-primary text-blueEdit text-titleFont z-10 lg:text-6xl lg:pb-5"
            variants={scrollAnimation}
          >
            About Me
          </motion.h3>
          <p className="font-secondry text-white pt-5 pb-5 md:text-lg">
            <span className="text-blue-400 font-semibold">
              Senior Software Engineer
            </span>{" "}
            with over{" "}
            <span className="text-yellow-400 font-semibold">12 years</span> of
            experience developing and maintaining complex,{" "}
            <span className="text-green-400 font-semibold">
              full-stack web applications
            </span>{" "}
            across industries including{" "}
            <span className="text-pink-400 font-semibold">SaaS</span>,{" "}
            <span className="text-pink-400 font-semibold">e-commerce</span>,{" "}
            <span className="text-pink-400 font-semibold">healthcare</span>, and{" "}
            <span className="text-pink-400 font-semibold">blockchain</span>.
            Specialized in{" "}
            <span className="text-blue-300 font-semibold">
              JavaScript/TypeScript
            </span>{" "}
            frameworks such as{" "}
            <span className="text-blue-300 font-semibold">React</span>,{" "}
            <span className="text-blue-300 font-semibold">Next.js</span>,{" "}
            <span className="text-blue-300 font-semibold">Angular</span>, and{" "}
            <span className="text-blue-300 font-semibold">Vue.js</span>, with
            strong backend proficiency in{" "}
            <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
            <span className="text-purple-400 font-semibold">.NET Core</span>,{" "}
            <span className="text-purple-400 font-semibold">Laravel</span>, and{" "}
            <span className="text-purple-400 font-semibold">Express.js</span>.
            Experienced in designing{" "}
            <span className="text-green-400 font-semibold">microservices</span>,
            building{" "}
            <span className="text-green-400 font-semibold">RESTful APIs</span>,
            and integrating cloud-native solutions using{" "}
            <span className="text-yellow-400 font-semibold">AWS</span>,{" "}
            <span className="text-yellow-400 font-semibold">Docker</span>, and{" "}
            <span className="text-yellow-400 font-semibold">Kubernetes</span>.
            Well-versed in{" "}
            <span className="text-blue-400 font-semibold">
              Agile methodologies
            </span>
            ,{" "}
            <span className="text-blue-400 font-semibold">
              test-driven development (TDD)
            </span>
            , and{" "}
            <span className="text-blue-400 font-semibold">
              CI/CD automation
            </span>
            , with a deep understanding of{" "}
            <span className="text-green-400 font-semibold">
              scalable system architecture
            </span>
            ,{" "}
            <span className="text-green-400 font-semibold">
              frontend optimization
            </span>
            , and{" "}
            <span className="text-green-400 font-semibold">
              collaborative development
            </span>
            . Passionate about writing{" "}
            <span className="text-pink-400 font-semibold">
              clean, maintainable code
            </span>
            , mentoring peers, and continuously adopting modern engineering
            practices including{" "}
            <span className="text-yellow-400 font-semibold">DevOps</span> and
            blockchain technologies like{" "}
            <span className="text-purple-400 font-semibold">Solidity</span>,{" "}
            <span className="text-purple-400 font-semibold">Web3.js</span>, and
            <span className="text-purple-400 font-semibold"> Truffle</span>.
          </p>
          <button
            onClick={onDownloadResume}
            className="mt-4 px-6 py-3 bg-transparent text-blueEdit rounded-md hover:bg-blueEdit hover:text-black transition-colors border border-blueEdit"
          >
            Download the Resume
          </button>
        </div>
        {/* <motion.div
          dragConstraints={constraintsRef}
          className="flex-[4] w-[384px] sm:w-[384px] relative "
        > */}
        <motion.div
          ref={constraintsRef}
          className="w-[384px] sm:w-[384px] h-[400px] relative"
        >
          <img
            // ref={constraintsRef}
            className="w-[384px] sm:w-[384px] h-[400px] object-contain"
            src={personImg}
            alt=""
          />
        </motion.div>
      </div>

      <Journy />
    </motion.div>
  );
};

export default AboutSection;
