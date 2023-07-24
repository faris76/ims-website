import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Faculty from "./pages/Faculty";
import FacultyDetail from "./pages/FacultyDetail";
import Home from "./pages/Home";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

const Router = () => {
  const faculty = [
    {
      id: 0,
      name: "Prof. Dr. Usman Ghani",
      image: "https://imsciences.edu.pk/pages/employment/pic/director_g.JPG",
      title: "Tenured Professor Director",
      qualification:
        "Post Doctorate, Gatton College of Business & Economics,University of Kentucky,USA, PhD , SZABIST, Islamabad",
      areaOfInterest:
        "Consumer Behaviour, Brand Management, Social Media Marketing",
      email: "usman.ghani@imsciences.edu.pk",
    },
    {
      id: 1,
      name: "Prof. Dr. Atta ur Rahman",
      image: "https://imsciences.edu.pk/pages/employment/pic/attaur.JPG",
      title:
        "Tenured Professor Joint Director Coordinator MS & PhD Economics Programs",
      qualification:
        "Post Doctorate, The University of Queensland Brisbane, Australia., PhD, Vienna University of Technology, Austria.",
      areaOfInterest: "Econometrics,Statistics",
      email: "attaurrahman@imsciences.edu.pk",
    },
    {
      id: 2,
      name: "Prof. Dr. Attaullah Shah",
      image: "https://imsciences.edu.pk/pages/employment/pic/atta.JPG",
      title: "Tenured Professor",
      qualification: "PhD from Mohammad Ali Jinnah University ,Islamabad.",
      areaOfInterest: "Corporate Finance",
      email: "attaullah.shah@imsciences.edu.pk",
    },
    {
      id: 3,
      name: "Prof. Dr. Muhammad Rafiq",
      image: "https://imsciences.edu.pk/pages/employment/pic/rafiq.JPG",
      title:
        "Tenured Professor Coordinator Water Informatics and Climate Resilience (CWC)",
      qualification:
        " PhD,Agricultural University Peshawar M.Phil, University of Peshawar",
      areaOfInterest:
        "Environmentl Economics, Labor Economics, Health Economics, Development Economics",
      email: "muhammad.rafiq@imsciences.edu.pk",
    },
    {
      id: 4,
      name: "Prof. Dr. Tamleek Ali Tanveer",
      image: "https://imsciences.edu.pk/pages/employment/pic/tamleeq1.jpg",
      title: "Tenured Professor",
      qualification:
        "PhD from IMSciences,Peshawar MS, International Islamic University Islamabad",
      areaOfInterest: "Computer Security Trusted Computing Usage Control",
      email: "tamleek@imsciences.edu.pk",
    },
    {
      id: 5,
      name: "Prof. Dr. Sajid Anwar",
      image: "https://imsciences.edu.pk/pages/employment/pic/sajid_1.JPG",
      title: "Tenured Professor",
      qualification: "PhD from FAST",
      areaOfInterest:
        "Software Engineering, Software Architecture, Software Testing, Search Based Software Engineering and Software Maintenance",
      email: "sajid.anwar@imsciences.edu.pk",
    },
    {
      id: 6,
      name: "Prof. Dr. Muhammad Nouman",
      image: "https://imsciences.edu.pk/pages/employment/pic/nouman5.jpg",
      title: "Tenured Professor",
      qualification:
        "PhD,University of Southampton, UK MS & MBA, University of Texas at Arlington, USA",
      areaOfInterest: "Innovation Management & Marketing",
      email: "muhammad.nouman@imsciences.edu.pk",
    },
    {
      id: 7,
      name: "Prof. Dr. Waseef Jamal",
      image: "https://imsciences.edu.pk/pages/employment/pic/waseef.JPG",
      title: "Tenured Professor",
      qualification: "PhD, Foundation University, Islamabad",
      areaOfInterest: "Human Resource Management",
      email: "waseef.jamal@imsciences.edu.pk",
    },
    {
      id: 8,
      name: "Prof. Dr Aamer Taj",
      image: "https://imsciences.edu.pk/pages/employment/pic/taj.jpeg",
      title: "Tenured Professor Coordinator MS Development Studies",
      qualification:
        " Post-Doctoral Research at George Washington University, USA; PhD, University of Southampton, UK; MS, University of Manchester, UK; MBA (IM|Sciences); MA Economics, University of Peshawar",
      areaOfInterest: "Public Policy Analysis",
      email: "aamer.taj@imsciences.edu.pk",
    },
    {
      id: 9,
      name: "Prof. Dr. Shahid Ali",
      image: "https://imsciences.edu.pk/pages/employment/pic/shahid_sir.JPG",
      title: "Tenured Professor Coordinator MS/PhD (Management)",
      qualification:
        " PhD MS, Mohammad Ali Jinnah University MSc (Statistics), University of Peshawar",
      areaOfInterest: "Corporate Finance",
      email: "shahid.ali@imsciences.edu.pk",
    },
    {
      id: 10,
      name: "Prof. Dr. Awais Adnan",
      image: "https://imsciences.edu.pk/pages/employment/pic/awais2.jpg",
      title: "Professor Coordinator ORIC",
      qualification:
        "PhD from IMSciences, Peshawar MS, National University of Science & Technology, Rawalpindi",
      areaOfInterest: "Networks on Chip. Multimedia/ Digital image Processing.",
      email: "awaisadnan@gmail.com",
    },
    {
      id: 11,
      name: "Dr. Muhammad Ali",
      image: "https://imsciences.edu.pk/pages/employment/pic/e_jd.jpg",
      title: "Tenured Associate Professor",
      qualification: "PhD from University of Innsbruck, Austria",
      areaOfInterest:
        "Computer Networks, On-Chip networks, Fault Tolerant Dependable System",
      email: "muhammad.ali@imsciences.edu.pk",
    },
  ];
  return (
    <Routers>
      <Header />
      <Tabs />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/faculty"
          element={<Faculty facultyList={faculty} />}
        />
        <Route
          exact
          path="/faculty/faculty-detail/:id"
          element={<FacultyDetail facultyList={faculty} />}
        />
      </Routes>
      <Footer />
    </Routers>
  );
};

export default Router;
