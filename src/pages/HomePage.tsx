import React, { useState, useRef } from "react";
import { Box, Image, Text, Button, useBreakpointValue, IconButton, Tooltip } from "@chakra-ui/react";
import { FaTelegramPlane, FaDiscord, FaYoutube, FaInstagram, FaArrowUp } from "react-icons/fa";
import img1 from "../components/images/Website-Banner-graph.jpg";
import LoginPopup from "../components/LoginPopup";
import TermsPopup from "../components/TermsPopup";
import logo from "../components/images/logo (2).png";
import VideoSection from "../components/VideoSection";
import Lifetime from "../components/Lifetime";
import ExclusiveAccess from "../components/ExclusiveAccess";
import DoTheMath from "../components/DoTheMath";
import StudentTestimonials from "../components/StudentTestimonials";
import VideoGallery from "../components/VideoGallery";
import PromotionCard from "../components/PromotionCard";
import RiskNotice from "../components/RiskNotice";
import Footer from "../components/Footer";
import ResultsSection from "../components/ImageGallery";
import ImageGallery from "../components/ImageGallery";

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

  const bannerTextSize = useBreakpointValue({ base: "24px", md: "32px", lg: "40px" });
  const bannerButtonSize = useBreakpointValue({ base: "sm", md: "md" });
  const bannerPadding = useBreakpointValue({ base: "2", md: "4" });
  const bannerTop = useBreakpointValue({ base: "20%", md: "30%" });
  const bannerLeft = useBreakpointValue({ base: "5%", md: "10%", lg: "15%" });

  return (
    <div ref={homeRef}> {/* Referência ao topo da página */}
      <Box position="relative" width="100%" height="590px">
        <Box
          position="absolute"
          top={3}
          left={0}
          right={0}
          p={2}
          height="60px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          zIndex={1}
        >
          <Image src={logo} alt="Logo" boxSize="200px" objectFit="contain" />
          <Box display="flex">
            <Button colorScheme="red" variant="solid" onClick={openLoginModal} mr={2}>
              Login
            </Button>
            <Button colorScheme="blue" variant="solid" onClick={scrollToPromotionCard}>
              Register
            </Button>
          </Box>
        </Box>

        <Image
          src={img1}
          alt="Banner"
          objectFit="cover"
          width="100%"
          height="590px"
          style={{ filter: "brightness(40%)" }}
        />

        <Box
          position="absolute"
          top={bannerTop}
          left={bannerLeft}
          p={bannerPadding}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          borderRadius="md"
          width="auto"
          maxWidth="400px"
        >
          <Text fontSize={bannerTextSize} fontWeight="bold" mb={4} textAlign="left">
            <span style={{ color: "white" }}>Join the best </span>
            <span style={{ color: "#ff4d4d" }}>smart money</span>
            <span style={{ color: "white" }}>  community in the <span style={{ color: "#ff4d4d" }}>world</span></span>
          </Text>
          <Text fontSize="lg" mb={4} color="white">
            Don’t fall for the get rich quick schemes!
          </Text>
          <Button
            color="#ffffff"
            bg="#ff4d4d"
            variant="solid"
            size={bannerButtonSize}
            onClick={scrollToPromotionCard}
          >
            Find out more
          </Button>
        </Box>
      </Box>

      {isLoginModalOpen && <LoginPopup onClose={closeLoginModal} />}
      
      <Box width="200px">
        <TermsPopup /> {/* Popup de termos */}
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
            >
              JOIN NOW
            </Button>
          </Text>
        </Box>
        <VideoSection videoId="R_wXwRIddgo" />

        <Lifetime />

        <ExclusiveAccess />

        <DoTheMath />

        <StudentTestimonials />
        

        {/* <VideoGallery /> */}

        

        <Box ref={promotionCardRef} width="100%">
          <PromotionCard />
        </Box>

        <ImageGallery/>

        <RiskNotice />

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
            color="#0195bf"
            bg="transparent"
            _hover={{ color: "#ff4d4d" }}
            mb={2}
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
      </Box>
    </div>
  );
};

export default HomePage;
