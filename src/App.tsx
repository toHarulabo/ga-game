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
          <Route path="/ga-game" element={<Home />} />
          <Route
            path="/ga-game/Inst"
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
            path="/ga-game/CopyrightFree/InstFree"
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
            path="/ga-game/Makepika"
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
            path="/ga-game/Makeenso"
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
            path="/ga-game/Makemicky"
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
            path="/ga-game/Makedora"
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
            path="/ga-game/Makemario"
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
            path="/ga-game/Makekirby"
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
            path="/ga-game/Makeampan"
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
            path="/ga-game/Makepom"
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
            path="/ga-game/Makehari"
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
            path="/ga-game/Makekabocha"
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
            path="/ga-game/Makepengin"
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
            path="/ga-game/Makesuika"
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
            path="/ga-game/Makehitachi"
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
          <Route path="/ga-game/CopyrightFree" element={<CopyrightFree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
