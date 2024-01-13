import React from "react";
import { motion } from "framer-motion";

const FramerMotionApp = () => {
  return (
    <div className="w-full min-h-screen bg-[#d98767] overflow-hidden">
      <div className="min-h-screen w-full p-12 my-12 flex justify-between items-center">
        <motion.p
          className="min-w-[300px] max-w-[500px] w-fit text-xl text-black h-auto"
          initial={{ opacity: 0, x: 200, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Reprehenderit ea mollit culpa cupidatat proident duis cupidatat magna
          enim minim cillum deserunt cillum tempor. Anim ex amet sunt duis
          ullamco sit sunt amet non ea exercitation. Labore est commodo aliqua
          occaecat sit labore qui.
        </motion.p>
        <motion.div
          className="w-[300px] h-[300px] bg-green-700 rounded-xl"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={{ ease: "easeOut", duration: 1 }}
        />
      </div>
      <div className="min-h-screen w-full p-12 my-12 flex justify-between items-center">
        <motion.p
          className="min-w-[300px] max-w-[500px] w-fit text-xl text-black h-auto"
          initial={{ opacity: 0, x: 200, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Reprehenderit ea mollit culpa cupidatat proident duis cupidatat magna
          enim minim cillum deserunt cillum tempor. Anim ex amet sunt duis
          ullamco sit sunt amet non ea exercitation. Labore est commodo aliqua
          occaecat sit labore qui.
        </motion.p>
        <motion.div
          className="w-[300px] h-[300px] bg-green-700 rounded-xl"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={{ ease: "easeOut", duration: 1 }}
        />
      </div>
      <div className="min-h-screen w-full p-12 my-12 flex justify-between items-center">
        <motion.p
          className="min-w-[300px] max-w-[500px] w-fit text-xl text-black h-auto"
          initial={{ opacity: 0, x: 200, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Reprehenderit ea mollit culpa cupidatat proident duis cupidatat magna
          enim minim cillum deserunt cillum tempor. Anim ex amet sunt duis
          ullamco sit sunt amet non ea exercitation. Labore est commodo aliqua
          occaecat sit labore qui.
        </motion.p>
        <motion.div
          className="w-[300px] h-[300px] bg-green-700 rounded-xl"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={{ ease: "easeOut", duration: 1 }}
        />
      </div>
      <div className="min-h-screen w-full p-12 my-12 flex justify-between items-center">
        <motion.p
          className="min-w-[300px] max-w-[500px] w-fit text-xl text-black h-auto"
          initial={{ opacity: 0, x: 200, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Reprehenderit ea mollit culpa cupidatat proident duis cupidatat magna
          enim minim cillum deserunt cillum tempor. Anim ex amet sunt duis
          ullamco sit sunt amet non ea exercitation. Labore est commodo aliqua
          occaecat sit labore qui.
        </motion.p>
        <motion.div
          className="w-[300px] h-[300px] bg-green-700 rounded-xl"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={{ ease: "easeOut", duration: 1 }}
        />
      </div>
      <div className="min-h-screen w-full p-12 my-12 flex justify-between items-center">
        <motion.p
          className="min-w-[300px] max-w-[500px] w-fit text-xl text-black h-auto"
          initial={{ opacity: 0, x: 200, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Reprehenderit ea mollit culpa cupidatat proident duis cupidatat magna
          enim minim cillum deserunt cillum tempor. Anim ex amet sunt duis
          ullamco sit sunt amet non ea exercitation. Labore est commodo aliqua
          occaecat sit labore qui.
        </motion.p>
        <motion.div
          className="w-[300px] h-[300px] bg-green-700 rounded-xl"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: -200 }}
          transition={{ ease: "easeOut", duration: 1 }}
        />
      </div>
    </div>
  );
};

export default FramerMotionApp;
