import React, { useState, useRef } from "react";
import { Box, Image, Text, Button, useBreakpointValue, IconButton, Tooltip } from "@chakra-ui/react";
import { FaTelegramPlane, FaDiscord, FaYoutube, FaArrowUp,FaInstagram } from "react-icons/fa";
import img1 from "../components/images/Green-EPSCC10_generated.jpg";
import LoginPopup from "../components/LoginPopup";
import KlaviyoScriptLoader from "../components/KlaviyoScriptLoader";
import logo from "../components/images/logo (2).png";
import VideoSection from "../components/VideoSection";
import Lifetime from "../components/Lifetime";
import ExclusiveAccess from "../components/ExclusiveAccess";
import DoTheMath from "../components/DoTheMath";
import VideoGallery from "../components/VideoGallery";
import PromotionCard from "../components/PromotionCard";
import RiskNotice from "../components/RiskNotice";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from "../components/Footer";
// import ResultsSection from "../components/ImageGallery";
import ImageGallery from "../components/ImageGallery";
import { motion, useAnimation } from "framer-motion";
import { FaUser } from "react-icons/fa";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";

const MotionText = motion(Text);
const MotionButton = motion(Button);

const HomePage: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const promotionCardRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null); // Ref para o topo da página

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const scrollToPromotionCard = () => {
    if (promotionCardRef.current) {
      promotionCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bannerTextSize = useBreakpointValue({ base: "26px", md: "38px", lg: "48px" });
  const bannerButtonSize = useBreakpointValue({ base: "sm", md: "md" });
  const bannerPadding = useBreakpointValue({ base: "2", md: "4" });
  const bannerTop = useBreakpointValue({ base: "20%", md: "30%" });
  const bannerLeft = useBreakpointValue({ base: "5%", md: "10%", lg: "15%" });

  // Usando useBreakpointValue para tornar os tamanhos dinâmicos com base no tamanho da tela
  const boxHeight = useBreakpointValue({ base: "50px", md: "60px" });
  const logoSize = useBreakpointValue({ base: "120px", md: "200px" });
  const buttonWidth = useBreakpointValue({ base: "80px", md: "100px" });
  const buttonHeight = useBreakpointValue({ base: "30px", md: "35px" });
  const padding = useBreakpointValue({ base: "2", md: "4" });
    
    // Tamanho dinâmico para o texto e ícones
    const fontSize = useBreakpointValue({ base: "12px", md: "16px" });
    const iconSize = useBreakpointValue({ base: "14px", md: "20px" });

  // Controle da animação
  const controls = useAnimation();

  // Inicia a animação quando o componente está no viewport
  React.useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div ref={homeRef}> {/* Referência ao topo da página */}
      <Box position="relative"  bgColor="#0B0B0B" width="100%" height="100vh">

        <Navbar/>
        <Box
      position="fixed"
      h={14}
      top={0}
      left="10px"
      right="10px"
      p={padding} // Ajusta o padding dinamicamente
      height={boxHeight} // Ajusta a altura da navbar dinamicamente
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex={1000}
      maxWidth="1200px"
      margin="0 auto"
      backgroundColor="black"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.3)"
    >
      <Image
        src={logo} // Substitua pelo caminho correto do logo
        alt="Logo"
        boxSize={logoSize} // Ajusta o tamanho do logo dinamicamente
        objectFit="contain"
      />
      <Box display="flex">
        <Button
          colorScheme="red"
          variant="solid"
          onClick={openLoginModal}
          mr={2}
          width={buttonWidth} // Ajusta a largura dinamicamente
          height={buttonHeight} // Ajusta a altura dinamicamente
          fontSize={fontSize} // Ajusta o tamanho do texto dinamicamente
          borderRadius="18px"
          _hover={{ bg: "darkred", color: "white" }}
        >
          Login
        </Button>
        <Button
          colorScheme="blue"
          variant="solid"
          width={buttonWidth} // Ajusta a largura dinamicamente
          height={buttonHeight} // Ajusta a altura dinamicamente
          fontSize={fontSize} // Ajusta o tamanho do texto dinamicamente
          borderRadius="18px"
          onClick={() => window.location.href = "https://whop.com/thetradingdojo/?pass=prod_Dz8nnP7lJ6k2v&plan=plan_V7gbzJqgrFCR5"}
          leftIcon={<FaUser size={iconSize} />} // Ajusta o tamanho do ícone dinamicamente
        >
          Register
        </Button>
      </Box>
    </Box>

        <Image
          src={img1}
          alt="Banner"
          objectFit="cover"
          width="100%"
          height="100%"
          style={{ filter: "brightness(20%)" }}
        />

        <Box
          position="absolute"
          top={bannerTop}
          left="0"
          right="0"
          margin="auto"
          justifyContent="center"
          display="flex"
          flexDirection="column" // Alinha os elementos verticalmente (em "rows")
          alignItems="center"
          borderRadius="md"
          width="100%"
          maxWidth="1000px"
        >
          {/* Primeiro Row: THE DOJO */}
          <MotionText
            fontSize={["24px", "32px", "40px", "58px"]} // Tamanhos de fonte para diferentes larguras de tela
            fontWeight="bold"
            mt="70px"
            mb={1}
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 2, delay: 0.2 }}
          >
            <span style={{ color: "#fd0000" }}>THE DOJO</span>
          </MotionText>

          {/* Segundo Row: Texto abaixo */}
          <MotionText
            fontSize={["10px", "14px", "18px", "20px"]} // Tamanhos responsivos para diferentes larguras de tela
            color="white"
            textAlign="center" // Centraliza o texto
            mb="40px"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 2, delay: 0.4 }}
          >
            I made it happen and so can you. Turn your 9-5 to 10-11
          </MotionText>

          {/* Terceiro Row: Botão */}
          <MotionButton
            color="#ffffff"
            bg="#ff4d4d"
            variant="solid"
            size={bannerButtonSize}
            onClick={scrollToPromotionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 2, delay: 0.6 }}
            _hover={{ bg: "white", color: "black" }}
            borderRadius="13px"
            rightIcon={<ArrowForwardIcon />}
          >
            Join Now
          </MotionButton>
        </Box>

      </Box>

      {isLoginModalOpen && <LoginPopup onClose={closeLoginModal} />}
      
      <Box>
        <KlaviyoScriptLoader /> {/* Popup de termos */}
      </Box>

      <Box
        bg="#000000"
        padding={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        minHeight="100vh"
        ref={videoSectionRef}
      >
        <Box
          width="100%"
          maxWidth="712px"
          textAlign="center"
          display="flex"
          alignItems="center"
          marginTop="20px"
          justifyContent="center"
          flexWrap="wrap"
        >
          <FaTelegramPlane size={30} color="#ff4d4d" style={{ marginRight: '8px' }} />
          <Text fontSize="25px" color="white" fontWeight="bold" display="inline">
            <span style={{ color: "white" }}>Take one second to join the </span>
            <span style={{ color: "#ff4d4d" }}>FREE Telegram Channel</span>
            <span style={{ color: "white" }}> so you never miss new free education and updates</span>
            <Button
              as="a"
              href="https://t.me/ictdojo"
              target="_blank"
              color="#ffffff"
              bg="#ff4d4d"
              variant="solid"
              size="sm"
              ml={2}
              _hover={{ bg: "white", color: "black" }}
              borderRadius="13px"
            >
              JOIN NOW
            </Button>
          </Text>
        </Box>
        <VideoSection videoId="Zi0zp_qeNtg" />

       

        <Lifetime />

        <ExclusiveAccess />
        
        <DoTheMath />

        {/* <VideoGallery /> */}

        

        <Box ref={promotionCardRef} width="80%">
          <PromotionCard />
        </Box>

        <ImageGallery/>

        <RiskNotice />

        <Box  width="70%">

        <FAQ/>
        
        </Box>
        

        <Footer />
      </Box>

      <Box
        position="fixed"
        right="0"
        bottom="20px"
        zIndex={1000}
        p={2}
      >
        <Tooltip label="Back to Top" placement="left" hasArrow>
          <IconButton
            aria-label="Back to Top"
            icon={<FaArrowUp />}
            size="md"
            color="grey"
            border="1px solid grey"
            borderRadius="40px"
            bg="transparent"
            onClick={scrollToTop}
            _hover={{ bg: "blue.500" }}
          />
        </Tooltip>
      </Box>

      <Box
        position="fixed"
        right="0"
        top="40%"
        transform="translateY(-50%)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        zIndex={1000}
        pr={2}
      >
        <Tooltip label="Discord" placement="left" hasArrow>
          <IconButton
            as="a"
            href="https://discord.gg/yqqn3s2PqY"
            target="_blank"
            aria-label="Discord"
            icon={<FaDiscord />}
            size="lg"
            color="blue"
            bg="transparent"
            _hover={{ color: "#ff4d4d" }}
            mb={2}
          />
        </Tooltip>
        <Tooltip label="Telegram" placement="left" hasArrow>
          <IconButton
            as="a"
            href="https://t.me/ictdojo"
            target="_blank"
            aria-label="Telegram"
            icon={<FaTelegramPlane />}
            size="lg"
            color="#0088cc"
            bg="transparent"
            _hover={{ color: "#ff4d4d" }}
            mb={2}
          />
        </Tooltip>

        <Tooltip label="Instagram" placement="left" hasArrow>
          <IconButton
            as="a"
            href="https://www.instagram.com/ict_dojo/"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="lg"
            color="purple"
            bg="transparent"
            _hover={{ color: "#ff4d4d" }}
          />

          
        </Tooltip>


        <Tooltip label="YouTube" placement="left" hasArrow>
          <IconButton
            as="a"
            href="https://www.youtube.com/@TheTradingDojo"
            target="_blank"
            aria-label="YouTube"
            icon={<FaYoutube />}
            size="lg"
            color="red"
            bg="transparent"
            _hover={{ color: "#ff4d4d" }}
            mb={2}
          />
        </Tooltip>
      </Box>
    </div>
  );
};

export default HomePage;
