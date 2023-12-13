import { Grid, Stack } from "@mui/material";
import DisplayCard from "../../components/DisplayCard";
import "./index.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { NavLinkButton } from "../../components/Shared/Buttons";
import LandingPageLayout from "../../layouts/landingPage";
import { LargeText, ModerateText } from "../../components/Shared/Texts";
import buildingBlocksAnimation from "../../assets/animations/buildingBlocks.json";
import styled from "@emotion/styled";
import { LightTheme } from "../../theme";
import PWaitlist from "../../components/Product-Waitlist";

// assets
import alc from "../../assets/images/alc.svg";
import laptop from "../../assets/images/about-img.svg";
import alcIcon from "../../assets/images/side-icon.svg";
import gridlines from "../../assets/images/gridlines.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const OddContainer = styled.article`
  background-color: ${LightTheme.GreyscaleSurfaceSubtle};
  padding: 50px 0;
  position: relative;

  &:nth-of-type(1) {
    padding-top: 150px;

    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .gridlines {
    position: absolute;
    top: -150px;
    right: 0px;
    cursor: default;

    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      top: -30%;
      right: -50%;
    }
  }
`;
const EvenContainer = styled.article`
  background-color: var(--Grey100);
  padding: 70px 0;
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
      top: -50%;
    }
  }
`;
const Container = styled.div`
  max-width: 100%;
  width: 66%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10%;

  @media (min-width: 992px) and (max-width: 1313px) {
    column-gap: 5%;
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    column-gap: 20px;
    width: 90%;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    width: 90%;

    .player {
      width: 100% !important;
      margin: auto;
    }
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
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;
const Welcome = styled.h2`
  font-size: 35px;
  font-weight: 700;
  line-height: 150%;

  @media (max-width: 991px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    text-align: center;
    display: none;
  }
`;
const GreenText = styled.span`
  color: ${LightTheme.PrimarySurfaceLighter};
`;
const DarkGreenText = styled.span`
  color: ${LightTheme.PrimarySurfaceDefault};
`;
const Subheader = styled.div`
  font-size: 35px;
  font-weight: 700;
  line-height: 130%;

  @media (max-width: 991px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
const Text = styled.p`
  color: ${LightTheme.GreyscaleSurfaceDisabled};
  font-size: 17px;
  font-weight: 500;
  line-height: 150%;
  text-align: justify;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    font-size: 17px;
  }
`;
const Vision = styled.div`
  background-color: ${LightTheme.PrimarySurfaceLighter};
  color: ${LightTheme.GreyscaleSurfaceSubtle};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  border-radius: 4px;
  padding: 8px 16px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 150px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const LaptopImg = styled.img`
  width: 400px;

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 350px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 300px;
  }
  @media (max-width: 767px) {
    width: 80%;
  }
`;
const Alcicon = styled.img`
  position: absolute;
  top: 0;
  left: 3%;

  @media (max-width: 1313px) {
    left: 0;
    width: 2%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const Alcicon2 = styled.img`
  position: absolute;
  top: 25%;
  left: 5%;
  transform: rotate(180deg);

  @media (max-width: 1313px) {
    width: 2%;
    left: 2%;
    top: 15%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LottieContainer = styled.div`
  background-color: #000;
  cursor: default;
`;

const AboutPage = () => {
  return (
    <LandingPageLayout>
      <OddContainer>
        <img className="gridlines" src={gridlines} alt="gridlines" />
        <Container>
          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInDown">
            <div>
              <Welcome>
                Welcome to algo<DarkGreenText>cipher</DarkGreenText>
              </Welcome>

              <Vision>our vision</Vision>

              <Subheader>
                <GreenText>Revolutionizing</GreenText> the{" "}
                <GreenText>financial</GreenText> Landscape
              </Subheader>

              <Text>
                Vision: Our vision at Algocipher is to be the leading force in
                algorithmic trading and quantitative finance, synonymous with
                innovation, expertise, and success. We envision a future where
                our solutions redefine the way trading is conducted, giving our
                clients a competitive edge in the financial markets.
              </Text>

              <Text>
                We aspire to be the go-to consulting company for individuals,
                hedge funds, investment banks, and other financial institutions
                seeking transformative technology solutions. By consistently
                pushing the boundaries of algorithmic trading, we aim to reshape
                the financial landscape, making it accessible and beneficial to
                a wider range of traders
              </Text>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInUp">
            <Player
             id="player"
              style={{
                margin: "0px",
                cursor: "default",

              }}
              loop
              autoplay
              src={buildingBlocksAnimation}
            />
          </AnimationOnScroll>
        </Container>
      </OddContainer>

      <EvenContainer>
        <Alcicon src={alcIcon} alt="alcicon" />
        <Alcicon2 src={alcIcon} alt="alcicon" />
        <img className="gridlines" src={gridlines} alt="gridlines" />
        <Subcontainer id="about-us">
          <Flex>
            <Subheader>ABOUT US</Subheader>
            <img src={alc} alt="alc" id="abt-alc" />
          </Flex>
          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInUp">
            <article>
              <Text className="AboutUsText">
                We use cutting-edge technology and software to develop trading
                systems that are reliable, efficient, and effective. We also
                provide ongoing support to ensure that your trading system
                remains up-to-date and effective. We believe in transparency and
                open communication, and we work closely with our clients to
                ensure that their trading strategies are aligned with their
                goals.
              </Text>

              <Text>
                At algoCipher, we understand the technical complexities involved
                in algorithmic trading, and we have the expertise to develop
                customized trading solutions that can help you achieve your
                trading goals. Our team of experienced professionals has a deep
                understanding of various programming languages, trading
                platforms, and technical analysis tools, which allows us to
                create trading solutions that are tailored to your specific
                needs.
              </Text>

              <Text className="AboutUsText">
                At algoCipher, we're committed to staying up-to-date with the
                latest trends and developments in algorithmic trading. We
                regularly attend industry conferences and stay informed about
                the latest technological advancements, which allows us to
                provide our clients with the most effective trading solutions.
              </Text>

              <Text className="AboutUsText">
                Whether you're an individual trader or a company looking to
                automate your trading strategies, we have the expertise and
                resources to help you achieve your goals. With algoCipher, you
                can be confident that you're working with a team of
                professionals who are dedicated to helping you succeed.
              </Text>
            </article>
          </AnimationOnScroll>
        </Subcontainer>
      </EvenContainer>

      <OddContainer>
        <Container id="abt-container">
          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInLeft">
            <LaptopImg src={laptop} alt="laptop" />
          </AnimationOnScroll>

          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInRight">
            <div>
              <Vision>our mission</Vision>

              <Subheader>
                <GreenText>Leading force</GreenText> in{" "}
                <GreenText>algorithmic trading</GreenText> and quantitative
                Finance
              </Subheader>

              <Text>
                Mission: At Algocipher, our mission is to revolutionize the
                financial landscape by harnessing cutting-edge technology to
                empower traders, investors, and financial institutions. We
                strive to deliver advanced algorithmic trading solutions that
                optimize returns and minimize risks, enabling our clients to
                navigate the complexities of the financial markets with
                confidence and success.
              </Text>

              <Text>
                We are committed to continuous innovation and the highest
                standards of expertise, ensuring that our clients remain at the
                forefront of quantitative finance. Our dedication to excellence
                drives us to create tailored solutions that cater to individual
                trading strategies and goals, fostering a culture of financial
                prosperity for all.
              </Text>
            </div>
          </AnimationOnScroll>
        </Container>
      </OddContainer>

      <PWaitlist bgColor="var(--Grey100)" type="second" />
    </LandingPageLayout>
  );
};
export default AboutPage;
