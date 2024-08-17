import React, { useState } from "react";
import { Box, useBreakpointValue, IconButton, Text } from "@chakra-ui/react";
import { FaCircle, FaCircleNotch } from "react-icons/fa";

const VideoGallery: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });

  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 6;

  const videoIds = [
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
    "--slRywdonM",
    "lzwjhCPVFrQ",
  ];

  // Adicione vídeos suficientes para garantir que há pelo menos 6 páginas
  const totalPages = Math.max(6, Math.ceil(videoIds.length / videosPerPage));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedVideos = videoIds.slice(
    currentPage * videosPerPage,
    currentPage * videosPerPage + videosPerPage
  );

  return (
    <Box
      width="100%"
      padding="80px"
      backgroundColor="#000000"
      color="#ffffff"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        width={isMobile ? "100%" : "100%"}
        maxWidth="1200px"
        display="grid"
        gridTemplateColumns={isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)"}
        gap={5}
        justifyItems="center"
      >
        {paginatedVideos.map((id, index) => (
          <Box
            key={index}
            borderRadius="md"
            overflow="hidden"
            boxShadow="lg"
            width="100%"
            height="220px"
            border="2px solid rgba(255, 255, 255, 0.7)"
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{
              bg: "rgba(0, 0, 0, 0.7)"
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        ))}
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <IconButton
            key={index}
            aria-label={`Page ${index + 1}`}
            icon={currentPage === index ? <FaCircle /> : <FaCircleNotch />}
            size="sm"
            color={currentPage === index ? "#ff4d4d" : "#ffffff"}
            bg="transparent"
            onClick={() => handlePageChange(index)}
            _hover={{
              color: "#ff4d4d"
            }}
            mx={1}
          />
        ))}
      </Box>

      <Box
        width={isMobile ? "100%" : "80%"}
        maxWidth="1200px"
        textAlign="center"
        mt={10}
      >
        <Text fontSize="lg" mb={4}>
          Our mentorship program is strategically designed to educate you in a higher capacity than we do on our other free channels. This is NOT a get rich quick scheme and we are in NO way guaranteeing profits. We’re just trying to help you understand what trading really is and how you can potentially trade! I kindly ask that you please close the browser if you’re looking for one. If you’re also struggling with money, please keep your capital and continue to learn for free on our free channels as our goal is to never make your situation harder. But if neither applies and you want to be a part of the mentorship program, let’s get started!
        </Text>
      </Box>
    </Box>
  );
};

export default VideoGallery;
