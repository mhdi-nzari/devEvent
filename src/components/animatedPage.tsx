import { useEffect } from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 300 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -300 },
};
const AnimatedPage = ({ children }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "var(--backgroundColor)" }}>
      <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedPage;
