import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,  
    triggerOnce: true,  
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
      }} 
      transition={{
        duration: 1, 
        ease: "easeOut", 
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
