import "./index.css";
import LandingPageLayout from "../../layouts/landingPage";
import styled from "@emotion/styled";
import { LightTheme } from "../../theme";
import PWaitlist from "../../components/Product-Waitlist";
import {
  Broadcast,
  BugDroid,
  Crosshair,
  FileCode,
  Plugs,
  Polygon,
  ShareNetwork,
} from "phosphor-react";
import gridlines from "../../assets/images/gridlines.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const OddContainer = styled.article`
  padding: 50px 0;
  position: relative;
  background-color: var(--GreyscaleSurfaceSubtle);

  #spacer {
    padding-top: 70px;
  }

  &:nth-of-type(1) {
    padding-top: 120px;

    @media (max-width: 767px) {
      padding-top: 100px;

      #spacer {
        padding-top: 0px;
      }
    }
  }

  .gridlines {
    position: absolute;
    top: -150px;
    left: -100px;
    cursor: default;

    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      top: -30%;
      left: -50%;
    }
  }
`;
const Container = styled.div`
  max-width: 100%;
  width: 66%;
  margin: auto;
  display: flex;
  align-items: flex-start;
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
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 50px;
  }
`;
const Column = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 768px) {
  }
`;
const Column2 = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 768px) {
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
const Text = styled.p`
  color: ${LightTheme.GreyscaleSurfaceDisabled};
  font-size: 17px;
  font-weight: 500;
  line-height: 150%;
  text-align: justify;
`;
const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  line-height: 150%;
  max-width: 100%;
  width: 66%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 991px) {
    font-size: 35px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    width: 90%;
  }
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;
const Subheader = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 130%;
`;

const ServicesPage = () => {
  return (
    <LandingPageLayout>
      <OddContainer>
      <div className="ourservicestwo">
        <img className="gridlines" src={gridlines} alt="gridlines" />
        <Title>Our Services</Title>

        <Container>
          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInDown">
            <Column>
              <div>
                <Flex>
                  <BugDroid
                    size={40}
                    weight="fill"
                    color="var(--PrimarySurfaceLighter)"
                  />
                  <Subheader>Trading Bot/System Development</Subheader>
                </Flex>
                <Text>
                  We offer services for building and editing trading
                  algorithms/bots, tailored to the specific needs of each
                  client. our team of experts quant developers will work closely
                  with clients to create algorithms that fit their trading
                  strategies and goals .
                </Text>
              </div>

              <div>
                <Flex>
                  <FileCode
                    size={40}
                    weight="bold"
                    color="var(--PrimarySurfaceLighter)"
                  />
                  <Subheader>Code Conversion Services</Subheader>
                </Flex>
                <Text>
                  This service involves converting algorithmic trading code from
                  one programming language to another such as Pinescript, MQL4,
                  MQL5, QuantConnect, and cAlgo, as well as other platforms.
                  This can be useful for traders who want to use a trading
                  system that is written in a language they're not familiar
                  with.
                </Text>
              </div>

              <div>
                <Flex>
                  <Polygon
                    size={40}
                    weight="bold"
                    color="var(--PrimarySurfaceLighter)"
                  />
                  <Subheader>Copy Trading systems</Subheader>
                </Flex>
                <Text>
                  This service involves creating a system where traders can
                  automatically copy the trades of other successful traders.
                  This can be a good option for traders who want to learn from
                  others and benefits from their expertise.
                </Text>
              </div>
            </Column>
          </AnimationOnScroll>

          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInUp">
            <Column2>
              <div id="space" />
              <div>
                <Flex>
                  <Plugs
                    size={40}
                    weight="bold"
                    color="var(--PrimarySurfaceLighter)"
                  />
                  <Subheader>
                    Integration service for various platforms
                  </Subheader>
                </Flex>
                <Text>
                  This service involves integrating algorithmic trading systems
                  with various trading platforms, such as MetaTrader,
                  NinjaTrader, or TradingView. This ensures that the trading
                  system can be used seamlessly on the trader's preferred
                  platform.
                </Text>
              </div>

              <div>
                <Flex>
                  <Crosshair
                    size={40}
                    weight="bold"
                    color="var(--PrimarySurfaceLighter)"
                  />
                  <Subheader>Indicator Development</Subheader>
                </Flex>
                <Text>
                  This service involves developing custom trading indicators
                  that can be used to identifying trading opportunities. this
                  can include both technical and fundamental indicators.
                </Text>
              </div>

              <div>
                <Flex>
                  <Broadcast
                    size={40}
                    weight="bold"
                    color="var(--PrimarySurfaceLighter)"
                  />
                  <Subheader>Signal Automation</Subheader>
                </Flex>
                <Text>
                  Automate the process of generating and executing trading
                  signals using custom algorithms based on technical or
                  fundamental analysis. This service can include integrating
                  alerts for the trading signals to various platforms, such as
                  Telegram, email or the other messaging platforms. This can
                  help traders stay updated on the latest trading opportunities
                  and make timely decisions.
                </Text>
              </div>
            </Column2>
          </AnimationOnScroll>
        </Container>
        </div>
      </OddContainer>

      <PWaitlist bgColor="var(--Grey100)" type="both" />
    </LandingPageLayout>
  );
};
export default ServicesPage;
