import React, { useState } from "react";
import { Box, Text, Button, Link as ChakraLink, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TermsPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="full" isCentered>
      <ModalOverlay />
      <ModalContent 
        width={{ base: "95vw", md: "80vw" }} 
        maxWidth="1200px" 
        bg="#333333" 
        borderRadius="md"
        p={{ base: 3, md: 6 }} // Padding adjustment for better spacing on smaller screens
        overflowY="auto" // Allow scrolling if content exceeds modal height
        height={{ base: "80vh", md: "90vh" }} // Ensure the modal height is responsive
        sx={{
          // Hide scrollbar
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none' /* Firefox */,
          msOverflowStyle: 'none' /* IE and Edge */,
        }}
      >
        <ModalHeader 
          color="white" 
          textAlign="center" 
          fontSize={{ base: "16px", md: "18px" }} 
          pb={4} // Padding bottom to ensure space #777777
        >
          *IMPORTANT RISK NOTICE*
        </ModalHeader>
        <ModalBody>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" mb={4} lineHeight="1.5">
            Trading on any foreign currency exchange, trading cryptocurrency or Commodities is extremely volatile, carries a high level of risk and is not suitable for everyone. This risk is increased by using margin as leverage, which is dangerous and can work against You. Before deciding to invest or trade in foreign currency, cryptocurrency, commodities or in any other market, You should carefully consider your investment goals, level of experience, and risk tolerance. It is EXTREMELY LIKELY that You will sustain losses of some or all of your initial capital and therefore You should not invest money that You cannot afford to lose. The value of any given trade/investment You elect to make on any foreign currency exchange market, with any specific cryptocurrency and/or with any Commodity is subject to extremely high volatility that can result in significant percentage losses, or the complete loss, of the capital you contribute.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" mb={4} lineHeight="1.5">
            The content provided by The Trading Dojo, whether through free informational videos or contained in our paid instructional training, should not be interpreted as investment or trading advice and is not meant to be a solicitation or recommendation to buy, sell, or hold any positions in any currency, cryptocurrency or any commodities. All demonstrated trades are merely incidental to the educational training we provide. Users of this Site or our marketing and social media channels and any student-members using our paid training materials should generally not expect to be profitable using any information we provide. You are solely responsible for your own investment and trading decisions. Any trading decision should ONLY be made by you according to your own opinion, knowledge and experience. You assume the sole risk of any trade or investment you elect to make based on your use of the information and training materials contained on this site or on any of our social media channels. You are encouraged to perform your own research on any currency, cryptocurrency or Commodity that you elect to trade and You should always seek advice from an independent, licensed financial professional in order to be aware of all the risks associated with foreign exchange trading, cryptocurrency trading, commodity trading and investing or swing/day trading in general. No representation or guarantee of any kind is being made that You will or should achieve profits similar to the results demonstrated in any hypothetical or live trade. You should not rely on any of the information contained on this Site or contained on any of our social media channels. All information contained on our Site, distributed via email, text messaging or otherwise should be independently verified by You.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" mb={4} lineHeight="1.5">
            Past performance as shown in any demonstrated trade is not indicative of future results. The past performance of any trading system or methodology is not necessarily indicative of future results. Further, stated results of any specific trade may be based on simulated or hypothetical performance results that have certain inherent limitations. Because these trades have not actually been executed, these results may have under-or over-compensated for the impact, if any, of certain market factors, such as lack of liquidity. Unlike an actual performance record, simulated results do not represent actual trading. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown in any simulated trade.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" mb={4} lineHeight="1.5">
            The Trading Dojo and its partners shall not be liable to you for any monetary losses or any other damages that you incur, directly or indirectly, of any kind or nature, from your use or reliance of any free information or paid training materials we may provide on this site and through the services generally. Any Information contained on this Site may be changed at any time without notice to you.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" mb={4} lineHeight="1.5">
            The Trading Dojo is NOT a financial broker/dealer or an investment advisor as defined under all laws/regulations of any applicable jurisdiction. The purchase, sale or advice regarding a currency, cryptocurrency or Commodity can only be performed by a licensed broker.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" mb={4} lineHeight="1.5">
            The Trading Dojo founder and/or any employees or contributors may hold positions in certain investments that are discussed or demonstrated on our site, communicated via email, text messaging or through other mediums.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" mb={4} lineHeight="1.5">
            <Text fontWeight="bold">IMPORTANT NOTICE REGARDING ILLEGITIMATE IMPERSONATORS</Text>
            Please be advised that there are one or more third parties attempting to impersonate The Trading Dojo and/or our mentors Mark & Chris, the founders of The Trading Dojo, by offering investment advisory services in exchange for money or cryptocurrency payments. In some cases, these impersonators have created websites and social media profiles purporting to be The Trading Dojo by impersonating our Website and/or our Channels (which currently only includes YouTube via "The Trading Dojo", Telegram via "The Trading Dojo”, Instagram the “ICT_DOJO”, and Discord via “The Trading Dojo”). Neither The Trading Dojo nor Mark Pirch provides any investment advice or any type of investment advisory or similar service including guaranteeing any type of daily, weekly or monthly returns, etc. Any service we offer and any corresponding transaction with any student/subscriber is exclusively conducted through this website. Mark Pirch does not provide any services of any kind to the general public in exchange for any consideration (i.e. monetary or cryptocurrency payments) other than through The Trading Dojo. All offerings/services from any third-party claiming to be The Trading Dojo and/or Markymark other than through this website and/or our official channels, or that may claim any affiliation with either of the foregoing, are illegitimate. While we have made reasonable efforts to attempt to address these illegitimate impersonators, this is not always possible. We may not be aware of all existing impersonators or any future impersonators.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign="center" lineHeight="1.5">
            Please also refer to the complete version of Our:  
          </Text>
          <Box 
            textAlign="center"
            color="white"
          >
            <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400">Terms & Conditions</ChakraLink>      ,        
            <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400">Important Risk Notice</ChakraLink>     ,   
            <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400">Testimonials Disclaimer</ChakraLink>  ,   
            and <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400">Privacy Policy</ChakraLink> 
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button colorScheme="red" onClick={handleClose}>
            Accept and Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermsPopup;
