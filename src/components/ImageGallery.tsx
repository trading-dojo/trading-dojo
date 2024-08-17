import React, { useState } from "react";
import { Box, useBreakpointValue, IconButton, Image, Text, Heading } from "@chakra-ui/react";
import { FaCircle, FaCircleNotch } from "react-icons/fa";

// Importar imagens diretamente
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";
import photo4 from "./images/photo4.jpg";
import photo5 from "./images/photo5.jpg";
import photo6 from "./images/photo6.jpg";
import photo7 from "./images/photo7.jpg";
import photo8 from "./images/photo8.jpg";
import photo9 from "./images/photo9.jpg";
import photo10 from "./images/photo10.jpg";
import photo11 from "./images/photo11.jpg";
import photo12 from "./images/photo12.jpg";
import photo13 from "./images/photo13.jpg";
import photo14 from "./images/photo14.jpg";
import photo15 from "./images/photo15.jpg";
import photo16 from "./images/photo16.jpg";
import photo17 from "./images/photo17.jpg";
import photo18 from "./images/photo18.jpg";
import photo19 from "./images/photo19.jpg";
import photo20 from "./images/photo20.jpg";

const ImageGallery: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 4;

  const imageUrls = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
  ];

  const totalPages = Math.ceil(imageUrls.length / imagesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedImages = imageUrls.slice(
    currentPage * imagesPerPage,
    currentPage * imagesPerPage + imagesPerPage
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
      <Heading as="h1" size="xl" mb={6} color="#ffffff">
        RESULTS
      </Heading>
      
      <Box
        width={isMobile ? "100%" : "80%"}
        maxWidth="1200px"
        display="grid"
        gridTemplateColumns={isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
        gap={4}
        justifyItems="center"
      >
        {paginatedImages.map((src, index) => (
          <Box
            key={index}
            borderRadius="md"
            overflow="hidden"
            boxShadow="lg"
            width="100%"
            height="200px"
            border="2px solid rgba(255, 255, 255, 0.7)"
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{
              bg: "rgba(0, 0, 0, 0.7)"
            }}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="md"
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

export default ImageGallery;
