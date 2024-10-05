import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const StudentTestimonials: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      backgroundColor="#000000" // Cor de fundo preto
      padding={8}
      width="100%"
      textAlign="center" // Centraliza o texto
      color="#ffffff" // Cor do texto branca
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Título */}
      <Text fontSize={isMobile ? "2xl" : "4xl"} fontWeight="bold" mb={8}>
        What our best students have to say...
      </Text>

      {/* Texto com borda */}
      <Box
        maxWidth="800px" // Limita a largura do texto
        margin="auto" // Centraliza o box
        padding={4}
        border="1px dashed grey" // Borda estilizada mais fina com traços
      >
        <Text fontSize={isMobile ? "md" : "lg"} mb={6}>
          The results you should generally expect to achieve based on historical available data (per the studies shown below) suggest that you will lose money. At a minimum, these studies indicate at least 50% of our students will not be profitable. Also, some of our students providing testimonials have received a small refund (up to 7% of the course programme fees) after they sent us their testimonial as a sign of our appreciation.
        </Text>

        <Text fontSize={isMobile ? "md" : "lg"} mb={6}>
          Studies:
        </Text>

        <Text fontSize={isMobile ? "sm" : "md"} mb={4} textAlign="left">
          1. Barber, Brad & Lee, Yong-Ill & Liu, Yu-Jane & Odean, Terrance. (2014).
          <br />
          2. Garvey, Ryan and Murphy, Anthony, The Profitability of Active Stock Traders. Journal of Applied Finance, Vol. 15, No. 2, Fall/Winter 2005. Available at SSRN:{" "}
          <a href="https://ssrn.com/abstract=908615" target="_blank" rel="noopener noreferrer" style={{ color: "#01baef" }}>
            https://ssrn.com/abstract=908615
          </a>
          <br />
          3. Additionally, out of 1,146 brokerage accounts day trading the U.S. markets between March 8, 2000 and June 13, 2000, only 50% were profitable with an average net profit of $16,619.
          <br />
          4. Finally, out of 334 brokerage accounts day trading the U.S. markets between February 1998 and October 1999, only 35% were profitable and only 14% generated profits in excess of $10,000. Douglas J. Jordan & J. David Diltz (2003) The Profitability of Day Traders, Financial Analysts Journal, 59:6, 85-94, DOI: 10.2469/faj.v59.n6.2578
        </Text>
      </Box>
    </Box>
  );
};

export default StudentTestimonials;
