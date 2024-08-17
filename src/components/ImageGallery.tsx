import React, { useState } from "react";
import { Box, IconButton, Image, Text, Heading } from "@chakra-ui/react";
import { FaCircle, FaCircleNotch } from "react-icons/fa";

// Importar imagens diretamente
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";
import photo4 from "./images/photo4.jpg";
import photo5 from "./images/photo5.jpg";
import photo6 from "./images/photo6.jpg";
import photo7 from "./images/photo7.jpg";

const ImageGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 4;

  // Reorganizando para que as últimas 3 imagens estejam na primeira página
  const imageUrls = [
    photo5,
    photo6,
    photo3,
    photo7,
    photo1,
    photo4,
    photo2,
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
        width="100%"
        maxWidth="1000px"
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
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
            maxWidth="450px"  // Reduzido o tamanho das imagens
            height="auto"
            bg="rgba(0, 0, 0, 0.5)"
            _hover={{
              bg: "rgba(0, 0, 0, 0.7)"
            }}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width="100%"
              height="auto"
              objectFit="contain"
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
        width="100%"
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
