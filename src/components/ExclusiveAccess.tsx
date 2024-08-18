import React, { useEffect, useRef } from "react";
import { Box, Text, Image, Grid, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import img1 from "./images/exlusive2.png";
import img2 from "./images/Survimo-FAQ-3.png";
import img3 from "./images/pngwing.com.png";
import img4 from "./images/img3.jpg"; // Nova imagem

const MotionBox = motion(Box);

const ExclusiveAccess: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const fontSize = useBreakpointValue({ base: "sm", md: "lg", lg: "xl" });
  const textMargin = useBreakpointValue({ base: "4", md: "6", lg: "6" });
  const imageHeight = useBreakpointValue({ base: "150px", md: "250px", lg: "350px" });
  const imageWidth = useBreakpointValue({ base: "100%", md: "100%", lg: "80%" });

  // Adicionando mais largura para telas grandes
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr 1fr",
    md: "1fr 1fr",
    lg: "1.5fr 1.5fr", // Aumenta a largura em telas grandes
  });

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls1.start({ opacity: 1, y: 0, transition: { duration: 1.5 } });
        }
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start({ opacity: 1, y: 0, transition: { duration: 1.5 } });
        }
      },
      { threshold: 0.5 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls3.start({ opacity: 1, y: 0, transition: { duration: 1.5 } });
        }
      },
      { threshold: 0.5 }
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
    };
  }, [controls1, controls2, controls3]);

  return (
    <Box padding={4} maxWidth="1400px" margin="auto" textAlign="left" marginTop="120px">
      <Text fontSize="28px" fontWeight="bold" mb={textMargin} color="white" textAlign="center">
        You Will Also Have <span style={{ color: "#ff4d4d" }}>Exclusive Lifetime Access</span> To:
      </Text>
      <Grid
        templateColumns={gridTemplateColumns} // Ajuste da largura das colunas
        gap={textMargin}
        alignItems="center"
        mb={12}
      >
        {/* Primeira Linha */}
        <MotionBox
          ref={ref1}
          className="animate"
          initial={{ opacity: 0, y: 50 }} // Aparecer de baixo para cima
          animate={controls1}
        >
          <Image
            src={img2}
            alt="Private Mentoring"
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
          />
        </MotionBox>
        <MotionBox
          ref={ref1}
          className="animate"
          initial={{ opacity: 0, y: 50 }} // Aparecer de baixo para cima
          animate={controls1}
        >
          <Text fontSize={fontSize} color="white">
            <Text as="strong" color="#ff4d4d">Dojo Vip Private Community:</Text> <br />
            You will have direct access to our mentors & private community students and resources. Weekly live trading calls & mentorship videos.
          </Text>
        </MotionBox>

        {/* Segunda Linha */}
        <MotionBox
          ref={ref2}
          className="animate"
          initial={{ opacity: 0, y: 50 }} // Aparecer de baixo para cima
          animate={controls2}
        >
          <Text fontSize={fontSize} color="white">
            <Text as="strong" color="#ff4d4d">Dojo VIP Signals Group</Text> <br />
            Get access to our Vip Chat, Vip Signals, Bi - Weekly Homeworks, & Private Calls with our mentors to get you profitable in 4-8 months.
          </Text>
        </MotionBox>
        <MotionBox
          ref={ref2}
          className="animate"
          initial={{ opacity: 0, y: 50 }} // Aparecer de baixo para cima
          animate={controls2}
        >
          <Image
            src={img3}
            alt="Trading Station Software"
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
          />
        </MotionBox>

        {/* Terceira Linha */}
        <MotionBox
          ref={ref3}
          className="animate"
          initial={{ opacity: 0, y: 50 }} // Aparecer de baixo para cima
          animate={controls3}
        >
          <Image
            src={img1} // Nova imagem
            alt="New Feature"
            width={imageWidth}
            height={imageHeight}
            objectFit="cover"
          />
        </MotionBox>
        <MotionBox
          ref={ref3}
          className="animate"
          initial={{ opacity: 0, y: 50 }} // Aparecer de baixo para cima
          animate={controls3}
        >
          <Text fontSize={fontSize} color="white">
            <Text as="strong" color="#ff4d4d">TradeDay Practice Accounts:</Text> <br />
            While you study we encourage you to take live trades on the concepts you pick up along the way. Start a 14 day futures trial and practice live executions with our models.
          </Text>
        </MotionBox>
      </Grid>
    </Box>
  );
};

export default ExclusiveAccess;
