import React from "react";
import { Box, Grid, Text, UnorderedList, ListItem, Image, useBreakpointValue } from "@chakra-ui/react";
import img1 from "./images/icone.png";

const Lifetime: React.FC = () => {
  // Controla o número de colunas em diferentes tamanhos de tela
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box padding={4} maxWidth="1200px" margin="auto" textAlign="left" marginTop="120px">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="white" textAlign="center">
        Lifetime Access To All The <span style={{ color: "#ff4d4d" }}>Exclusive Courses</span>
      </Text>

      <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={6} mb={6} marginTop="70px">
        <Box p={4} borderRadius="md"  color="white">
          <Text fontSize="xl" fontWeight="bold" mb={4} display="flex" alignItems="center">
            <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
            How to find higher time frame narrative

          </Text>
          <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <ListItem>How to utilize seasonal tendencies</ListItem>
            <ListItem>How to mark out Daily / Weekly inefficiencies</ListItem>
            <ListItem>Multi-timeframe analysis</ListItem>
            <ListItem>How to utilize NWOG and NDOG</ListItem>
            <ListItem>Trading daily bias intraday</ListItem>
           
          </UnorderedList>
        </Box>

        <Box p={4} borderRadius="md"  color="white">
          <Text fontSize="xl" fontWeight="bold" mb={4} display="flex" alignItems="center">
            <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
            How we take trades
          </Text>
          <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <ListItem>How we scalp lower time frames </ListItem>
            <ListItem>Swing trading daily / weekly ranges            </ListItem>
            <ListItem>Mastering risk management Sniper entries</ListItem>
            <ListItem>Scaling from higher to lower time frames</ListItem>
           
          </UnorderedList>
        </Box>

        <Box p={4} borderRadius="md" color="white">
          <Text fontSize="xl" fontWeight="bold" mb={4} display="flex" alignItems="center">
            <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
            Psychology / Warrior Mind
          </Text>
          <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <ListItem>How to calculate risk</ListItem>
            <ListItem>Higher win rate & RR            </ListItem>
            <ListItem>Mastering psychology</ListItem>
            <ListItem>Compounding your personal accounts</ListItem>
            <ListItem>Drawdown risk management</ListItem>
          </UnorderedList>
        </Box>
      </Grid>

      <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={6}>
        <Box p={4} borderRadius="md"  color="white">
          <Text fontSize="xl" fontWeight="bold" mb={4} display="flex" alignItems="center">
            <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
            Swing Trading Weekly Expansion
          </Text>
          <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <ListItem>Weekly Profiles</ListItem>
            <ListItem>News</ListItem>
            <ListItem>Fundamental Drivers</ListItem>
            <ListItem>PD Array analysis</ListItem>
            <ListItem>Stop loss and Trade Management</ListItem>
            <ListItem>Integrating Risk Management</ListItem>
            <ListItem>Holding trades through swap</ListItem>
          </UnorderedList>
        </Box>

        <Box p={4} borderRadius="md"  color="white">
          <Text fontSize="xl" fontWeight="bold" mb={4} display="flex" alignItems="center">
            <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
            Trading Intraday / ScalpingRule-based day trading strategies
          </Text>
          <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <ListItem>PO3</ListItem>
            <ListItem>AMD</ListItem>
            <ListItem>Lower Time Frame Narrative</ListItem>
            <ListItem>ICT models on breaker blocks, IFVGs, session based liquidity</ListItem>
            
          </UnorderedList>
        </Box>

        <Box p={4} borderRadius="md"  color="white">
          <Text fontSize="xl" fontWeight="bold" mb={4} display="flex" alignItems="center">
            <Image src={img1} alt="Icone" boxSize="40px" mr={2} />
            Learning about prop firms and personal capital
          </Text>
          <UnorderedList spacing={3} style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <ListItem>How to open accounts</ListItem>
            <ListItem>How to pass prop firms</ListItem>
            <ListItem>How to manage personal capital            </ListItem>
            <ListItem>Scaling the account</ListItem>
            <ListItem>Weekly payouts            </ListItem>
         
          </UnorderedList>
        </Box>
      </Grid>
    </Box>
  );
};

export default Lifetime;
