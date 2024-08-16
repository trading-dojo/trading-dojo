import React, { useState } from "react";
import { Box, Image, Text, Container, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img1 from "../components/images/Website-Banner-graph.jpg";
import logo from "../components/images/logo (2).png";
import LoginPopup from "../components/LoginPopup";

const TermsPage: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box bg="black" color="white" minHeight="100vh">
      <Box position="relative" width="100%" height="590px">
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
          <Image src={logo} alt="Logo" boxSize="200px" objectFit="contain" />
          <Button colorScheme="red" variant="solid" onClick={openLoginModal}>
            Login
          </Button>
        </Box>

        <Image
          src={img1}
          alt="Banner"
          objectFit="cover"
          width="100%"
          height="590px"
          style={{ filter: "brightness(40%)" }}
        />

        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          zIndex={2}
          p={4}
        >
          <Text fontSize="48px" fontWeight="bold" mb={4} textAlign="left">
            <span style={{ color: "white" }}>Terms & </span>
            <span style={{ color: "#ff4d4d" }}>Conditions</span>
            
          </Text>
        </Box>
      </Box>

      <Container maxW="container.md" py={8}>
        
        <Text fontSize="lg" mb={4}>
          The Trading Dojo (“The Trading Dojo” “We” or “Us” or “Our” or “The Trading Dojo”) provides free content and offers paid training programmes, or courses through its web site ___fill this blank once uploaded____ (the “Site”) and via email, text or other delivery methods (“Services”). In consideration of Us providing, or continuing to provide the user of this Site (“You” or “User” or “Your”) with access to the Site and the Services, You hereby agree that your use of this Site and any Service provided by Us shall be expressly pursuant to and conditioned upon your agreement to the following Terms and Conditions (“Terms”).
        </Text>
        <Text fontSize="lg" mb={4}>
          <strong>Acknowledgement of Disclosures and Disclaimers</strong>
        </Text>
        <Text fontSize="lg" mb={4}>
          You hereby acknowledge and agree that:
        </Text>
        <Text fontSize="lg" mb={4}>
          - Neither The Trading Dojo nor any of its owners, directors, officers, employees, agents, independent contractors or affiliates are registered as an investment adviser or is otherwise providing any investment service. The Site and Services are bona fide publications of general and regular circulation offering impersonalized information to users and/or prospective users (e.g., not tailored to the specific investment needs of current and/or prospective users).
        </Text>
        <Text fontSize="lg" mb={4}>
          - To the extent that any of the content published as part of the Site or Services may be deemed to be investment advice, such information is impersonal and not tailored to the investment needs of any specific person.
        </Text>
        <Text fontSize="lg" mb={4}>
          - We will not evaluate your individual financial condition, investment portfolio, investment experience, age, income, tax bracket, risk tolerance, investment objectives or other similar factors (referred to herein as “Individual Financial Requirements”).
        </Text>
        <Text fontSize="lg" mb={4}>
          - The Site and Services are currently limited to the dissemination of impersonal information pertaining to The Trading Dojo “technically-based” analysis, together with access to additional impersonal information and links. By its nature, technically-based analysis does not contemplate the user’s Individual financial requirements.
        </Text>
        <Text fontSize="lg" mb={4}>
          - The Site and Services do not offer and Users do not receive initial or ongoing individual personalized investment advice, investment reporting, investment supervisory or investment management services, nor the ongoing review or monitoring of the user’s individual investment portfolio. Rather, the Site and Services are designed solely to provide users with a method to identify and evaluate potential opportunities and obtain information on market analysis, current events, trade methodology, and other related information. Therefore, each User hereby agrees that use of the Site or any Service is not a substitute for ongoing individual personalized advice from an investment professional of the User’s choosing or other investment service which may be obtained by the User.
        </Text>
        <Text fontSize="lg" mb={4}>
          - Each User hereby agrees that he/she/it should independently evaluate and determine whether to act upon any information provided through the Site or Services (including without limitation, individual “picks”, recommendations or trends) based on the User’s Individual financial requirements, knowledge and experience. Further, each User hereby acknowledges that neither The Trading Dojo nor any of its owners, directors, officers, employees, agents, independent contractors or affiliates (the “Affiliates”) will advise you personally concerning the nature, potential or suitability of any particular trend, transaction, investment strategy or other similar matter.
        </Text>
        <Text fontSize="lg" mb={4}>
          - Certain portions of the Site and certain Services (i.e. newsletters, articles, commentaries, etc.) may contain a discussion of, and/or provide access to, positions of The Trading Dojo or its Affiliates and/or their “picks,” trades, or recommendations. Due to various factors, including, but not limited to, changing market conditions, such position, discussion, pick or view may only be valid for a specific moment in time (day, hour, minute, or tick of the tape). Thus, each User hereby agrees to independently evaluate and determine whether to act upon any such information. Moreover, no User or prospective User should assume that any such discussion serves as the receipt of, or a substitute for, individual personalized advice from an investment professional of his/her/its choosing.
        </Text>
        <Text fontSize="lg" mb={4}>
          - You acknowledge that news, information and performance data available through the Site or any Service is supplied by sources believed to be reliable by The Trading Dojo but The Trading Dojo accepts no responsibility to verify the accuracy or completeness of such information or to update such information. The Site or Services may contain trades, views, opinions, news or information which are incomplete or outdated. As markets change continuously, previously published views, news, information and data may not be current and should not be relied upon.
        </Text>
        <Text fontSize="lg" mb={4}>
          - To the extent that the Site or any Service contains a “model portfolio”, such model portfolio is to be construed as developed based upon a particular investment strategy but not developed for any user’s individual financial requirements. The actual results of the portfolio, as well as a User’s actual results may differ substantially from the stated investment strategy.
        </Text>
        <Text fontSize="lg" mb={4}>
          - Past performance may not be indicative of future results. Therefore, no current or prospective User should assume that the future performance of any trend, pick, view, specific investment, investment strategy, product or service made or obtained directly or indirectly through the Site or Services will be profitable or otherwise provide equal historical or anticipated performance level(s).
        </Text>
        <Text fontSize="lg" mb={4}>
          - Different types of currencies, cryptocurrencies and commodities involve varying degrees of risk, and there can be no assurance that any specific currency, cryptocurrency, Commodity, or investment strategy referenced directly or indirectly through the Site or Services will be suitable for a User’s and/or prospective User’s investment portfolio.
        </Text>
        <Text fontSize="lg" mb={4}>
          - You acknowledge and agree that the Site and Services may contain picks, views or trends that may be different from those obtained through other portions of the Site or other Services and that The Trading Dojo or its Affiliates and third party service providers may, from time to time, have long and short positions in, or buy or sell the currencies, cryptocurrencies or commodities referenced through the Site or Services and may have positions inconsistent with the views expressed through the Site or Services.positions in, or buy or sell the currencies, cryptocurrencies, or Commodities referenced through the Site or Services and may take positions inconsistent with the views expressed through the Site or Services.
        </Text>
            
        <Text fontSize="lg" mb={4}>
        You acknowledge and agree that certain The Trading Dojo Affiliates may discuss or quote specific currencies, cryptocurrencies, commodities or investment strategies in which they or their firms have a position, and that they may trade for their own account. In cases where the position is held at the time of publication, The Trading Dojo  will endeavor to make appropriate disclosures. However, due to the short term nature of the investment and trading activities of such Affiliates, such disclosure may not be possible, or feasible. Therefore, you understand and agree that at the time of any transaction that You make, one or more of The Trading Dojo Affiliates may have an undisclosed position in the currencies or securities referenced. 
        The Trading Dojo makes no representations regarding the strategies or individual currencies positions of any third party service provider.

        </Text>
        
        <Text fontSize="lg" mb={4}>
        To the extent that any User or prospective User utilizes any investment “filtering software”, economic, financial or retirement “calculator” or similar device (collectively referred to as “Software”) contained within or linked to the Site or referenced in any Service, the User or prospective User acknowledges and understands that the information resulting from the use of any such Software should not be construed, in any manner whatsoever, as the receipt of personalized investment advice from The Trading Dojo, its Affiliates or 
        any third party service provider and should not be considered a substitute for individual personalized advice from an investment professional of his/her/its choosing.
        </Text>

        <Text fontSize="lg" mb={4}>
        The actual results of any pick, view, investment or investment strategy will vary depending on execution time, speed and quality, market liquidity, commissions and other fees, and general market conditions and volatility.

        </Text>

        <Text fontSize="lg" mb={4}>
        The Trading Dojo and its Affiliates do not possess and do not hold any material non-public information regarding any currency, cryptocurrency or commodity. Such information will not be provided or accepted by The Trading Dojo or any of its Affiliates.
The Trading Dojo and its Affiliates do not offer or provide investment implementation services.
The Site and Services do not establish a fiduciary relationship.

        </Text>

        <Text fontSize="lg" mb={4}>
        The publication of the Site or Services should not be construed by any user and/or prospective user as a solicitation to effect, or attempt to effect transactions in currencies or cryptocurrencies or Commodities by any person or entity.

        </Text>

        <Text fontSize="lg" mb={4}>
        The Trading Dojo may suggest affiliated or third party service providers through the Site or Services and/or provide user information to affiliated or third party service providers. The Trading Dojo may receive a fee from such affiliated or third party service providers. While The Trading Dojo may review the products and services of any such recommended affiliated or third party service provider, users and/or prospective users hereby agree to determine for themselves whether any such recommended service provider is appropriate for his/her/its individual circumstances prior to the engagement thereof. The Trading Dojo  does not make any representations or warranties as to the accuracy, timeliness, suitability, completeness, or relevance of any information prepared by any affiliated or unaffiliated third party service provider, whether linked to the Site or incorporated therein, and takes no responsibility therefor. All such information is provided solely for convenience purposes only and all Users thereof should be guided accordingly.

        </Text>

        <Text fontWeight="bold" mb={4}>
        Third Party Service Providers and Information
        </Text>

        <Text fontSize="lg" mb={4}>

        </Text>

        <Text fontSize="lg" mb={4}>
        The Site and/or Services may contain links, references or recommendations to third party services providers. Your use or purchase of any product or service provided by a third party service provider is governed by the terms, conditions and rules imposed by such third party service provider and not by these Terms. By using any service you are acknowledging that you have reviewed all such terms, conditions and rules and agree to be bound by them. Further, you hereby agree to look only to such third party provider for the provision of such product or service or for satisfaction of any claim you may have related to such product or service. You acknowledge and agree that The Trading Dojo and its Affiliates shall not be held responsible for the legality, accuracy, or inappropriate
         nature of any third party product or service or for any loss or damages caused or alleged to have been caused by Your use of such product or service.
        </Text>

        <Text fontSize="lg" mb={4}>
        The Site or Services may contain links, references or recommendations to information, and/or opinions of third parties. We do not control such third parties nor necessarily endorse any such information or opinions, nor have we reviewed or approved any such content. You acknowledge and agree that The Trading Dojo, and its Affiliates shall not be held responsible for the legality, accuracy, or appropriateness of any content, advertising, products, services, or information provided by any third party, nor for any loss or damages caused or alleged to have been caused by the use of or reliance on any such content.
You expressly acknowledge and agree that your use of any third party product, service, information or opinion is solely at Your risk.

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Disclaimer of Warranties  
        </Text>

        <Text fontSize="lg" mb={4}>
        The Site, Services, and any content, product, news, pick, recommendation, information or other data or service contained or referenced therein, or accessed through the Site or Service, is provided “as is” and without representations or warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, The Trading Dojo and its Affiliates disclaim all warranties, express, implied or statutory, including, but not limited to, implied warranties of title, non-infringement, merchantability, and fitness for a 
        particular purpose, and all warranties relating to the adequacy, accuracy or completeness of any information available through the Site or any Service.
        </Text>

        <Text fontSize="lg" mb={4}>
        The Trading Dojo and its Affiliates do not warrant that your use of the Site or Services will be uninterrupted, error-free, or secure, that defects will be corrected, or that the Site or Services are free of viruses or other harmful components. You acknowledge that you are responsible for obtaining and maintaining all telephone, computer hardware and other equipment needed to access and use the Site and the Services, and all charges related thereto. You assume complete and ultimate responsibility (and acknowledge and accept all risks) for your use of the Site and/or Services and your reliance on any picks, recommendations, news or other information directly or indirectly provided. No opinion, advice, or statement by The Trading Dojo or any of its Affiliates, whether made on the Site or as part of any Service or otherwise, shall create any warranty. You use of the Site and Services, and the picks, recommendations and other information and materials provided is entirely at your own risk.

        </Text>

        <Text fontSize="lg" mb={4}>
        You expressly acknowledge that picks, recommendations and other information and materials available through the Site or Services may contain inaccuracies or errors, or materials that violate the Terms and that unauthorized alterations could be made to the content available through the Site or Services by third parties. Although We attempt to ensure the integrity of the Site and Services, We make no guarantees as to the completeness or correctness of the Site or Services. Thus, you agree that, even when The Trading Dojo  has had an opportunity to remove or correct such erroneous content, The Trading Dojo shall have no liability to You (or anyone claiming through You) based upon such erroneous content. Further, You agree that The Trading Dojo  and its Affiliates shall not be liable for any delay or failure in performance resulting directly or indirectly from acts of nature, forces or causes beyond its reasonable control, including, without limitation, Internet failures, computer equipment failures, telecommunication equipment failures, other equipment failures, electrical power failures, strikes, labor disputes, riots, insurrections, civil disturbances, shortages of labor or materials, fires, floods, storms, explosions, acts of God, war, governmental actions, orders of domestic or foreign courts or tribunals, or non-performance of third parties.

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Indemnification

        </Text>

        <Text fontSize="lg" mb={4}>
        You and your heirs, successors, signees, hereby agree to indemnify, defend and hold  The Trading Dojo its shareholders, and its employees and affiliates harmless from and against any and all claims, damages, losses, costs (including reasonable legal fees), or other expenses that arise directly or indirectly out of or from:

        </Text>

        <Text fontSize="lg" mb={4}>
        Your use of the Site or any Service;

        </Text>

        <Text fontSize="lg" mb={4}>
        Your decision to follow or act upon any trend, pick, recommendation or 
        opinion received, contained or referenced in or through the Site or any Service or from any third party service provider;      
        </Text>

        <Text fontSize="lg" mb={4}>
        Your violation of these Terms; or

        </Text>

        <Text fontSize="lg" mb={4}>
        Your violation of any third party service provider terms, conditions and rules and/or the rights of any third party.

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Limitation of Liability

        </Text>

        <Text fontSize="lg" mb={4}>
        You and your heirs, successors and assignees, hereby acknowledge and accept the limitations of the Site and Services, and agree, as a condition precedent to your access (or continued access) to the Site or Services, that neither nor its Affiliates and owners shall be liable or responsible to you (or anyone claiming through you) for any indirect, incidental, consequential, special, exemplary, punitive or other damages under any legal or equitable theory (including without limitation, contract, tort negligence, strict liability, statute, regulation, rule or other theory) arising out of or relating in any way to the Site or any Service and/or any trend, pick, recommendation, news, information or other content, product or service received or obtained through the Site or any Service, including without limitation any product, service or content from any third party service provided. Your sole remedy for dissatisfaction with the Site or any Service is to stop using it. The sole and exclusive aggregate maximum liability to The Trading Dojo and/or any of its Affiliates  for all damages, losses, and causes of action under any legal or equitable theory (including without limitation, contract, tort, negligence, strict liability, statute, regulation, rule or other theory) shall be the total amount actually paid to The Trading Dojo, 
        if any, for access to the Site or Services in the current calendar year in which the alleged damages were incurred.
        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Term and Termination
        </Text>

        <Text fontSize="lg" mb={4}>
        You acknowledge that the term of your use of the Site or any Service is “at will” in the sole discretion of The Trading Dojo. Accordingly, you hereby agree that The Trading Dojo may,
        without prior notice to you, terminate your access to and use of the Site or any Service, with or without cause.
        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Changes to the Terms of Use

        </Text>

        <Text fontSize="lg" mb={4}>
        Any changes to these terms and conditions will be notified to all clients by email.

        </Text>


        <Text fontSize="lg" mb={4} fontWeight="bold">
        Membership Options & Cancellation Policy 

        </Text>

        <Text fontSize="lg" mb={4}>
        The Trading Dojo offers its  Services via the www.thetradingdojo.com website. 
We reserve the right to refuse or cancel Your order at any time for any reason including but not limited to Service availability, errors in the description or price of the product or service, errors in your order, or if fraud or an unauthorized or illegal transaction is suspected. We will not be held responsible or liable for any failure of a transaction to complete, or any resulting loss or damages to you.

        </Text>

        <Text fontSize="lg" mb={4}>
        Your obligations hereunder, including Your obligation to pay amounts owed under these Terms for use of or access to our Services, including subscriptions, shall survive expiration or termination of these Terms and your cessation of use of the Services.

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Refund Policy

        </Text>

        <Text fontSize="lg" mb={4}>
        You must request a refund by sending us an email requesting
the same no later than fourteen (14) calendar days from the date of Your purchase in order to
receive a full refund of the entire purchase price.
        </Text>

        <Text fontSize="lg" mb={4}>
        The provision of this Site and all Services, and the performance of all terms, conditions, agreement and covenants shall be in according to these Terms. Accordingly, You hereby agree to submit to the personal and exclusive jurisdiction for all claims arising from Your use of the Site or any of the Services. Those Users who access the Site or Services from another jurisdiction hereby waive any jurisdictional, venue, or inconvenient forum objections to such courts. Furthermore, all Users hereby waive the right to a trial by jury for any claims arising out of their access or use of the Site or any of the Services. We reserve the right to limit the availability of the Services to any person, geographic area, or jurisdiction we so desire, at any time and in our sole discretion, and to limit the quantities of any Services that we provide. If any provision of these Terms is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed modified only to the extent necessary to make such provision lawful and enforceable and if such provision cannot be so modified  or severed from the Terms; provided that such modification or removal shall not affect the validity and enforceability of any remaining provisions of these Tems. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. Any heading, caption or section title contained in the Terms is inserted only as a matter of convenience and in no way defines or explains any section or provision hereof.

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        MODIFICATIONS TO THE SERVICE AND PRICES

        </Text>

        <Text fontSize="lg" mb={4}>
        Prices for Our products are subject to change without notice.
We reserve the right at any time to modify or discontinue the Services (or any part or content thereof) without notice at any time.
We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.

        </Text>

        <Text fontSize="lg" mb={4}>
        The Terms “Lifetime service” and a “lifetime membership” refers to a subscription that will last the lifetime of the Service that is provided and or The Trading Dojo’s duration. Therefore, there is no guarantee that any Service with the description of “Lifetime membership” or “Lifetime service” or any other term attesting or implying the lifetime subscription of a Service provided by  The Trading Dojo will last any amount of time beyond the date of purchase.

        </Text>

        <Text fontSize="lg" color="red" id="section1" mb={4} fontWeight="bold">
        Important Risk Notice

        </Text>

        <Text fontSize="lg" mb={4}>
        Trading on any foreign currency exchange, trading cryptocurrency or Commodities is extremely volatile, carries a high level of risk and is not suitable for everyone. This risk is increased by using margin as leverage, which is dangerous and can work against You. Before deciding to invest or trade in foreign currency, cryptocurrency, Commodity or in any other market, You should carefully consider your investment goals, level of experience, and risk tolerance. It is EXTREMELY LIKELY that You will sustain losses of some or all of your initial capital and therefore You should not invest money that You cannot afford to lose. The value of any given trade/investment You elect to make on any foreign currency exchange market, with any specific cryptocurrency and/or with any Commodity is subject to extremely high volatility that can result in significant percentage losses, or the complete loss, of the capital You contribute.

        </Text>

        <Text fontSize="lg" mb={4}>
        The content provided by The Trading Dojo, whether through free informational videos or contained in our paid instructional training, should not be construed as investment or trading advice and is not meant to be a solicitation or recommendation to buy, sell, or hold any positions in any currency, cryptocurrency or any Commodities. All demonstrated trades are merely incidental to the educational training we provide. Users of this Site or our marketing and social media channels and any student-members using our paid training materials should generally not expect to be profitable using any information we provide. You are solely responsible for Your own investment and trading decisions. Any trading decision should ONLY be made by You according to your own opinion, knowledge and experience. You assume the sole risk of any trade or investment you elect to make based on your use of the information and training materials contained on this Site or on any of our social media channels. You are encouraged to perform your own research on any currency, 
        cryptocurrency or Commodity that you elect to trade and You should always seek advice from an independent, licensed financial professional in order to be aware of all the risks associated with foreign exchange trading, cryptocurrency trading, Commodity trading and investing or swing/day trading in general. No representation or guarantee of any kind is being made that You will or should achieve profits similar to the results demonstrated in any hypothetical or live trade. You should not rely on any of the information contained on this Site or contained on any of our social media channels. All information contained on our Site, distributed via email,
         text messaging or otherwise should be independently verified by You.
        </Text>

        <Text fontSize="lg" mb={4}>
        Past performance as shown in any demonstrated trade is not indicative of future results. The past performance of any trading system or methodology is not necessarily indicative of future results. Further, stated results of any specific trade may be based on simulated or hypothetical performance results that have certain inherent limitations. Because these trades have not actually been executed, these results may have under-or over-compensated for the impact, if any, of certain market factors, such as lack of liquidity. Unlike an actual performance record, simulated results do not represent actual trading. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown in any simulated trade.

        </Text>

        <Text fontSize="lg" mb={4}>
        The Trading Dojo and its affiliates shall not be liable to You for any monetary losses or any other damages that You incur, directly or indirectly, of any kind or nature, from your use or reliance of any information or paid training materials we may provide on this Site and through the Services generally. Any Information contained on this Site may be changed at any time without notice to You.

        </Text>

        <Text fontSize="lg" mb={4}>
        The Trading Dojo is NOT a financial broker/dealer or an investment advisor as defined under all laws/regulations of any
         applicable jurisdiction. The purchase, sale or advice regarding a currency, cryptocurrency or Commodity can only be performed by a licensed broker.
        </Text>

        <Text fontSize="lg" mb={4}>
        The Trading Dojo founder and/or any employees or contributors may hold positions in certain investments that are discussed or demonstrated on our Site, communicated via email, text messaging or through other mediums.

        </Text>

        <Text fontSize="lg" mb={4} id="section2" fontWeight="bold" color="red">
        Testimonials Disclaimer
        </Text>

        <Text fontSize="lg" mb={4}>
        The Student Testimonials found on this website and on our social media accounts are ONLY from our REAL clients and students that have purchased our services. You should not construe any statement made by these individuals as a claim or representation by us of the actual results you should expect by becoming our client. We do not make any claims whatsoever as to earnings you should expect as our client, as generally expected, or otherwise. You should not assume that you will ultimately achieve any results stated by any of our students. In some instances, you will be unable to replicate such results due to a variety of factors beyond your control. We do not track the results of our students. Accordingly, the results you should generally expect to achieve as our student/client is based on generic historical data only made available to the public through published studies. This data indicates that most of our students should expect to lose money. At a minimum, historic studies also indicate that at least 50% of our students will not be profitable. 

        </Text>

        <Text fontSize="lg" mb={4}>
        Studies:

        </Text>

        <Text fontSize="lg" mb={4}>
        1 Barber, Brad & Lee, Yong-Ill & Liu, Yu-Jane & Odean, Terrance. (2014). 2 Garvey, Ryan and Murphy, Anthony, 
        The Profitability of Active Stock Traders. Journal of Applied Finance , Vol. 15, No. 2, Fall/Winter 2005. Available at SSRN: https://ssrn.com/abstract=908615).
        </Text>

        <Text fontSize="lg" mb={4}>
        2. Additionally, out of 1,146 brokerage accounts day trading the U.S. markets between March 8, 2000 and June 13, 2000, only 50% were profitable with an average net profit of $16,619. 3. Finally, out of 334 brokerage accounts day trading the U.S. markets between February 1998 and October 1999, only 35% were profitable and only 14% generated profits in excess of than $10,000.
         Douglas J. Jordan & J. David Diltz (2003) The Profitability of Day Traders, Financial Analysts Journal, 59:6, 85-94, DOI: 10.2469/faj.v59.n6.2578). 
        </Text>

        <Text fontSize="lg" mb={4}>
        You acknowledge and agree that no promise or guarantee of success or profitability has been made between you and The Trading Dojo or any of its owners, directors, officers, employees, agents, independent contractors or affiliates. Do your own research and talk to a professional financial planner in order to be aware of all the risks associated with foreign exchange, cryptocurrency and Commodity trading/investing, and seek advice from an independent financial advisor before risking any capital.

        </Text>

        <Text fontSize="lg" mb={4} id="section3" fontWeight="bold" color="red">
        Privacy Policy 

        </Text>

        <Text fontSize="lg" mb={4}>
        Your privacy is important to The Trading Dojo. To reinforce our commitment to protect your privacy, we provide this notice explaining our online information practices and the choices You can make about the way Your information is collected and used on the Site. This policy summarizes the information, including personally identifiable information, that We collect through the Site and how that information may be used. By using the Site, You consent to the collection and use of this information.

        </Text>

        <Text fontSize="lg" mb={4}>
        We reserve the right to change our privacy policy at any time. In the event We make changes to any of the terms or conditions of this privacy policy, We will incorporate those changes into this document so You will know what information is being collected and how that information is being used. We will undertake best efforts to notify you of any changes to this privacy policy utilizing the last email address You have provided to Us; however, it is Your responsibility to keep Your email address current and updated and to monitor this 
        policy for any changes. Continued use of the Site and/or Our Services shall constitute consent to this policy and any changes made hereto.
        </Text>

        <Text fontSize="lg" mb={4}>
        Definitions and Interpretation

        </Text>

        <Text fontSize="lg" mb={4}>
        In this Policy the following terms shall have the following meanings:

        </Text>

        <Text fontSize="lg" mb={4}>
        “Account” means an account required to access and/or use certain areas and features of Our Site
“Cookie” means a small text file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site. Details of the Cookies used by Our Site are set out in section 12, below;
“Our Site” means this website and all its sub-domains
“We/Us/Our” means The Trading Dojo

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        What Does This Policy Cover?

        </Text>

        <Text fontSize="lg" mb={4}>
        This Privacy Policy applies only to Your use of Our Site. It does not extend to any websites that are linked to from Our Site 
        (whether We provide those links or whether they are shared by other users). We have no control over how your data is collected, stored or used by other websites and We advise you to check the privacy policies of any such websites before providing any data to them.

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Information We Collect

        </Text>

        <Text fontSize="lg" mb={4}>
        We may collect and use Your IP address to help administer services on our website as well as to improve Your user experience. We do not use Your IP address to collect any personally identifiable information. Demographic and interest data is also collected at ourSite. We use this data to tailor the information emailed to Our customers and to display the content according to their preferences.

        </Text>

        <Text fontSize="lg" mb={4}>
        Some data will be collected automatically by Our Site ,for further details, please see section 13 on Our use of Cookies (Our Cookie Policy is below), other data will only be collected if You voluntarily submit it and consent to Us using it for the purposes set out in section 5, for example, when signing up to receive training material, making a purchase etc. Depending upon your use of Our Site, We may collect some or all of the following data:

        </Text>

        <Text fontSize="lg" mb={4}>
        Full Name
Address, including street name, city/town, state and zip code
Email Address
Phone Number
Company Information
Country
IP Address
Payment Information (Credit card/Debit card details)
Web Browser Type and Version
Operating System
URLs identifying your referring site and/or activity on Our Site

        </Text>

        <Text fontSize="lg" mb={4}>
        If you are purchasing Services, we may use a third party provider such as a shopping cart to collect a credit card number and related payment information or alternative methods of payment. If You provide information on third party sites, the privacy policy and terms of service on those sites are applicable.

        </Text>

        <Text fontSize="lg" mb={4}>
        We may also collect information You provide about others, such as how You were referred to Our website and programs.
        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        How we collect personal information

        </Text>

        <Text fontSize="lg" mb={4}>
        We collect personal information directly when You provide it to us, automatically as you navigate through the Site, or through other people when You use services associated with the Sites.
We collect your personal information when You provide it to us when You complete membership registration and buy or provide items or services on our Sites, subscribe to a newsletter, email list, submit feedback, enter a contest, fill out a survey, or send us a communication.

        </Text>

        <Text fontSize="lg" mb={4}>
        How We Use Information

        </Text>

        <Text fontSize="lg" mb={4}>
        We use the information collected to provide the best possible products and services to you and to ensure a positive experience with our company and website. This includes:
-Providing and managing your Account
-Providing and managing your access to Our Site
-Personalising and tailoring your experience on Our Site
-Supplying Our products and services to You
-Personalising and tailoring Our products and services for You
-Responding to communications from you
-Supplying you with email newsletters, alerts etc. that you have subscribed to
-Carrying out technical analysis to determine how to improve the Sites and services We provide;
-Monitoring activity on the Sites, e.g. to identify potential fraudulent activity and to ensure compliance with the user terms that apply to the Sites;
-Managing our relationship with you, e.g. by responding to your comments or queries submitted to us on the Sites or asking for your feedback or whether you want to participate in a survey;
-Managing our legal and operational affairs (including, managing risks relating to content and fraud matters)

        </Text>

        <Text fontSize="lg" mb={4}>
        If You no longer wish to receive emails from The Trading Dojo please contact us directly at thetradingdojovip@gmail.com

        </Text>

        <Text fontSize="lg" mb={4}>
        If You provide your telephone number, You agree and acknowledge that you may receive telephone calls or text messages from us with information regarding new products and services, or upcoming events. If You do not wish to receive phone calls or text messages please notify us at thetradingdojovip@gmail.com 

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        Sharing Information

        </Text>

        <Text fontSize="lg" mb={4}>
        Privacy matters are very important to Us and all available resources and processes are implemented to make sure your information remains safe and secure. We do not sell, license, lease or otherwise disclose your personal information to any third party for any reason except as noted herein.

        </Text>

        <Text fontSize="lg" mb={4}>
        We may share personal information described above with our business partners, such as, but not limited to, servicing customers and informing customers about new products and services, and as permitted by applicable law. Our affiliates may include companies controlled or owned by The Trading Dojo as well as companies that have an ownership interest in our company. The information we share with affiliates may include any of the information described above, such as your name, address and email address. Our affiliates maintain the privacy of your information to the same extent  The Trading Dojo does in accordance with this Policy.

        </Text>

        <Text fontSize="lg" mb={4}>
        Information may be shared with third parties that perform support services for The Trading Dojo such as non-affiliate companies that provide professional, legal, or accounting advice. Non-affiliated companies that assist Us in providing services to you are required to maintain the confidentiality of such information to the extent they receive it and to use your personal information only in the course of providing such services, as directed by The Trading Dojo. We may also disclose information in response to legal requests, such as a court order or subpoena.

        </Text>

        <Text fontSize="lg" mb={4}>
        As we develop our business, we might sell, buy, restructure or reorganize our business or assets. In the event of a merger, consolidation, sale, liquidation or transfer of assets, The Trading Dojo may, in its sole and absolute discretion, transfer, sell or assign information collected, including without limitation, 
        non-personal information and personal information, to one or more affiliated or unaffiliated third parties.
        </Text>

        <Text fontSize="lg" mb={4}>
        Information you make public or give to others

        </Text>

        <Text fontSize="lg" mb={4}>
        This site may make chat rooms, forums, message boards, and/or news groups available to its users. Please remember that any information that is disclosed in these areas becomes public information and You should exercise caution when deciding to disclose your personal information.

        </Text>

        <Text fontSize="lg" mb={4}>
        If You make your personal information available to other people, we cannot control or accept responsibility for the way they will use or manage that data. There are lots of ways that you can find yourself providing information to other people, like when you post a public message on a forum thread, share information via social media, or make contact with another user whether via our Sites or directly via email. Before making your information publicly available or giving Your information to anyone else, think carefully. If giving information to another user via our Sites, ask them how they will handle your information. If You are sharing information via another website, check the privacy policy for that site to understand its information management practices as this privacy policy will not apply.

        </Text>

        <Text fontSize="lg" mb={4} fontWeight="bold">
        How we keep your personal information secure

        </Text>

        <Text fontSize="lg" mb={4}>
        We store personal information on secure servers that are managed by Us and our service providers, and occasionally hard copy files that are kept in a secure location. Personal information that we store or transmit is protected by security and access controls, including username and password authentication, two-factor authentication, and data encryption where appropriate.

        </Text>

        <Text fontSize="lg" mb={4}>
        How you can access your personal information

        </Text>

        <Text fontSize="lg" mb={4}>
        You can access some of the personal information that we collect about you by logging in to your account. You also have the right to make a request to access other personal information we hold about you and to request corrections of any errors in that data. You can also close the account you have with us for any of our Sites at any time. To make an access or correction request, contact our privacy champion using the contact details at the end of this policy.

        </Text>

        <Text fontSize="lg" mb={4}>
        Marketing Choices regarding your personal information

        </Text>


        <Text fontSize="lg" mb={4}>
        Where we have your consent to do so (e.g. if you have subscribed to one of our e-mail lists or have indicated that you are interested in receiving offers or information from us), we send you marketing communications by email about products and services that we feel may be of interest to you. You can ‘opt-out’ of such communications if you would prefer not to receive them in the future by using the “unsubscribe” facility provided in the communication itself.
You also have choices about cookies, as described below. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you choose to reject cookies some parts of our Sites may not work properly in your case.

        </Text>

        <Text fontSize="lg" mb={4}>
        How long we keep your personal information

        </Text>

        <Text fontSize="lg" mb={4}>
        We retain your personal information for as long as is necessary to provide the services to you and others, and to comply with our legal obligations. If you no longer want us to use your personal information or to provide you with our services, you can request that we erase your personal information and close your account. Please note that if you request the erasure of your personal information we will retain information from deleted accounts as necessary for our legitimate business interests, to comply with the law, prevent fraud, collect fees, resolve disputes, troubleshoot problems, assist with investigations, enforce the terms of service and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy.

        </Text>

        <Text fontSize="lg" mb={4}>
        Cookies

        </Text>

        <Text fontSize="lg" mb={4}>
        When you visit our Sites, there is  certain information which is recorded which is generally anonymous information and does not reveal your identity. If you are logged into your account some of this information could be associated with your account. We’re talking about the following kinds of details:
-your IP address or proxy server IP address
-the domain name you requested
-the name of your internet service provider is sometimes captured depending on the configuration of your ISP connection
-the date and time of your visit to the website
-the length of your session
-the pages which you have accessed
-the number of times you access our site within any month
-the file URL you look at and information relating to it
-the website which referred you to our Sites
-the operating system which your computer uses.

        </Text>

        <Text fontSize="lg" mb={4}>
        Occasionally, we will use third party advertising companies to serve ads based on prior visits to our Sites. For example, if you visit our Sites, you may later see an advertisement for our products and services when you visit a different site.

        </Text>

        <Text fontSize="lg" mb={4}>
        Each time you visit our website our servers automatically record your activity and information such as your IP address and/or the domain from which you are visiting. We also record which links on our webpage you click on or visit and any search terms you use. We use this data for website maintenance and technical administration. Your IP address is never linked with any personally identifiable information to identify you personally, except in the case of our investigation into a violation of the terms of use or alleged misconduct.

        </Text>

        <Text fontSize="lg" mb={4}>
        Links to Other Websites

        </Text>

        <Text fontSize="lg" mb={4}>
        This Site may contain links to third parties’ websites. Please note that we are not responsible for the collection, use, maintenance, sharing, or disclosure of data and information by such third parties. If you provide information on third party sites, the privacy policy and terms of service on those sites are applicable. Especially if the third party site is used in connection with a purchase of a product. We encourage you to read the privacy policies of websites that you visit before submitting personal information.

        </Text>


          <Text fontSize="lg" mb={4}>
          When we need to update this policy

            </Text>
    
            <Text fontSize="lg" mb={4}>
            We will need to change this policy from time to time  to make sure it stays up to date with the latest legal requirements and any changes to our privacy management practices.
When we do change the policy, we will make sure to notify you about such changes, where required. A copy of the latest version of this policy will always be available on this page.

            </Text>
    
            <Text fontSize="lg" mb={4}>
            Our Commitment to Security and Confidentiality

            </Text>
    
            <Text fontSize="lg" mb={4}>
            Notwithstanding our commitment to security and confidentiality, the fact remains that no transmission over the internet or any wireless network provides complete security. In light of the inherent vulnerability, you acknowledge that: (a) there exists security and privacy limitations which are beyond our control; (b) there can be no guarantee of the security, integrity and privacy limitations related to information transmitted to us over the internet or through our website; and/or (c) outside interference through piracy cannot be controlled by us and as such, information and data transmitted may be viewed by unauthorized third parties.

            </Text>
    
            <Text fontSize="lg" mb={4}>
            If you are a User or visitor in the European Economic Area these rights also apply to you:

            </Text>
    
            <Text fontSize="lg" mb={4}>
            For the purposes of applicable EU data protection law ,including the General Data Protection Regulation 2016/679 (the “GDPR”), we are a ‘data controller’ of your personal information.
            </Text>

            <Text fontSize="lg" mb={4}>
            You are also entitled to ask us to port your personal information (i.e. to transfer in a structured, commonly used and machine-readable format, to you), to erase it, or restrict its processing. You also have rights to object to some processing that is based on our legitimate interests, such as profiling that we perform for the purposes of direct marketing, and, where we have asked for your consent to process your data, to withdraw this consent as more fully described below.

            </Text>
    
            <Text fontSize="lg" mb={4}>
            These rights are limited in some situations – for example, we can demonstrate that we have a legal requirement to process your personal information. In some instances, this means that we may retain some data even if you withdraw your consent.

            </Text>

            <Text fontSize="lg" mb={4}>
            Where we require your personal information to comply with legal or contractual obligations, then provision of such data is mandatory: if such data is not provided, then we will not be able to manage our contractual relationship with you, or to meet obligations placed on us. In all other cases, provision of requested personal information is optional.

            </Text>
    
            <Text fontSize="lg" mb={4}>
            If you have unresolved concerns you also have the right to complain to the applicable data protection authorities. The relevant data protection authority will be the data protection authority of the country: (i) of your habitual residence; (ii) of your place of work; or (iii) in which you consider the alleged infringement has occurred.

            </Text>

            <Text fontSize="lg" mb={4} fontWeight="bold">
            How you can contact us

            </Text>
    
            <Text fontSize="lg" mb={4}>
            If you have any questions about our privacy practices or the way in which we have been managing your personal information, please contact us at thetradingdojovip@gmail.com

            </Text>

            <Text fontSize="lg" mb={4} fontWeight="bold">
            *IMPORTANT RISK NOTICE*

            </Text>
    
            <Text fontSize="lg" mb={4}>
            Trading on any foreign currency exchange, trading cryptocurrency or Commodities is extremely volatile, carries a high level of risk and is not suitable for everyone. This risk is increased by using margin as leverage, which is dangerous and can work against You. Before deciding to invest or trade in foreign currency, cryptocurrency, Commodity or in any other market, You should carefully consider your investment goals, level of experience, and risk tolerance. It is EXTREMELY LIKELY that You will sustain losses of some or all of your initial capital and therefore You should not invest money that You cannot afford to lose. The value of any given trade/investment You elect to make on any foreign currency exchange market, with any specific cryptocurrency and/or with any Commodity is subject to extremely high volatility that can result in significant percentage losses, or the complete loss, of the capital You contribute.

            </Text>

            <Text fontSize="lg" mb={4}>
            The content provided by The Trading Dojo, whether through free informational videos or contained in our paid instructional training, should not be construed as investment or trading advice and is not meant to be a solicitation or recommendation to buy, sell, or hold any positions in any currency, cryptocurrency or any Commodities. All demonstrated trades are merely incidental to the educational training we provide. Users of this Site or our marketing and social media channels and any student-members using our paid training materials should generally not expect to be profitable using any information we provide. You are solely responsible for Your own investment and trading decisions. Any trading decision should ONLY be made by You according to your own opinion, knowledge and experience. You assume the sole risk of any trade or investment you elect to make based on your use of the information and training materials contained on this Site or on any of our social media channels. You are encouraged to perform your own research on any currency, cryptocurrency or Commodity that you elect to trade and You should always seek advice from an independent, licensed financial professional in order to be aware of all the risks associated with foreign exchange trading, cryptocurrency trading, Commodity trading and investing or swing/day trading in general. No representation or guarantee of any kind is being made that You will or should achieve profits similar to the results demonstrated in any hypothetical or live trade. You should not rely on any of the information contained on this Site or contained on any of our social media channels. All information contained on our Site, distributed via email, text messaging or otherwise should be independently verified by You.

            </Text>
    
            <Text fontSize="lg" mb={4}>
            Past performance as shown in any demonstrated trade is not indicative of future results. The past performance of any trading system or methodology is not necessarily indicative of future results. Further, stated results of any specific trade may be based on simulated or hypothetical performance results that have certain inherent limitations. Because these trades have not actually been executed, these results may have under-or over-compensated for the impact, if any, of certain market factors, such as lack of liquidity. Unlike an actual performance record, simulated results do not represent actual trading. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown in any simulated trade.

            </Text>

            <Text fontSize="lg" mb={4}>
            The Trading Dojo and its affiliates shall not be liable to You for any monetary losses or any other damages that You incur, directly or indirectly, of any kind or nature, from your use or reliance of any free information or paid training materials we may provide on this Site and through the Services generally. Any Information contained on this Site may be changed at any time without notice to You.

            </Text>
    
            <Text fontSize="lg" mb={4}>
            The Trading Dojo is NOT a financial broker/dealer or an investment advisor as defined under all laws/regulations of any applicable jurisdiction. The purchase, sale or advice regarding a currency, cryptocurrency or Commodity can only be performed by a licensed broker.

            </Text>

            
            <Text fontSize="lg" mb={4}>
            The Trading Dojo founder and/or any employees or contributors may hold positions in certain investments that are discussed or demonstrated on our Site, communicated via email, text messaging or through other mediums.

            </Text>

            <Text fontSize="lg" mb={4} fontWeight="bold">
            *IMPORTANT NOTICE REGARDING ILLEGITIMATE IMPERSONATORS*

            </Text>
    
            <Text fontSize="lg" mb={4}>
            Please be advised that there are one or more third parties attempting to impersonate The Trading Dojo and/or Mark Pirch, the founder of The Trading Dojo, by offering investment advisory services in exchange for money or cryptocurrency payments. In some cases, these impersonators have created websites and social media profiles purporting to be The Trading Dojo by impersonating our Website and/or our Channels ( which currently only includes YouTube via "The Trading Dojo", Telegram via "The Trading Dojo”, Instagram the “ICT_DOJO”, and Discord via “The Trading Dojo” ). Neither The Trading Dojo nor Mark Pirch provide any investment advice or any type of investment advisory or similar service including guaranteeing any type of daily, weekly or monthly returns, etc. Any service We offer and any corresponding transaction with any student/subscriber is exclusively conducted through this Website. Mark Pirch does not provide any services of any kind to the general public in exchange for any consideration (i.e. monetary or cryptocurrency payments) other than through The Trading Dojo. All offerings/services from any third-party claiming to be The Trading Dojo and/or Mark Pirch other than through this Website and/or our official Channels, or that may claim any affiliation with either of the foregoing, are illegitimate. While We have made reasonable efforts to attempt to address these illegitimate impersonators, this is not always possible. We may not be aware of all existing impersonators or any future impersonators.


            </Text>



      </Container>

      {/* Bolinhas de Rolagem */}
      {/* Bolinhas de Rolagem */}
      <Box
        position="fixed"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          position="relative"
          mb={3}
        >
          <Box
            width="20px"
            height="20px"
            borderRadius="50%"
            bg="#00bbff"
            cursor="pointer"
            _hover={{ bg: "#ff4d4d", transform: "scale(1.2)" }}
            transition="all 0.3s ease"
            onClick={() => scrollToSection("section1")}
            onMouseEnter={() => setHoveredSection("Section 1")}
            onMouseLeave={() => setHoveredSection(null)}
          />
          {hoveredSection === "Section 1" && (
            <Box
              position="absolute"
              left="-220px"
              marginBottom="70px"
              bg="black"
              color="white"
              p={2}
              borderRadius="md"
              boxShadow="md"
              whiteSpace="nowrap"
            >
              Important Risk Notice
            </Box>
          )}
        </Box>
        <Box
          position="relative"
          mb={3}
        >
          <Box
            width="20px"
            height="20px"
            borderRadius="50%"
            bg="#00bbff"
            cursor="pointer"
            _hover={{ bg: "#ff4d4d", transform: "scale(1.2)" }}
            transition="all 0.3s ease"
            onClick={() => scrollToSection("section2")}
            onMouseEnter={() => setHoveredSection("Section 2")}
            onMouseLeave={() => setHoveredSection(null)}
          />
          {hoveredSection === "Section 2" && (
            <Box
              position="absolute"
              left="-220px"
              bg="black"
              color="white"
              p={2}
              borderRadius="md"
              boxShadow="md"
              whiteSpace="nowrap"
            >
              Testimonials Disclaimer
            </Box>
          )}
        </Box>
        <Box
          position="relative"
        >
          <Box
            width="20px"
            height="20px"
            borderRadius="50%"
            bg="#00bbff"
            cursor="pointer"
            _hover={{ bg: "#ff4d4d", transform: "scale(1.2)" }}
            transition="all 0.3s ease"
            onClick={() => scrollToSection("section3")}
            onMouseEnter={() => setHoveredSection("Section 3")}
            onMouseLeave={() => setHoveredSection(null)}
          />
          {hoveredSection === "Section 3" && (
            <Box
              position="absolute"
              left="-120px"
              bg="black"
              color="white"
              p={2}
              borderRadius="md"
              boxShadow="md"
              whiteSpace="nowrap"
            >
             Privacy Policy
            </Box>
          )}
        </Box>
      </Box>

      {isLoginModalOpen && <LoginPopup onClose={closeLoginModal} />}
    </Box>
  );
};

export default TermsPage;
