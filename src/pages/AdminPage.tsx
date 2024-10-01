import React from "react";
import { Box, Button, IconButton, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AutenticacaoContexto";
import { FaUserShield } from "react-icons/fa"; // Ícone diferente para o Admin
import logo from "../components/images/logo (2).png";

const AdminPage: React.FC = () => {
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
      height="100vh"
      backgroundColor="#000000"
      color="#ffffff"
    >
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
        <Image
          src={logo}
          alt="Logo"
          boxSize="200px"
          objectFit="contain"
        />
        <Box display="flex" alignItems="center">
          <IconButton
            aria-label="Admin Profile"
            icon={<FaUserShield />} // Ícone representativo do Admin
            colorScheme="red"
            variant="outline"
            borderRadius="full"
            mr="50px"
            width="90px"
          />
          <Button
            colorScheme="red"
            variant="solid"
            onClick={handleLogout}
            mr="80px"
          >
            Logout
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <div>Bem-vindo à página de Admin</div>
      </Box>
    </Box>
  );
};

export default AdminPage;
