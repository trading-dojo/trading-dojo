import React, { useState, useEffect, useRef } from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import CountUp from 'react-countup';

const DoTheMath: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [inView, setInView] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <Box
      backgroundColor="#0b0e13"
      height="600px"
      width="100%"
      padding={4}
      textAlign="center"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      ref={boxRef} // Attach the ref here
    >
      {/* Título */}
      <Text fontSize={isMobile ? "4xl" : "6xl"} fontWeight="bold" mb={12}>
        Do the Math.
      </Text>

      {/* Seção dos dados */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        gap={8}
        width="100%"
        maxWidth="100%"
      >
        {/* Primeiro item */}
        <Box textAlign="center" flex="1">
          <Text fontSize={isMobile ? "3xl" : "5xl"} fontWeight="bold" color="#01baef">
            {inView && <CountUp start={0} end={10000000} duration={4} separator="," />}+
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"}>
            In Funding Achieved by-Trading DOJO Students
          </Text>
        </Box>

        {/* Segundo item */}
        <Box textAlign="center" flex="1">
          <Text fontSize={isMobile ? "3xl" : "5xl"} fontWeight="bold" color="#01baef">
            {inView && <CountUp start={0} end={3000000} duration={4} separator="," />}+
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"}>
            In Funding Achieved by-Trading DOJO Mentors
          </Text>
        </Box>

        {/* Terceiro item */}
        <Box textAlign="center" flex="1">
          <Text fontSize={isMobile ? "3xl" : "5xl"} fontWeight="bold" color="#01baef">
            {inView && <CountUp start={0} end={2200} duration={4} separator="," />}+
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"}>
            Diverse Students from all around the World
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DoTheMath;
