import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Chakra UI icons
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AutenticacaoContexto";

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(!showPassword); // Toggle function

  const handleLogin = async () => {
    try {
      await login(email, password, (path: string) => navigate(path));
      onClose();
    } catch (error) {
      toast({
        title: "Error logging in",
        description: "Confirm your credentials and try again",
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
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={3}
            border="1px solid #000"
          />
          <InputGroup mb={3}>
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              border="1px solid #000"
            />
            <InputRightElement width="4.5rem">
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />} // Switch between eye icons
                onClick={toggleShowPassword}
                variant="unstyled" // Removes all hover animations
              />
            </InputRightElement>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="#1a1a1a"
            color="white"
            _hover={{ bg: "white", color: "red", border: "1px solid #000" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginPopup;




































// import React, { useState } from "react";
// import { Box, Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AutenticacaoContexto";

// interface LoginPopupProps {
//   onClose: () => void;
// }

// const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const toast = useToast();
//   const navigate = useNavigate();

  

//   const handleLogin = async () => {
//     try {
//       await login(email, password, (path: string) => navigate(path));
//       onClose();
//     } catch (error) {
//       toast({
//         title: "Error logging in",
//         description: "Confirm your credentials and try again",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Modal isOpen={true} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Login</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Input
//             placeholder="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             mb={3}
//             border="1px solid #000"
//           />
//           <Input
//             placeholder="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             mb={3}
//             border="1px solid #000"
//           />
//         </ModalBody>
//         <ModalFooter>
//             <Button 
//               bg="#1a1a1a" 
//               color="white" 
//               _hover={{ bg: "white", color: "red", border: "1px solid #000" }} 
//               onClick={handleLogin}
//             >
//               Login
//             </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default LoginPopup;
