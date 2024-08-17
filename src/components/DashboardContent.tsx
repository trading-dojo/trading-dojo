import React from "react";
import { Box, Text, Link, Icon, Grid, GridItem, VStack, HStack, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import row from "./images/row1.png";

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

const DashboardContent: React.FC = () => {
  const navigate = useNavigate();

  // Recupera os vídeos assistidos do localStorage
  const watchedVideos = new Set<string>(JSON.parse(localStorage.getItem('watchedVideos') || '[]'));

  const handleLinkClick = (module: string, title: string, videoId: string) => {
    navigate("/lessons", { state: { module, title, videoId } });
  };

  const isVideoWatched = (videoId: string) => watchedVideos.has(videoId);

  // Usar o hook useInView para detectar a visibilidade
  const { ref: refRiskManagement, inView: inViewRiskManagement } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: refSwingTrading, inView: inViewSwingTrading } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: refDayTrading, inView: inViewDayTrading } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: refMQL4, inView: inViewMQL4 } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Box width="100%" maxWidth="800px" padding="0 16px" margin="0 auto" color="white" mt="130px">
      {/* Risk Management & Trading Psychology Section */}
      <MotionGrid
        ref={refRiskManagement}
        templateColumns="1fr 3fr"
        gap={8}
        mb={4}
        padding="4"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewRiskManagement ? 1 : 0, y: inViewRiskManagement ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <GridItem>
          <HStack spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            Trading 
              <br />
              Psychology
            </Text>
            <Image src={row} alt="Icon" boxSize="50px" />
          </HStack>
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={1}>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("K4Bn4xoQkNE") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Trading Psychology", "Intro to psychology video", "K4Bn4xoQkNE")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("K4Bn4xoQkNE") ? CheckCircleIcon : Box}
                color={isVideoWatched("K4Bn4xoQkNE") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("K4Bn4xoQkNE") ? "0" : "2px"}
              />
              Intro to psychology video 
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("X5M3uH4y0kP") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Trading Psychology", "Gamblers Mindset", "X5M3uH4y0kP")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("X5M3uH4y0kP") ? CheckCircleIcon : Box}
                color={isVideoWatched("X5M3uH4y0kP") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("X5M3uH4y0kP") ? "0" : "2px"}
              />
              Gamblers Mindset
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("X5M3uH4y0kP") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Trading Psychology", "Proper Trade Journaling", "X5M3uH4y0kP")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("X5M3uH4y0kP") ? CheckCircleIcon : Box}
                color={isVideoWatched("X5M3uH4y0kP") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("X5M3uH4y0kP") ? "0" : "2px"}
              />
              Proper Trade Journaling
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("X5M3uH4y0kP") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Trading Psychology", "Benefits of one pair, one session, one model", "X5M3uH4y0kP")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("X5M3uH4y0kP") ? CheckCircleIcon : Box}
                color={isVideoWatched("X5M3uH4y0kP") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("X5M3uH4y0kP") ? "0" : "2px"}
              />
              Benefits of one pair, one session, one model 
            </Link>
            {/* Adicione mais episódios aqui */}
          </VStack>
        </GridItem>
      </MotionGrid>

      {/* Risk Management */}
      <MotionGrid
        ref={refSwingTrading}
        templateColumns="1fr 3fr"
        gap={8}
        mb={4}
        padding="4"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewSwingTrading ? 1 : 0, y: inViewSwingTrading ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <GridItem>
          <HStack spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            Risk Management
            </Text>
            <Image src={row} alt="Icon" boxSize="50px" />
          </HStack>
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={1}>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-swing-trading-basics") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Risk Management", "Intro to risk management", "video-id-swing-trading-basics")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-swing-trading-basics") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-swing-trading-basics") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-swing-trading-basics") ? "0" : "2px"}
              />
              Intro to risk management
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-swing-trading-strategies") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Risk Management", "Calculating risk per trade", "video-id-swing-trading-strategies")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-swing-trading-strategies") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-swing-trading-strategies") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-swing-trading-strategies") ? "0" : "2px"}
              />
              Calculating risk per trade 
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-swing-trading-strategies") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Risk Management", "Overtrading", "video-id-swing-trading-strategies")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-swing-trading-strategies") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-swing-trading-strategies") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-swing-trading-strategies") ? "0" : "2px"}
              />
              Overtrading 
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-swing-trading-strategies") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Risk Management", "Risk management on scalp positions & swing positions", "video-id-swing-trading-strategies")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-swing-trading-strategies") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-swing-trading-strategies") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-swing-trading-strategies") ? "0" : "2px"}
              />
              Risk management on scalp positions & swing positions
            </Link>
            {/* Adicione mais episódios aqui */}
          </VStack>
        </GridItem>
      </MotionGrid>

      {/* Price Action */}
      <MotionGrid
        ref={refDayTrading}
        templateColumns="1fr 3fr"
        gap={8}
        mb={4}
        padding="4"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewDayTrading ? 1 : 0, y: inViewDayTrading ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <GridItem>
          <HStack spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            Price Action
            </Text>
            <Image src={row} alt="Icon" boxSize="50px" />
          </HStack>
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={1}>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-day-trading-basics") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Price Action", "Intro to price action", "video-id-day-trading-basics")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-day-trading-basics") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-day-trading-basics") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-day-trading-basics") ? "0" : "2px"}
              />
              Intro to price action 
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-day-trading-strategies") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Price Action", "Intro to swing trading", "video-id-day-trading-strategies")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-day-trading-strategies") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-day-trading-strategies") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-day-trading-strategies") ? "0" : "2px"}
              />
              Intro to swing trading 
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-day-trading-strategies") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Price Action", "Intro to intraday scalping", "video-id-day-trading-strategies")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-day-trading-strategies") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-day-trading-strategies") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-day-trading-strategies") ? "0" : "2px"}
              />
              Intro to intraday scalping  
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-day-trading-strategies") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Price Action", "Why support & resistance is flawed", "video-id-day-trading-strategies")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-day-trading-strategies") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-day-trading-strategies") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-day-trading-strategies") ? "0" : "2px"}
              />
              Why support & resistance is flawed  
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-day-trading-strategies") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Price Action", "What pairs / currencies for the session you choose", "video-id-day-trading-strategies")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-day-trading-strategies") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-day-trading-strategies") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-day-trading-strategies") ? "0" : "2px"}
              />
              What pairs / currencies for the session you choose 
            </Link>
            {/* Adicione mais episódios aqui */}
          </VStack>
        </GridItem>
      </MotionGrid>

      {/* New York Session */}
      <MotionGrid
        ref={refMQL4}
        templateColumns="1fr 3fr"
        gap={8}
        mb={4}
        padding="4"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewMQL4 ? 1 : 0, y: inViewMQL4 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <GridItem>
          <HStack spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            New York Session
            </Text>
            <Image src={row} alt="Icon" boxSize="50px" />
          </HStack>
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={1}>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-introduction") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("New York Session", "Intro to our new york session models", "video-id-mql4-introduction")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-introduction") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-introduction") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-introduction") ? "0" : "2px"}
              />
              Intro to our new york session models 
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-syntax") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("New York Session", "Expansion Model", "video-id-mql4-syntax")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-syntax") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-syntax") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-syntax") ? "0" : "2px"}
              />
              Expansion Model 
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-strategy") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("New York Session", "Silver Bullet Model", "video-id-mql4-strategy")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-strategy") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-strategy") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-strategy") ? "0" : "2px"}
              />
              Silver Bullet Model 
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-strategy") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("New York Session", "Lunch Raid Model", "video-id-mql4-strategy")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-strategy") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-strategy") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-strategy") ? "0" : "2px"}
              />
              Lunch Raid Model
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-strategy") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("New York Session", "PM Rush Hour Close Model", "video-id-mql4-strategy")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-strategy") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-strategy") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-strategy") ? "0" : "2px"}
              />
              PM Rush Hour Close Models
            </Link>
            {/* Adicione mais episódios aqui */}
          </VStack>
        </GridItem>
      </MotionGrid>


       {/* London Session */}
       <MotionGrid
        ref={refMQL4}
        templateColumns="1fr 3fr"
        gap={8}
        mb={4}
        padding="4"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewMQL4 ? 1 : 0, y: inViewMQL4 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <GridItem>
          <HStack spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            London Session
            </Text>
            <Image src={row} alt="Icon" boxSize="50px" />
          </HStack>
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={1}>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-introduction") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("London Session", "Intro to our london session models - 15 mins (time aspects, macros, killzone, midnight open, judas & 3am silver bullet)", "video-id-mql4-introduction")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-introduction") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-introduction") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-introduction") ? "0" : "2px"}
              />
             Intro to our london session models - 15 mins  (time aspects, macros, killzone, midnight open, judas & 3am silver bullet)

            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-syntax") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("London Session", "Catching The Judas Model", "video-id-mql4-syntax")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-syntax") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-syntax") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-syntax") ? "0" : "2px"}
              />
              Catching The Judas Model

            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-strategy") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("London Session", "Silver Bullet Model", "video-id-mql4-strategy")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-strategy") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-strategy") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-strategy") ? "0" : "2px"}
              />
              Silver Bullet Model

            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-strategy") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("London Session", "Previous Session Liquidity", "video-id-mql4-strategy")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-strategy") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-strategy") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-strategy") ? "0" : "2px"}
              />
              Previous Session Liquidity

            </Link>

            {/* Adicione mais episódios aqui */}
          </VStack>
        </GridItem>
      </MotionGrid>



       {/* Tokyo Session*/}
       <MotionGrid
        ref={refMQL4}
        templateColumns="1fr 3fr"
        gap={8}
        mb={4}
        padding="4"
        borderRadius="md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewMQL4 ? 1 : 0, y: inViewMQL4 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <GridItem>
          <HStack spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            Tokyo Session
            </Text>
            <Image src={row} alt="Icon" boxSize="50px" />
          </HStack>
        </GridItem>
        <GridItem>
          <VStack align="start" spacing={1}>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-introduction") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Tokyo Session", "Intro to our Asia session models", "video-id-mql4-introduction")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-introduction") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-introduction") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-introduction") ? "0" : "2px"}
              />
              Intro to our Asia session models 
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-syntax") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Tokyo Session", "Catching The Daily Candle Expansion", "video-id-mql4-syntax")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-syntax") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-syntax") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-syntax") ? "0" : "2px"}
              />
              Catching The Daily Candle Expansion  
            </Link>
            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-strategy") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Tokyo Session", "Asia Session Breaker Model", "video-id-mql4-strategy")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-strategy") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-strategy") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-strategy") ? "0" : "2px"}
              />
              Asia Session Breaker Model 
            </Link>

            <Link
              display="flex"
              alignItems="center"
              color={isVideoWatched("video-id-mql4-strategy") ? "white" : "red.300"}
              mb={2}
              p={4}
              borderRadius="md"
              bg="#2d3748"
              _hover={{ color: "#01baef" }}
              onClick={() => handleLinkClick("Tokyo Session", "How to identify direction of the daily candle expansion", "video-id-mql4-strategy")}
              width="100%"
              boxSizing="border-box"
            >
              <Icon
                as={isVideoWatched("video-id-mql4-strategy") ? CheckCircleIcon : Box}
                color={isVideoWatched("video-id-mql4-strategy") ? "green.400" : "white"}
                boxSize={4}
                mr={2}
                borderRadius="full"
                borderWidth={isVideoWatched("video-id-mql4-strategy") ? "0" : "2px"}
              />
              How to identify direction of the daily candle expansion
            </Link>
            {/* Adicione mais episódios aqui */}
          </VStack>
        </GridItem>
      </MotionGrid>
    </Box>
  );
};

export default DashboardContent;
