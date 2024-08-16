import React from "react";
import { Box, Text, Image, Grid, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import img1 from "./images/img1.png";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img3.jpg"; // Nova imagem

const MotionBox = motion(Box);

const ExclusiveAccess: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const controls = useAnimation();

  const handleScroll = () => {
    const sections = document.querySelectorAll(".animate");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 2 }, // Duração mais lenta
        });
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box padding={4} maxWidth="1200px" margin="auto" textAlign="left" marginTop="120px">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="white" textAlign="center">
        You Will Also Have <span style={{ color: "#ff4d4d" }}>Exclusive Lifetime Access</span> To:
      </Text>
      <Grid
        templateColumns={isMobile ? "1fr" : "1fr 1fr"}
        gap={6}
        alignItems="center"
        mb={12}
        templateRows="auto auto auto"
      >
        {/* Primeira Linha */}
        <MotionBox
          className="animate"
          initial={{ opacity: 0, x: -100 }}  // Coluna da esquerda
          animate={controls}
        >
          <Image
            src={img2}
            alt="Private Mentoring"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </MotionBox>
        <MotionBox
          className="animate"
          initial={{ opacity: 0, x: 100 }}  // Coluna da direita
          animate={controls}
        >
          <Text fontSize="xl" color="white">
            <Text as="strong" color="#ff4d4d">Dojo Vip Private Community:</Text> <br />
            You will have direct access to our mentors & private community students and resources. Weekly live trading calls & mentorship videos.
          </Text>
        </MotionBox>

        {/* Segunda Linha */}
        <MotionBox
          className="animate"
          initial={{ opacity: 0, x: -100 }}  // Coluna da esquerda
          animate={controls}
        >
          <Text fontSize="xl" color="white">
            <Text as="strong" color="#ff4d4d">Dojo VIP Signals Group</Text> <br />
            Get access to our Vip Chat, Vip Signals, Bi - Weekly Homeworks, & Private Calls with our mentors to get you profitable in 4-8 months.
          </Text>
        </MotionBox>
        <MotionBox
          className="animate"
          initial={{ opacity: 0, x: 100 }}  // Coluna da direita
          animate={controls}
        >
          <Image
            src={img2}
            alt="Trading Station Software"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </MotionBox>

        {/* Terceira Linha */}
        <MotionBox
          className="animate"
          initial={{ opacity: 0, x: -100 }}  // Coluna da esquerda
          animate={controls}
        >
          <Image
            src={img4} // Nova imagem
            alt="New Feature"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </MotionBox>
        <MotionBox
          className="animate"
          initial={{ opacity: 0, x: 100 }}  // Coluna da direita
          animate={controls}
        >
          <Text fontSize="xl" color="white">
            <Text as="strong" color="#ff4d4d">TradeDay Practice Accounts:</Text> <br />
            While you study we encourage you to take live trades on the concepts you pick up along the way. Start a 14 day futures trial and practice live executions with our models.
          </Text>
        </MotionBox>
      </Grid>
    </Box>
  );
};

export default ExclusiveAccess;
