import React, { useState } from "react";
import { Box, Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from "@chakra-ui/react";

interface RegisterPopupProps {
  onClose: () => void;
}

const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast({
        title: "Senhas não coincidem",
        description: "As senhas devem coincidir para o registro.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      // Redirecionar para a página de pagamento do Stripe
      window.location.href = "https://buy.stripe.com/test_5kA3ftdrYenedGM4gg";
      onClose();
    } catch (error) {
      toast({
        title: "Erro ao redirecionar",
        description: "Não foi possível redirecionar para o pagamento. Tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registro</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={3}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={3}
          />
          <Input
            placeholder="Confirmar Senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            mb={3}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleRegister}>
            Registrar e Pagar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterPopup;
