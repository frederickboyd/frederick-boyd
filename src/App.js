import { useState, useRef, useEffect } from "react";
import Navbar from "./component/Navbar";
import mainImag from "./img/maintext.png";
import betting from "./img/projects/betting.png";
import billrewards from "./img/projects/billrewards.png";
import canva from "./img/projects/canva.png";
import coinnow from "./img/projects/coinnow.png";
import cryptovault from "./img/projects/cryptovault.png";
import fullstackpro from "./img/projects/full-stack-pro.png";
import hoteladmin from "./img/projects/hotel-admin.png";
import hotelbooking from "./img/projects/hotel-booking.png";
import infinitus from "./img/projects/infinitus.png";
import lightningtime from "./img/projects/lightningtime.png";
import netnotes from "./img/projects/netnotes.png";
import noteit from "./img/projects/noteit.png";
import pokearena from "./img/projects/pokearena.png";
import rapido from "./img/projects/rapido.png";
import reactlandingpagetemplate from "./img/projects/react-landing-page-template.png";
import arrow from "./img/arrow.png";
import { AiFillGithub } from "react-icons/ai";
import Footer from "./component/Footer";
import { FiGithub, FiMail } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { Scrollicon, BackToTopBtn } from "./component/Scrollicon";
import ButtomNav from "./component/ButtomNav";
import { scrollAnimation } from "./component/ScrollAnimation";
import AboutSection from "./component/AboutSection";
import { elements } from "./component/SkillsetList";
import { MdEmail, MdPhone, MdPlace } from "react-icons/md";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [interval, setinterval] = useState(0);
  const [deginterval, setDeginterval] = useState(0);
  const [stop, setStop] = useState(0);
  const [deg, setDeg] = useState(0);
  const [degstop, setDegStop] = useState(0);
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState("");
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  const [active, setActive] = useState("");
  const [hidebtn, sethidebtn] = useState(false);
  const refAbout = useRef(null);
  const refSkill = useRef(null);
  const refWork = useRef(null);
  const refContact = useRef(null);
  const form = useRef(null);

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 5000);
  }

  const clickhome = async (data) => {
    setOpen(false);
    setNav(data.testUser);
  };

  const mouseoverFun = (dataset) => {
    setCount(0);
    setDeg(0);
    clearInterval(interval);
    clearInterval(deginterval);
    setData(dataset.testName);
    setStop(Number(dataset.testId));
    setDegStop(Number(dataset.testUser));
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
      setinterval(timer);
    }, 40);
    const degtimer = setInterval(() => {
      setDeg((prev) => prev + 1);
      setDeginterval(degtimer);
    }, 1);
  };

  if (count === stop) {
    clearInterval(interval);
  }

  if (deg === degstop) {
    clearInterval(deginterval);
  }

  const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
        opacity: 0,
        x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: delay,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.4,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.message.value +=
      form.current.messageTemp.value +
      "\n\nSent from: " +
      form.current.email.value;
    emailjs
      .sendForm(
        "service_rrxk28a",
        "template_amo9twg",
        form.current,
        "aoCb671Lc0HxyNdn9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutDiv = refAbout.current.offsetTop;
      const skillDiv = refSkill.current.offsetTop;
      const workDiv = refWork.current.offsetTop;
      const contactDiv = refContact.current.offsetTop;
      const scrollPosition = window.scrollY + 500;
      if (scrollPosition <= aboutDiv) {
        sethidebtn(false);
      } else {
        sethidebtn(true);
      }

      if (scrollPosition >= aboutDiv && scrollPosition < skillDiv) {
        setActive("about");
      } else if (scrollPosition >= skillDiv && scrollPosition < workDiv) {
        setActive("skill");
      } else if (scrollPosition >= workDiv && scrollPosition < contactDiv) {
        setActive("work");
      } else if (scrollPosition >= contactDiv) {
        setActive("contact");
      } else {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    !loading && (
      <div className={`App ${open ? "app-fix" : ""}`}>
        <Navbar open={open} setOpen={setOpen} />
        <div
          className={`${open ? "block duration-300" : "hidden duration-300"}`}
        >
          <div className="fixed w-full h-full bg-bgBlack z-30 flex justify-center ">
            <div className="w-11/12 bg-bgBlack flex flex-col">
              <div className="flex flex-col items-start mt-24">
                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="home"
                  >
                    Home
                  </p>
                </a>

                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="about"
                  >
                    Abouts
                  </p>
                </a>

                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="skill"
                  >
                    Skills
                  </p>
                </a>
                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="work"
                  >
                    Works
                  </p>
                </a>
                <a
                  className="font-primary text-xl text-navtextcolor w-full pt-5 pb-5 border-t-2 border-b-2 border-navborder hover:bg-navborder"
                  href={`#${nav}`}
                >
                  {" "}
                  <p
                    onClick={(e) => clickhome(e.target.dataset)}
                    data-test-user="contact"
                  >
                    Contact
                  </p>
                </a>
              </div>
              <div className="mt-10 flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                  <a href="https://github.com/frederickboyd">
                    <FiGithub className="text-2xl text-gray-500 m-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/boyd-frederick/">
                    <FiLinkedin className="text-2xl text-gray-500 m-5" />
                  </a>
                  <a href="mailto:boydfrederick6@gmail.com">
                    <FiMail className="text-2xl text-gray-500 m-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center pt-52 pb-80 duration-200"
          id="home"
        >
          <div className="w-full h-auto md:w-4/5">
            <div className="flex flex-row justify-center items-center">
              <motion.img
                className="w-28 md:w-44"
                src={mainImag}
                alt="logo"
                initial={{ opacity: 0, x: "-50px" }}
                animate={{ opacity: 1, x: "0px" }}
                transition={{ type: "spring", duration: 5 }}
              />
              <div className="">
                <motion.h1
                  className="font-primary text-maintextcolor text-5xl md:text-8xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", delay: 0.5, duration: 10 }}
                >
                  REDERICK
                </motion.h1>
                <motion.p
                  className="font-primary text-maintextcolor text-2xl md:text-4xl mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", delay: 1, duration: 10 }}
                >
                  BOYD's PORTFOLIO
                </motion.p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-9">
              <motion.p
                className="font-secondry text-maintextcolor text-2xl font-extralight md:text-4xl"
                initial={{ opacity: 0, y: "10px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{ type: "spring", delay: 1.5, duration: 5 }}
              >
                Senior Software Engineer with 12+ years
              </motion.p>
              <motion.div
                className="mt-20"
                initial={{ opacity: 0, y: "10px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{ type: "spring", delay: 2.5, duration: 5 }}
              >
                <Scrollicon />
              </motion.div>
            </div>
          </div>
        </div>

        {/* section-about */}
        <div
          className="flex justify-center items-center pb-28 lg:pt-52 lg:pb-40"
          id="about"
          ref={refAbout}
        >
          <AboutSection />
        </div>
        {/* section skill and exp */}
        <div
          className="flex justify-center items-center pb-56 lg:pt-52"
          id="skill"
          ref={refSkill}
        >
          <motion.div
            className="w-11/12 h-auto lg:w-5/6 xl:w-3/4 2xl:w-2/3 "
            variants={scrollAnimation}
            initial="offscreen"
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-start">
              <div className="flex flex-col justify-center items-center md:w-3/5 lg:justify-start lg:items-start relative">
                <img
                  className="w-[120px] h-[120px] absolute -right-28 -bottom-5 z-40 hidden lg:block"
                  src={arrow}
                  alt="arrow"
                />
                <h3 className="relative font-primary text-blueEdit text-4xl z-10 lg:text-6xl lg:pb-5">
                  Where'm I Expert?
                </h3>
                <p className="font-secondry text-white pt-5 pb-5 md:text-lg">
                  I’m a Senior Software Engineer with over 12 years of
                  experience building scalable, full-stack web applications
                  across industries like SaaS, e-commerce, healthcare, and
                  blockchain. I specialize in front-end development using modern
                  frameworks such as React, Next.js, Angular, and Vue.js, with a
                  strong eye for creating clean, responsive, and user-friendly
                  designs enhanced by customized animations. My development
                  approach is rooted in best practices, progressive enhancement,
                  and performance optimization. Beyond front-end expertise, I
                  also have deep proficiency in back-end technologies including
                  Node.js, .NET Core, and Laravel, and I actively work with
                  cloud-native solutions, microservices, and CI/CD pipelines.
                  I’m passionate about writing maintainable code, mentoring
                  teams, and continuously exploring modern engineering paradigms
                  including DevOps and Web3.
                </p>
                <div className="flex flex-row flex-wrap justify-start">
                  {elements.map((element) => {
                    return (
                      <p
                        key={element.id + element.user + element.name}
                        className="font-mono text-lg text-blueEdit border-2 border-blueEdit rounded-sm pl-4 pr-4 m-1 hover:bg-texticonbg cursor-pointer"
                        data-test-id={element.id}
                        data-test-user={element.user}
                        data-test-name={element.name}
                        onClick={(e) => mouseoverFun(e.target.dataset)}
                      >
                        {element.label}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="flex mt-48 relative md:mt-96 md:ml-44 lg:ml-56">
                <div
                  style={{
                    position: "relative",
                    width: "auto",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="absolute w-[350px] h-[350px] bg-[#131b1e]"></div>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 4 ? "#ee1d52" : "gray",
                      fontWeight: count >= 4 ? 700 : 400,
                      zIndex: "20",
                      left: "-100px",
                      bottom: "-70px",
                    }}
                  >
                    0
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 8 ? "#ee1d52" : "gray",
                      fontWeight: count >= 8 ? 700 : 400,
                      zIndex: "20",
                      left: "-120px",
                    }}
                  >
                    1
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 12 ? "#ee1d52" : "gray",
                      fontWeight: count >= 12 ? 700 : 400,
                      zIndex: "20",
                      left: "-105px",
                      bottom: "40px",
                    }}
                  >
                    5
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 16 ? "#ee1d52" : "gray",
                      fontWeight: count >= 16 ? 700 : 400,
                      zIndex: "20",
                      left: "-66px",
                      bottom: "83px",
                    }}
                  >
                    10
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 20 ? "#ee1d52" : "gray",
                      fontWeight: count >= 20 ? 700 : 400,
                      zIndex: "20",
                      top: "-120px",
                    }}
                  >
                    20
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 30 ? "#ee1d52" : "gray",
                      fontWeight: count >= 30 ? 700 : 400,
                      zIndex: "20",
                      left: "50px",
                      bottom: "83px",
                    }}
                  >
                    30
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 50 ? "#ee1d52" : "gray",
                      fontWeight: count >= 50 ? 700 : 400,
                      zIndex: "20",
                      right: "-106px",
                      bottom: "40px",
                    }}
                  >
                    50
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 75 ? "#ee1d52" : "gray",
                      fontWeight: count >= 75 ? 700 : 400,
                      zIndex: "20",
                      right: "-120px",
                    }}
                  >
                    75
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      color: count >= 100 ? "#ee1d52" : "gray",
                      fontWeight: count >= 100 ? 700 : 400,
                      zIndex: "20",
                      right: "-100px",
                      bottom: "-70px",
                    }}
                  >
                    100
                  </span>
                  <p className="circle-percen">{count}%</p>
                  <div
                    style={{
                      position: "absolute",
                      height: "300px",
                      width: "300px",
                      borderRadius: "50%",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(210deg)",

                      background: `conic-gradient(#ee1d52 ${deg}deg, #4c5154 0deg)`,
                      transition: "ease-in-out 500ms",
                    }}
                  >
                    <div
                      style={{
                        height: "250px",
                        width: "250px",
                        borderRadius: "50%",
                        backgroundColor: "#131b1e",
                        position: "absolute",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "ease-in-out 500ms",
                      }}
                    >
                      <p className="circle-font">{data}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "70px",
                      left: "-140px",
                      width: "300px",
                      height: "100px",
                      backgroundColor: "#131b1e",
                    }}
                  ></div>
                </div>
                <p className="absolute font-secondry text-gray-400 p-1 pl-4 pr-4 -left-20 top-24 w-40">
                  Click the Skill Tag
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* section project */}
        <div
          className="flex justify-center items-center pt-50 pb-28"
          id="work"
          ref={refWork}
        >
          <div className="w-11/12 h-auto lg:w-5/6 xl:w-3/4 2xl:w-2/3 ">
            <div className="flex flex-col justify-center items-center ">
              <h3 className="font-primary text-blueEdit text-titleFont lg:text-6xl lg:pb-5">
                My Projects
              </h3>
              <motion.div
                className="flex flex-col justify-center items-center mt-8 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={betting}
                    alt="betting app"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Betting App Landing Page
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A promotional landing page designed to introduce a mobile
                    sports betting app. It uses bold typography, a vibrant blue
                    color, and a mockup of a phone screen displaying betting
                    odds. Great for startups in the iGaming or sportsbook
                    industry. You could enhance it by adding live betting stats
                    or demo reels.
                  </p>
                  <div className="flex flex-row mt-3">
                    <a href="https://github.com/frederickboyd/betting-app">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={billrewards}
                    alt="billrewards"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    BillRewards Dashboard
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A dark-themed dashboard for uploading bills and earning
                    rewards in cryptocurrency (APT). Features include available
                    balance, upload options, and reward redemption. Perfect for
                    a Web3 loyalty rewards app. Could be improved with
                    gamification (e.g., streak bonuses) and user analytics.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/Bill-Rewards">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-8 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={canva}
                    alt="canva"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Canva Homepage UI
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    Canva’s homepage tailored for Portuguese-speaking users. It
                    offers a clean and colorful UI with quick access to design
                    types like presentations, social media posts, and resumes.
                    Excellent UX inspiration for a multi-purpose design tool.
                    You could adapt this for a local design startup offering
                    print/digital templates.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/canva-next">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={coinnow}
                    alt="coinnow"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Coinland ICO & Crypto Template
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A vibrant dual-theme website template promoting a crypto/ICO
                    project, showcasing token info, trust indicators, and
                    blockchain illustrations. Ideal for a crypto launchpad or
                    Web3 agency. You could plug in animated infographics and
                    interactive tokenomics widgets.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/Coinnow">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-8 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={cryptovault}
                    alt="cryptovault"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    CryptoVault IPFS File Storage
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A simple Web3 interface for uploading and retrieving
                    encrypted files via IPFS. Offers AES or key share encryption
                    and download options. A secure storage service for
                    privacy-focused users. Add wallet integration, activity
                    logs, and encryption tutorials for UX boost.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/CVIPFS">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={fullstackpro}
                    alt="fullstackpro"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Full Stack Developer Portfolio
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A sleek personal portfolio in a deep blue theme, showcasing
                    projects and offering navigation through a vertical sidebar.
                    Ideal for freelance or job-seeking developers. Could be
                    expanded with a blog section or animated project previews.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/fullstack-pro-">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={hoteladmin}
                    alt="hotel admin"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Internet Reservation System
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-10 ">
                    A pastel-toned hero section for a hotel reservation
                    platform. It shows mobile booking features with playful
                    illustrations. Great for travel or hospitality startups. Add
                    a demo booking feature or reviews carousel for engagement.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/hotel-booking-admin">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={hotelbooking}
                    alt="hotel booking"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Booking Hotels Landing Page
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A clean, minimal layout designed for a hotel booking
                    platform, highlighting features like layout organization and
                    modern design. Use this as a base for Airbnb-like platforms
                    or boutique hotel websites. Integrate with real-time
                    availability and filters.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/hotel-booking-app">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-center items-center mt-8 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={infinitus}
                    alt="infinitus"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Infinitus – Techno Cultural Fest Landing Page
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A visually engaging countdown page for SRM University's
                    "INFINITUS 2024" fest. It uses a cosmic theme with bold
                    typography and a central call-to-action ("Register Now").
                    Perfect for student-led event promotions. Enhance by adding
                    dynamic event highlights, speaker details, or a gallery
                    section.
                  </p>
                  <div className="flex flex-row mt-3">
                    <a href="https://github.com/frederickboyd/infinitus2024">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={lightningtime}
                    alt="lightningtime"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    LightningTime – Admin Dashboard for Worker Payments
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A dark-themed admin dashboard showing Lightning Network
                    worker stats like hours worked, earnings in sats, and node
                    status. Ideal for a Bitcoin micropayment-based work-tracking
                    platform. Could benefit from real-time logs, time-in/out
                    features, and exportable reports.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/LightningTime">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-8 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={netnotes}
                    alt="netnotes"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    NeuNotes – Collaborative Academic Notes Platform
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A web app for sharing and organizing course notes. Users can
                    create new courses, view available ones, and access an admin
                    dashboard. Great for university students and peer-to-peer
                    academic sharing. Could add rating systems, comment threads,
                    and file attachments for richer content.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/Neu_Notes_Project">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={noteit}
                    alt="noteit"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    NoteIt – Mobile Learning App UI
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A multi-screen mobile interface offering note sharing,
                    course recommendations, and personal learning analysis.
                    Solid base for an e-learning app. Could evolve by
                    integrating gamified learning paths, cloud sync, and
                    AI-generated quiz features.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/Note_IT-Note-sharing-APP-">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-8 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={pokearena}
                    alt="pokearena"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Pokémon Arena (Web3 Card Purchase Platform)
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    A web-based game marketplace where users can purchase
                    Pokémon cards using APTOS tokens, with Web3 wallet
                    integration for transactions. Great for NFT or tokenized
                    gaming assets. Add animations, rarity filters, and a
                    collection tracker for user engagement.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/poke-arena">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row-reverse"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={rapido}
                    alt="rapido"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:items-start">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Rapido App Onboarding Screens
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-mr-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-30 ">
                    Clean mobile UI with bold illustrations and yellow-themed
                    branding, showcasing onboarding for a ride-sharing and
                    delivery service. Excellent for logistics or ride-hailing
                    startups. Consider real-time driver tracking and reward
                    point systems for daily commuters.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/Rapido-main">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center items-center mt-16 lg:flex-row"
                variants={scrollAnimation}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex relative lg:hover:scale-110 lg:hover:z-50 lg:duration-300">
                  <img
                    className="rounded-lg border border-cyan-200 lg:border-none"
                    src={reactlandingpagetemplate}
                    alt="reactlandingpagetemplate"
                  />
                  <div className="hidden lg:block lg:absolute lg:bg-blueEdit lg:w-full lg:h-full lg:rounded-lg lg:opacity-30 lg:hover:opacity-0 lg:duration-300"></div>
                </div>
                <div className="flex flex-col justify-start mt-5 lg:justify-end lg:items-end">
                  <h3 className="font-secondry text-blueEdit text-3xl font-medium ">
                    Startup Landing Page Template
                  </h3>
                  <p className="font-secondry text-white pt-5 pb-5 lg:bg-textbg lg:pl-7 lg:pr-7 lg:-ml-28 lg:text-navtextcolor lg:text-lg lg:rounded lg:shadow-md lg:mt-5 lg:mb-5 lg:z-10 ">
                    A white-background, minimal landing page with playful
                    illustrations and marketing copy geared toward startups.
                    Excellent for SaaS products or new tech ventures. Enhance
                    with testimonial sliders, animated metrics, or a pricing
                    comparison table.
                  </p>
                  <div className="flex flex-row mt-3 ">
                    <a href="https://github.com/frederickboyd/startup-landing">
                      <AiFillGithub className="text-blueEdit text-4xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* section contact */}
        <div
          className="flex justify-center items-center pt-10 pb-40"
          id="contact"
          ref={refContact}
        >
          <div className="w-11/12 h-auto md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 ">
            <motion.div
              className="flex flex-col"
              variants={scrollAnimation}
              initial="offscreen"
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="font-primary text-blueEdit text-titleFont lg:text-6xl lg:pb-5 max-w-2xl">
                Get in touch
              </h3>
              <p className="font-secondry text-white pt-5 md:text-lg max mb-12">
                Whether it's a job opportunity or project, my inbox is always
                open. If you have a question or just want to say hi, feel free
                to contact me.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-8">
                  <div>
                    <h4 className="font-medium text-blueEdit text-md text-xl lg:pb-2">
                      Contact Information
                    </h4>
                    <p className="text-gray-400">
                      Fill up the form and I'll get back to you as soon as
                      possible
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MdEmail className="text-blueEdit text-2xl mt-0.5 min-w-[24px]" />
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-gray-400">
                          boydfrederick6@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MdPhone className="text-blueEdit text-2xl mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Phone</h4>
                        <p className="text-gray-400">(225) 421-0403</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MdPlace className="text-blueEdit text-2xl mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Location</h4>
                        <p className="text-gray-400">Jackson, Louisiana</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-blueEdit text-xl pb-2">
                      Connect with me
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/frederickboyd"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="bg-iconColor p-3 rounded-full text-gray-400 hover:bg-blueEdit hover:text-texticonbg transition-colors"
                      >
                        <FiGithub className="text-lg" />
                      </a>
                      <a
                        href="https://linkedin.com/in/boyd-frederick"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="bg-iconColor p-3 rounded-full text-gray-400 hover:bg-blueEdit hover:text-texticonbg transition-colors"
                      >
                        <FiLinkedin className="text-lg" />
                      </a>
                      <a
                        href="mailto:boydfrederick6@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="bg-iconColor p-3 rounded-full text-gray-400 hover:bg-blueEdit hover:text-texticonbg transition-colors"
                      >
                        <FiMail className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <motion.form
                    ref={form}
                    onSubmit={handleSubmit}
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    autoComplete="off"
                    autoCapitalize="off"
                    className="space-y-6 p-6 rounded-lg shadow-lg border border-[3px] border-texticonbg"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        placeholder="Your Name"
                        className="p-3 bg-textbg text-white rounded-md border border-[3px] border-texticonbg focus:outline-none focus:border-blueEdit bg-transparent"
                      />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        aria-required="true"
                        className="p-3 bg-textbg text-white rounded-md border border-[3px] border-texticonbg focus:outline-none focus:border-blueEdit bg-transparent"
                      />
                    </div>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      required
                      aria-required="true"
                      className="w-full p-3 bg-textbg text-white rounded-md border border-[3px] border-texticonbg focus:outline-none focus:border-blueEdit bg-transparent"
                    ></input>
                    <textarea
                      id="messageTemp"
                      name="messageTemp"
                      rows="4"
                      required
                      aria-required="true"
                      placeholder="Your Message here..."
                      className="w-full p-3 mt-6 bg-textbg text-white rounded-md border border-[3px] border-texticonbg focus:outline-none focus:border-blueEdit bg-transparent"
                    ></textarea>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Your Message here..."
                      className="w-full p-3 mt-6 bg-textbg text-white rounded-md border border-[3px] border-texticonbg focus:outline-none focus:border-blueEdit bg-transparent hidden"
                    ></textarea>
                    <button
                      type="submit"
                      className="mt-4 px-6 py-3 bg-transparent text-blueEdit rounded-md hover:bg-blueEdit hover:text-black transition-colors border border-blueEdit"
                    >
                      Send Message
                    </button>
                  </motion.form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
        <ButtomNav active={active} />
        <div className={`${hidebtn ? "block" : "hidden"}`}>
          <BackToTopBtn />
        </div>
      </div>
    )
  );
}

export default App;
