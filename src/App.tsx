import React from "react";
import { Pikachu } from "./Pikamode/Pikachu";
import { Home } from "./Home";
import { Makepika } from "./Pikamode/Makepika";
import { Makeenso } from "./Ensomode/Makeenso";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { Makemicky } from "./Mickymode/Makemicky";
import { Makedora } from "./Doramode/Makedora";
import { Makemario } from "./Mariomode/Makemario";
import { Makekirby } from "./Kirbymode/Makekirby";
import { Makeampan } from "./Ampanmode/Makeampan";
import { Makepom } from "./Pommode/Makepom";
import { Inst } from "./Inst";

export const App = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-10vw",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "10vw",
    },
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Inst"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Inst />
              </motion.div>
            }
          />
          <Route
            path="/Makepika"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makepika />
              </motion.div>
            }
          />
          <Route
            path="/Makeenso"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makeenso />
              </motion.div>
            }
          />
          <Route
            path="/Makemicky"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makemicky />
              </motion.div>
            }
          />
          <Route
            path="/Makedora"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makedora />
              </motion.div>
            }
          />
          <Route
            path="/Makemario"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makemario />
              </motion.div>
            }
          />

          <Route
            path="/Makekirby"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makekirby />
              </motion.div>
            }
          />

          <Route
            path="/Makeampan"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makeampan />
              </motion.div>
            }
          />

          <Route
            path="/Makepom"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makepom />
              </motion.div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
