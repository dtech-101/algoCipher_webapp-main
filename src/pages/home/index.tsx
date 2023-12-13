import { Stack } from "@mui/material";
import "./index.css";
import LandingPageLayout from "../../layouts/landingPage";
import { BodyRegular, LinksSmall, TitleSemibold } from "../../components/Shared/Texts";
import AppContext from "../../context/AppContext";
import { AppState } from "../../context/AppContext/types";
import { useContext, useState } from "react";
import Graphics from '../../assets/images/graphics.svg';
import AndroidLogo from '../../assets/images/AndroidLogo.svg';
import Logo2 from '../../assets/images/logo2.svg'
import InternetLogo from '../../assets/images/InternetLogo.svg'
import Tool from '../../assets/images/ToolLogo.svg'
import { LightTheme } from "../../theme";
import { BugDroid, CaretRight, Crosshair, Plugs, Polygon } from "phosphor-react";
import styled from "@emotion/styled";
import { AnimationOnScroll } from "react-animation-on-scroll";

// assets
import alc from "../../assets/images/alc.svg";
import alcIcon from "../../assets/images/side-icon.svg";
import { useNavigate } from "react-router-dom";
import PWaitlist from "../../components/Product-Waitlist";
import gridlines from "../../assets/images/gridlines.svg";

const Wrapper1 = styled.section`
  background-color: var(--WhiteSurface);
  padding: 150px 0 50px;
  position: relative;

  .gridlines {
    position: absolute;
    top: -150px;
    left: -100px;
    cursor: default;
    z-index: -1;

    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      top: -50%;
      left: -50%;
    }
  }

  @media (max-width: 767px) {
    padding-top: 100px;
  }
`;
const Wrapper2 = styled.section`
  background-color: var(--Grey100);
  padding: 50px 0;
  position: relative;
  overflow: hidden;

  .gridlines {
    position: absolute;
    top: 30px;
    right: 0px;
    cursor: default;
    
    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      top: 50px;
    }
    @media (max-width: 768px) {
      top: -41%;
      left: -50%;
    }
  }
`;
const Wrapper3 = styled.section`
  background-color: var(--Green800);
  padding: 50px 0;
  position: relative
`;
const Container = styled.div`
  max-width: 100%;
  width: 66%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 992px) and (max-width: 1313px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;
const Subcontainer = styled.div`
  max-width: 100%;
  width: 66%;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) and (max-width: 1313px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;
const ServiceFlex = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 30px;
`;
const Header = styled.h2`
  font-size: 45px;
  font-weight: 700;
  line-height: 150%;

  @media (max-width: 991px) {
    font-size: 35px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 28px;
  }
  @media (max-width: 400px) {
    font-size: 24px
  }
`;
const GreenText = styled.span`
  color: ${LightTheme.PrimarySurfaceLighter};
`
const Subheader = styled.div`
  font-size: 35px;
  font-weight: 700;
  line-height: 130%;

  @media (max-width: 991px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 25px
  }
`;
const Text = styled.p`
  color: ${LightTheme.GreyscaleSurfaceDisabled};
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  text-align: justify;

  &:nth-of-type(1) {
    margin: -10px auto 40px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 20px;
  }
`;
const Btns = styled.a`
  background-color: var(--ButtonsSurfacePrimary);
  color: ${LightTheme.GreyscaleSurfaceSubtle};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  border-radius: 4px;
  padding: 10px 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  cursor: pointer;
  width: 200px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  background-color: var(--Green900);
  padding: 30px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 20px;
  }
`
const Alcicon = styled.img`
  position: absolute;
  top: 0;
  left: 3%;
  width: 1.75%;

  @media (max-width: 1313px) {
    left: 0;
    width: 2%;
  }
  @media (max-width: 768px) {
    display: none
  }
  @media (max-width: 425px) {
    display: block;
    height: 50vh;
    width: 100px;
    top: 430px;
    left: 70px;
`;
const Alcicon2 = styled.img`
  position: absolute;
  top: 25%;
  left: 5%;
  width: 1.75%;
  transform: rotate(180deg);

  @media (max-width: 1313px) {
    width: 2%;
    left: 2%;
    top: 15%
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: block;
    height: 50vh;
    width: 100px;
    top: 300px;
`;


const HomePage = () => {
  const { theme } = useContext<AppState>(AppContext);
  const navigate = useNavigate();

  return (
    <LandingPageLayout>
      <Wrapper1>
        <img className="gridlines" src={gridlines} alt="gridlines" />
        <AnimationOnScroll animateOnce delay={200} animateIn='animate__zoomIn'>
          <Container>
            <div>
              <Header>
                <GreenText>Best Automated Trading<br id="br-tag" /> solutions</GreenText>{" "}
                for retail traders<br id="br-tag" /> and trading institutions
              </Header>

              <Text>We build, modify and optimize your trading algorithms<br id="br-tag" /> and bots </Text>

              <Btns href="#waitlist">
                Get started
                <CaretRight weight="bold" />
              </Btns>
            </div>
          </Container>
        </AnimationOnScroll>
      </Wrapper1>

      <Wrapper2>
        <Alcicon src={alcIcon} alt="alcicon" />
        <Alcicon2 src={alcIcon} alt="alcicon" />
        <img className="gridlines" src={gridlines} alt="gridlines" />
    
        <Subcontainer id="about-us">
          <Flex>
            <Subheader>ABOUT US</Subheader>
            <img src={alc} alt="alc" id="abt-alc" />
          </Flex>

          <AnimationOnScroll animateOnce delay={200} animateIn='animate__fadeInDown'>
            <article>
              <Text style={{ textAlign: "justify" }}>
                At algoCipher, we understand the technical complexities involved in algorithmic trading, and we have the expertise
                to develop customized trading solutions that can help you achieve your trading goals. Our team of experienced professionals
                have a deep understanding of various programming languages, trading platforms, and technical analysis tools, which allows
                us to create trading solutions that are tailored to your specific needs.
              </Text>
            </article>
          </AnimationOnScroll>
        </Subcontainer>
      </Wrapper2>

      <Wrapper3>
        <AnimationOnScroll animateOnce delay={200} animateIn='animate__fadeIn'>
          <Subcontainer>
            <Flex>
              <Subheader style={{ color: "var(--GreyscaleTextIconNegative)" }}>OUR SERVICES</Subheader>
              <Btns onClick={() => navigate("/services")} id="services-btn">
                View services
                <CaretRight weight="bold" />
              </Btns>
            </Flex>
          </Subcontainer>
        </AnimationOnScroll>

        <Container style={{ columnGap: "30px", alignItems: "flex-start" }}>
          <AnimationOnScroll animateOnce delay={200} animateIn='animate__fadeInLeft'>
            <ServiceFlex>
              <Flex style={{ columnGap: 20 }}>
                <ImgContainer>
                  <BugDroid size={56} weight='fill' color={LightTheme.GreyscaleTextIconNegative} />
                </ImgContainer>
                <Stack direction={'column'}>
                  <TitleSemibold sx={{ color: LightTheme.GreyscaleTextIconNegative }}>Trading Bot/System Development</TitleSemibold>
                  <BodyRegular sx={{ color: LightTheme.Grey500, textAlign: "justify" }}>We offer services for building and editing trading algorithms/bots,<br id="br-tag" /> tailored to the specific needs of each client. </BodyRegular>
                  <LinksSmall onClick={() => navigate("/services")} sx={{ color: LightTheme.ButtonsTextLink, textDecoration: "underline", cursor: "pointer" }}>Learn more</LinksSmall>
                </Stack>
              </Flex>

              <Flex style={{ columnGap: 20}}>
                <ImgContainer>
                  <Polygon size={56} weight='fill' color={LightTheme.GreyscaleTextIconNegative} />
                </ImgContainer>
                <Stack direction={'column'}>
                  <TitleSemibold sx={{ color: LightTheme.GreyscaleTextIconNegative }}>Copy Trading Systems</TitleSemibold>
                  <BodyRegular sx={{ color: LightTheme.Grey500, textAlign: "justify" }}>Create systems where traders can automatically copy the trades of other successful traders. </BodyRegular>
                  <LinksSmall onClick={() => navigate("/services")} sx={{ color: LightTheme.ButtonsTextLink, textDecoration: "underline", cursor: "pointer" }}>Learn more</LinksSmall>
                </Stack>
              </Flex>
            </ServiceFlex>
          </AnimationOnScroll>
          
          <AnimationOnScroll animateOnce delay={200} animateIn='animate__fadeInRight'>
            <ServiceFlex>
              <div id="service-flex" />
              <Flex style={{ columnGap: 20 }}>
                <ImgContainer>
                  <Plugs size={56} weight='fill' color={LightTheme.GreyscaleTextIconNegative} />
                </ImgContainer>
                <Stack direction={'column'}>
                  <TitleSemibold sx={{ color: LightTheme.GreyscaleTextIconNegative }}>Integration Service for various platforms</TitleSemibold>
                  <BodyRegular sx={{ color: LightTheme.Grey500, textAlign: "justify" }}>This service involves integrating algorithmic trading systems with various trading platforms, such as MetaTrader, NinjaTrader, TradingView e.t.c</BodyRegular>
                  <LinksSmall onClick={() => navigate("/services")} sx={{ color: LightTheme.ButtonsTextLink, textDecoration: "underline", cursor: "pointer" }}>Learn more</LinksSmall>
                </Stack>
              </Flex>

              <Flex style={{ columnGap: 20 }}>
                <ImgContainer>
                <Crosshair size={56} weight='fill' color={LightTheme.GreyscaleTextIconNegative} />
                </ImgContainer>
                <Stack direction={'column'}>
                  <TitleSemibold sx={{ color: LightTheme.GreyscaleTextIconNegative }}>Indicator Development</TitleSemibold>
                  <BodyRegular sx={{ color: LightTheme.Grey500, textAlign: "justify" }}>Automate the process of generating and executing trading signals using custom algorithms based on technical or fundamental analysis.</BodyRegular>
                  <LinksSmall onClick={() => navigate("/services")} sx={{ color: LightTheme.ButtonsTextLink, textDecoration: "underline", cursor: "pointer" }}>Learn more</LinksSmall>
                </Stack>
              </Flex>
            </ServiceFlex>
          </AnimationOnScroll>
        </Container>
      </Wrapper3>

      <PWaitlist
        bgColor="var(--Grey100)"
        type="both"
      />
    </LandingPageLayout >
  );
};

export default HomePage;
