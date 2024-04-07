import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SkillDataProvider = ({ src, width, height, index }) => {
     const [inView, setInView] = useState(false);
     const ref = useRef(null);

     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY + window.innerHeight;
               const elementPosition = ref.current.offsetTop;

               if (scrollPosition > elementPosition) {
                    setInView(true);
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const imageVariants = {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
     };

     const animationDelay = 0.3;

     return (
          <motion.div
               ref={ref}
               initial="hidden"
               variants={imageVariants}
               animate={inView ? 'visible' : 'hidden'}
               custom={index}
               transition={{ delay: index * animationDelay }}
          >
               <img
                    src={src}
                    width={width}
                    height={height}
                    alt="skill image"
               />
          </motion.div>
     );
};

export default SkillDataProvider;
