import React from "react";
import { Box, Button, Tooltip, IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import TermsPage from "../components/TermsPage";

const TermsAndConditions: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <TermsPage />
      <Box
        position="fixed"
        right="0"
        bottom="20px"
        zIndex={1000}
        p={2}
      >
        <Tooltip label="Back to Top" placement="left" hasArrow>
          <IconButton
            aria-label="Back to Top"
            icon={<FaArrowUp />}
            size="md"
            color="grey"
            border="1px solid grey"
            borderRadius="40px"
            bg="transparent"
            onClick={scrollToTop}
            _hover={{ bg: "blue.500" }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
