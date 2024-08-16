import React, { useState, useEffect } from "react";
import { Box, Text, Button, IconButton, List, ListItem, ListIcon, Flex, Image } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../components/images/logo (2).png";
import { useAuth } from "../context/AutenticacaoContexto";
import { MdArrowBack, MdCheckCircle } from "react-icons/md";
import Footer from "../components/Footer";
import TermsPage from "../components/TermsPage";

interface Video {
  title: string;
  videoId: string;
}

interface VideoList {
  [moduleName: string]: Video[];
}

const videoList: VideoList = {
  "Risk Management & Trading Psychology": [
    { title: "Introduction", videoId: "qc-5k57NN2A" },
    { title: "Standard risk management", videoId: "zcUVp_08Hm4" },
    { title: "Advanced risk management", videoId: "IDGNmNTfcsU" }
  ],
  "Swing Trading": [
    { title: "Swing Trading Basics", videoId: "video-id-swing-trading-basics" },
    { title: "Advanced Swing Trading Strategies", videoId: "video-id-advanced-swing-trading-strategies" }
  ],
  "Day Trading": [
    { title: "Day Trading Strategies", videoId: "video-id-day-trading-strategies" },
    { title: "Day Trading Psychology", videoId: "video-id-day-trading-psychology" }
  ],
  "MQL4 Programming Course on Automated Algorithmic Trading": [
    { title: "MQL4 Basics", videoId: "video-id-mql4-basics" },
    { title: "Advanced MQL4 Programming", videoId: "video-id-advanced-mql4-programming" }
  ]
};

const Lessons: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { title, videoId, module } = location.state as { title: string; videoId: string; module: string };

  const [watchedVideos, setWatchedVideos] = useState<Set<string>>(new Set());

  useEffect(() => {
    const storedWatchedVideos = localStorage.getItem('watchedVideos');
    if (storedWatchedVideos) {
      setWatchedVideos(new Set(JSON.parse(storedWatchedVideos)));
    }
  }, []);

  const updateWatchedVideos = (videoId: string) => {
    const updatedWatchedVideos = new Set(watchedVideos);
    updatedWatchedVideos.add(videoId);
    setWatchedVideos(updatedWatchedVideos);
    localStorage.setItem('watchedVideos', JSON.stringify(Array.from(updatedWatchedVideos)));
  };

  const moduleVideos = videoList[module] || [];
  const currentIndex = moduleVideos.findIndex(video => video.videoId === videoId);
  const nextIndex = (currentIndex + 1) < moduleVideos.length ? (currentIndex + 1) : -1;
  const nextVideo = nextIndex >= 0 ? moduleVideos[nextIndex] : null;
  const prevIndex = (currentIndex - 1) >= 0 ? (currentIndex - 1) : -1;
  const prevVideo = prevIndex >= 0 ? moduleVideos[prevIndex] : null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/user");
  };

  const handleNext = () => {
    if (nextVideo) {
      updateWatchedVideos(nextVideo.videoId);
      navigate("/lessons", { state: { title: nextVideo.title, videoId: nextVideo.videoId, module } });
    } else {
      navigate("/user");
    }
  };

  const handlePrevious = () => {
    if (prevVideo) {
      updateWatchedVideos(prevVideo.videoId);
      navigate("/lessons", { state: { title: prevVideo.title, videoId: prevVideo.videoId, module } });
    }
  };

  const handleFinish = () => {
    updateWatchedVideos(videoId);
    navigate("/user");
  };

  return (
    <Box
      position="relative"
      width="100%"
      minHeight="100vh"
      backgroundColor="#000000"
      color="#ffffff"
      padding={4}
      overflow="hidden"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        position="absolute"
        top={3}
        left={0}
        right={0}
        p={2}
        height="60px"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        zIndex={1}
      >
        <Image
          src={logo}
          alt="Logo"
          boxSize={{ base: "150px", md: "200px" }}
          objectFit="contain"
        />
        <Box display="flex" alignItems="center" flexDirection={{ base: "column", md: "row" }}>
          <Button
            colorScheme="red"
            variant="solid"
            onClick={handleLogout}
            ml={{ base: 0, md: 4 }}
            mr="70px"
          >
            Logout
          </Button>
        </Box>
      </Box>

      <Flex
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        color="white"
        mt={24}
        p={10}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          width={{ base: "100%", md: "30%" }}
          mb={{ base: 4, md: 0 }}
          mr={{ md: 6 }}
        >
          <Flex mb={4} align="center">
            <Button
              variant="link"
              colorScheme="red"
              onClick={handleBack}
              leftIcon={<MdArrowBack />}
              fontSize="lg"
              fontWeight="bold"
              _hover={{ color: "#01baef" }} // Efeito hover para alterar para azul oceano
              background="transparent"
              _focus={{ boxShadow: "none" }}
            >
              Back to Dashboard
            </Button>
          </Flex>
          <Box
            backgroundColor="#2d2d2d"
            padding={4}
            borderRadius="md"
            boxShadow="md"
            mb={6}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              {module}
            </Text>
          </Box>
          <List spacing={3}>
            {moduleVideos.map((video) => (
              <ListItem key={video.videoId}>
                <Flex align="center">
                  <ListIcon
                    as={MdCheckCircle}
                    color={watchedVideos.has(video.videoId) ? "green.400" : "gray.400"}
                    mr={2}
                  />
                  <Box
                    backgroundColor="#2d2d2d"
                    padding={2}
                    borderRadius="md"
                    width="100%"
                    mb={2}
                    _hover={{ backgroundColor: "gray.700" }} // Hover para o título do vídeo
                  >
                    <Text
                      fontSize="md"
                      color={watchedVideos.has(video.videoId) ? "gray.500" : "white"}
                      cursor="pointer"
                      onClick={() => {
                        if (!watchedVideos.has(video.videoId)) {
                          updateWatchedVideos(video.videoId);
                          navigate("/lessons", { state: { title: video.title, videoId: video.videoId, module } });
                        }
                      }}
                    >
                      {video.title}
                    </Text>
                  </Box>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          width={{ base: "100%", md: "70%" }}
          display="flex"
          flexDirection="column"
        >
          <Box mb={6}>
            <Text fontSize="2xl" fontWeight="bold" mb={2} color="white">
              {title}
            </Text>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>

          <Flex justify="space-between" flexDirection={{ base: "column", md: "row" }} mt={4}>
            {prevVideo && (
              <Button
                colorScheme="red"
                onClick={handlePrevious}
                mb={{ base: 2, md: 0 }}
                mr={{ base: 0, md: 2 }}
              >
                Previous
              </Button>
            )}
            {nextVideo ? (
              <Button
                colorScheme="red"
                onClick={handleNext}
                ml={{ base: 0, md: 2 }}
              >
                Next
              </Button>
            ) : (
              <Button
                colorScheme="red"
                onClick={handleFinish}
                ml={{ base: 0, md: 2 }}
              >
                Finish and Go to Dashboard
              </Button>
            )}
          </Flex>
        </Box>
        

      </Flex>
      
    </Box>
  );
};

export default Lessons;
