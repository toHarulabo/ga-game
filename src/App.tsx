import React from "react";
import { Pikachu } from "./Pikamode/Pikachu";
import { Home } from "./Home";
import { Makepika } from "./Pikamode/Makepika";
import { Makeenso } from "./Ensomode/Makeenso";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { motion } from "framer-motion";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};
