import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AutenticacaoContexto";
import logo from "../components/images/logo (2).png";
import DashboardContent from "../components/DashboardContent";
import Footer from "../components/Footer";

const UserPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Box
      position="relative"
      width="100%"
      backgroundColor="#000000"
      color="#ffffff"
      padding={4}
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={3}
        left={0}
        right={0}
        p={2}
        height="60px"
        display="flex"
        flexDirection={{ base: "row", md: "row" }}
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
        <Button
          colorScheme="red"
          variant="solid"
          onClick={handleLogout}
          ml="auto" // Move o botão para o extremo direito
          fontSize={{ base: "sm", md: "md" }} // Ajusta o tamanho do texto conforme a tela diminui
        >
          Logout
        </Button>
      </Box>

      <Box
        pt={{ base: "80px", md: "60px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="white" mb={4}>
          Student Dashboard
        </Text>
        <Box
          width="100%"
          maxWidth="800px"
          height={{ base: "250px", md: "450px" }} // Ajusta o tamanho do vídeo para telas menores
          borderRadius="md"
          overflow="hidden"
          mb={6}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/vNh-ic7Acxc" // Substitua YOUR_VIDEO_ID pelo ID do vídeo desejado
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <DashboardContent />

        <Footer />
      </Box>
    </Box>
  );
};

export default UserPage;
