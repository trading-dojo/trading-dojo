import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface VideoSectionProps {
  videoId?: string; // videoId é opcional
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoId }) => {
  if (!videoId) {
    return (
      <Box mt={8} textAlign="center" color="white">
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={2} color="#ff4d4d">
          No Video Available
        </Text>
      </Box>
    );
  }

  return (
    <Box mt={{ base: "100px", md: "150px" }} textAlign="center" color="white" px={4}>
      <Text fontSize={{ base: "24px", md: "30px" }} fontWeight="bold" mb={2} color="#ff4d4d">
        GET ACCESS TO:
      </Text>
      <Text fontSize={{ base: "20px", md: "28px" }} mb={4}>
        The Most Complete All-Inclusive Mentorship Program:
      </Text>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth="700px"
        mx="auto"
        
        my={4}
      >
        <iframe
          width="100%"
          height="auto"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          style={{ aspectRatio: "16/9" }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default VideoSection;
