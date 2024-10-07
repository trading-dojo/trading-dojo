import React from 'react';
import { Box, Flex, Button, IconButton, Image, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logo = "https://your-logo-url.com/logo.png"; // Substitua pela URL do seu logo

  return (
    <Box bg="black" px={4} color="black" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.3)" position="fixed" width="100%" zIndex={1000}>
      <Flex h={14} alignItems="center"  justifyContent="space-between">
        {/* Logo */}
        <Box>
          .
        </Box>

       

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Login Button */}
        <Box display={{ base: 'none', md: 'block' }}>
          <Button
            bg="black"
            
          >
            .
          </Button>
        </Box>
      </Flex>


    </Box>
  );
};

export default Navbar;
