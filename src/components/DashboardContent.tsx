import React from "react";
import { Box, Text, Link, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const DashboardContent: React.FC = () => {
  const navigate = useNavigate();

  // Recupera os vídeos assistidos do localStorage
  const watchedVideos = new Set<string>(JSON.parse(localStorage.getItem('watchedVideos') || '[]'));

  const handleLinkClick = (module: string, title: string, videoId: string) => {
    navigate("/lessons", { state: { module, title, videoId } });
  };

  const isVideoWatched = (videoId: string) => watchedVideos.has(videoId);

  return (
    <Box width="100%" maxWidth="800px" padding="0 16px" margin="0 auto" color="white">
      {/* Risk Management & Trading Psychology Section */}
      <Box bg="#0b0e13" padding="4" borderRadius="md" mb={4}>
        <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center" mb={4}>
          Risk Management & Trading Psychology
        </Text>
        <Box textAlign="left">
          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("K4Bn4xoQkNE") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("Risk Management & Trading Psychology", "Introduction", "K4Bn4xoQkNE")}
          >
            {isVideoWatched("K4Bn4xoQkNE") && <CheckCircleIcon color="green.400" mr={2} />}
            Introduction
          </Link>


          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("zcUVp_08Hm4") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("Risk Management & Trading Psychology", "Standard risk management", "zcUVp_08Hm4")}
          >
            {isVideoWatched("zcUVp_08Hm4") && <CheckCircleIcon color="green.400" mr={2} />}
            Standard risk management
          </Link>


          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("IDGNmNTfcsU") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("Risk Management & Trading Psychology", "Advanced risk management", "IDGNmNTfcsU")}
          >
            {isVideoWatched("IDGNmNTfcsU") && <CheckCircleIcon color="green.400" mr={2} />}
            Advanced risk management
          </Link>
        </Box>
      </Box>

      {/* Swing Trading Section */}
      <Box bg="#0b0e13" padding="4" borderRadius="md" mb={4}>
        <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center" mb={4}>
          Swing Trading
        </Text>
        <Box textAlign="left">
          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("video-id-swing-trading-basics") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("Swing Trading", "Swing Trading Basics", "video-id-swing-trading-basics")}
          >
            {isVideoWatched("video-id-swing-trading-basics") && <CheckCircleIcon color="green.400" mr={2} />}
            Swing Trading Basics
          </Link>
          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("video-id-advanced-swing-trading-strategies") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("Swing Trading", "Advanced Swing Trading Strategies", "video-id-advanced-swing-trading-strategies")}
          >
            {isVideoWatched("video-id-advanced-swing-trading-strategies") && <CheckCircleIcon color="green.400" mr={2} />}
            Advanced Swing Trading Strategies
          </Link>
        </Box>
      </Box>

      {/* Day Trading Section */}
      <Box bg="#0b0e13" padding="4" borderRadius="md" mb={4}>
        <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center" mb={4}>
          Day Trading
        </Text>
        <Box textAlign="left">
          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("video-id-day-trading-strategies") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("Day Trading", "Day Trading Strategies", "video-id-day-trading-strategies")}
          >
            {isVideoWatched("video-id-day-trading-strategies") && <CheckCircleIcon color="green.400" mr={2} />}
            Day Trading Strategies
          </Link>
          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("video-id-day-trading-psychology") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("Day Trading", "Day Trading Psychology", "video-id-day-trading-psychology")}
          >
            {isVideoWatched("video-id-day-trading-psychology") && <CheckCircleIcon color="green.400" mr={2} />}
            Day Trading Psychology
          </Link>
        </Box>
      </Box>

      {/* MQL4 Programming Course on Automated Algorithmic Trading Section */}
      <Box bg="#0b0e13" padding="4" borderRadius="md" mb={4}>
        <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center" mb={4}>
          MQL4 Programming Course on Automated Algorithmic Trading
        </Text>
        <Box textAlign="left">
          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("video-id-mql4-basics") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("MQL4 Programming Course on Automated Algorithmic Trading", "MQL4 Basics", "video-id-mql4-basics")}
          >
            {isVideoWatched("video-id-mql4-basics") && <CheckCircleIcon color="green.400" mr={2} />}
            MQL4 Basics
          </Link>
          <Link
            display="flex"
            alignItems="center"
            color={isVideoWatched("video-id-advanced-mql4-programming") ? "gray.500" : "red.300"}
            mb={2}
            p={2}
            borderRadius="md"
            bg="#1a202c"
            _hover={{ color: "#01baef" }}
            onClick={() => handleLinkClick("MQL4 Programming Course on Automated Algorithmic Trading", "Advanced MQL4 Programming", "video-id-advanced-mql4-programming")}
          >
            {isVideoWatched("video-id-advanced-mql4-programming") && <CheckCircleIcon color="green.400" mr={2} />}
            Advanced MQL4 Programming
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
