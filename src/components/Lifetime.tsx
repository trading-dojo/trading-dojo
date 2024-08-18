import React, { useEffect, useState } from "react";
import { Box, Grid, Text, UnorderedList, ListItem, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import img1 from "./images/icone.png";

// Cria um componente MotionBox que adiciona animação
const MotionBox = motion(Box);

const Lifetime: React.FC = () => {
  // Controla o número de colunas em diferentes tamanhos de tela
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  // Define os tamanhos de fonte para diferentes tamanhos de tela
  const titleFontSize = useBreakpointValue({ base: "xl", sm: "2xl", md: "3xl" });
  const itemFontSize = useBreakpointValue({ base: "sm", sm: "lg", md: "xl" });

  // Animações
  const [inView, setInView] = useState<boolean[]>(Array(6).fill(false)); // Suporte para 6 animações

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setInView((prevInView) => {
              const newInView = [...prevInView];
              newInView[index] = true;
              return newInView;
            });
          }
        });
      },
      { threshold: 0.1 } // Ajuste o threshold para definir quando a animação deve começar
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Box padding={4} maxWidth="1200px" margin="auto" textAlign="left" marginTop="120px">
      <Text fontSize={titleFontSize} fontWeight="bold" mb={6} color="white" textAlign="center">
        Lifetime Access To All The <span style={{ color: "#ff4d4d" }}>Exclusive Courses</span>
      </Text>

      <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={6} mb={6} marginTop="70px">
        {[
          {
            title: "How to find higher time frame narrative",
            items: [
              "How to utilize seasonal tendencies",
              "How to mark out Daily / Weekly inefficiencies",
              "Multi-timeframe analysis",
              "How to utilize NWOG and NDOG",
              "Trading daily bias intraday"
            ]
          },
          {
            title: "How we take trades",
            items: [
              "How we scalp lower time frames",
              "Swing trading daily / weekly ranges",
              "Mastering risk management Sniper entries",
              "Scaling from higher to lower time frames"
            ]
          },
          {
            title: "Psychology / Warrior Mind",
            items: [
              "How to calculate risk",
              "Higher win rate & RR",
              "Mastering psychology",
              "Compounding your personal accounts",
              "Drawdown risk management"
            ]
          }
        ].map((section, index) => (
          <MotionBox
            key={index}
            p={4}
            borderRadius="md"
            color="white"
            className="animate"
            data-index={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.5, delay: index * 0.5 }} // Animação mais lenta
          >
            <Text fontSize={titleFontSize} fontWeight="bold" mb={4} display="flex" alignItems="center">
              <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
              {section.title}
            </Text>
            <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
              {section.items.map((item, itemIndex) => (
                <ListItem key={itemIndex} fontSize={itemFontSize}>
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </MotionBox>
        ))}

        {[
          {
            title: "Swing Trading Weekly Expansion",
            items: [
              "Weekly Profiles",
              "News",
              "Fundamental Drivers",
              "PD Array analysis",
              "Stop loss and Trade Management",
              "Integrating Risk Management",
              "Holding trades through swap"
            ]
          },
          {
            title: "Trading Intraday / Scalping",
            items: [
              "PO3",
              "AMD",
              "Lower Time Frame Narrative",
              "ICT models on breaker blocks, IFVGs, session based liquidity"
            ]
          },
          {
            title: "Learning about prop firms and personal capital",
            items: [
              "How to open accounts",
              "How to pass prop firms",
              "How to manage personal capital",
              "Scaling the account",
              "Weekly payouts"
            ]
          }
        ].map((section, index) => (
          <MotionBox
            key={index + 3} // Ajuste a chave para evitar conflitos com as anteriores
            p={4}
            borderRadius="md"
            color="white"
            className="animate"
            data-index={index + 3}
            initial={{ opacity: 0, y: 20 }}
            animate={inView[index + 3] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.5, delay: (index + 3) * 0.5 }} // Animação mais lenta
          >
            <Text fontSize={titleFontSize} fontWeight="bold" mb={4} display="flex" alignItems="center">
              <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
              {section.title}
            </Text>
            <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
              {section.items.map((item, itemIndex) => (
                <ListItem key={itemIndex} fontSize={itemFontSize}>
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default Lifetime;
