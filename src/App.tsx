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
import { Makehari } from "./Harimode/Makehari";
import { CopyrightFree } from "./CopyrightFree";
import { Makekabocha } from "./Kabochamode/Makekabocha";
import { Makepengin } from "./Penginmode/Makepengin";
import { Makesuika } from "./Suikamode/Makesuika";
import { Makehitachi } from "./Hitachimode/Makehitachi";
import { InstFree } from "./InstFree";

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
            path="/CopyrightFree/InstFree"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <InstFree />
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

          <Route
            path="/Makehari"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makehari />
              </motion.div>
            }
          />

          <Route
            path="/Makekabocha"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makekabocha />
              </motion.div>
            }
          />
          <Route
            path="/Makepengin"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makepengin />
              </motion.div>
            }
          />

          <Route
            path="/Makesuika"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makesuika />
              </motion.div>
            }
          />

          <Route
            path="/Makehitachi"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
              >
                <Makehitachi />
              </motion.div>
            }
          />
          <Route path="/CopyrightFree" element={<CopyrightFree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
