import "./index.css";
import LandingPageLayout from "../../layouts/landingPage";
import styled from "@emotion/styled";
import { LightTheme } from "../../theme";
import { Button, CircularProgress, Grid, Stack } from "@mui/material";
import XLogo from "../../assets/images/XLogo.svg";
import LinkedinLogo from "../../assets/images/LinkedinLogo.svg";
import FacebookLogo from "../../assets/images/FacebookLogo.svg";
import InstagramLogo from "../../assets/images/InstagramLogo.svg";
import { Envelope, User } from "phosphor-react";
import { XLargeButton } from "../../components/Shared/Buttons";
import { TitleBold } from "../../components/Shared/Texts";
import gridlines from "../../assets/images/gridlines.svg";
import { useEffect, useState } from "react";
import { updateExpressionStatement } from "typescript";
import useValidator from "../../hooks/useValidator";
import { FormatBold } from "@mui/icons-material";
import { sendContactMessage } from "../../services/api/publicApi";
import usePublicApi from "../../hooks/api/usePublicApi";
import {
  Broadcast,
  BugDroid,
  Crosshair,
  FileCode,
  Plugs,
  Polygon,
  ShareNetwork,
} from "phosphor-react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const OddContainer = styled.article`
  background-color: transparent;
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
    left: -100px;
    cursor: default;
    z-index: -1;

    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      top: -40%;
      left: -50%;
    }
  }
`;
const EvenContainer = styled.article`
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
  margin: 0;
  margin-left: auto;
  margin-right: auto;
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
  @media (max-width: 767px) {
    flex-direction: column;
    width: 90%;
  }
`;
const Welcome = styled.h2`
  font-size: 45px;
  font-weight: 700;
  line-height: 75px;
  margin: 0;
  @media (max-width: 991px) {
    font-size: 35px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 28px;
    margin: auto;
  }
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;
const Text = styled.p`
  color: ${LightTheme.GreyscaleSurfaceDisabled};
  font-size: 17px;
  font-weight: 500;
  line-height: 150%;
  text-align: justify;
  margin: 0;
  margin-top: 10px;

  @media (max-width: 767px) {
    text-align: center;
    font-size: 17px;
  }
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 767px) {
    width: 100%;

    #stack-logo {
      margin: 0px auto 20px;
    }
  }
`;
const Question = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-height: 25.5px;
  margin-top: 20px;

  @media (max-width: 991px) {
    font-size: 17px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const GreenText = styled.p`
  color: ${LightTheme.PrimarySurfaceLighter};
  font-weight: 500;
  font-size: 24px;
  margin-top: 10px;

  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const GreenLink = styled.a`
  color: ${LightTheme.PrimarySurfaceLighter};
  font-weight: 500;
  font-size: 24px;
  margin-top: 10px;

  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
  }
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 991px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
    align-items: flex-start;
  }
`;
const InputWrap = styled.div`
  border-radius: 4px;
  height: 55px;
  border-width: 3px;
  border-color: #6a7368;
  justify-content: space-between;
  padding: 0px, 16px, 0px, 16px;
  display: flex;
  padding: 5px;
  border-style: solid;
  margin-bottom: 20px;
  width: 33vw;

  @media (max-width: 1313px) {
    width: 45vw;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const TextAreaWrap = styled.div`
  border-radius: 4px;
  height: 200px;
  border-width: 3px;
  border-color: #6a7368;
  justify-content: space-between;
  padding: 0px, 16px, 0px, 16px;
  display: flex;
  padding: 5px;
  border-style: solid;
  margin-bottom: 20px;
  width: 33vw;

  @media (max-width: 1313px) {
    width: 45vw;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  color: #6a7368;
  font-weight: 400;
  line-height: 25.5px;
  font-size: 17px;
`;
const InputLabel = styled.label`
  color: #222522;
  font-size: 20px;
  margin-bottom: 0px;
`;
const TextArea = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  color: #6a7368;
  font-weight: 400;
  line-height: 25.5px;
  font-size: 17px;
  max-height: 200px;
  resize: none;
`;
const SocialIcon = styled.a`
  display: flex;
`;
const Column = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
const Subheader = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 130%;
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

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const initialFormData: IFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [error, setError] = useState<any | null>();
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const validator = useValidator();
  const { publicApi } = usePublicApi();

  const handleChange = (name: string, value: any) => {
    setError(null);
    var form = {
      ...formData,
      [name]: value,
    };
    setFormData(form);
  };

  const handleSubmit = () => {
    var errors = validateFields();
    console.log(errors);
    if (errors.name || errors.email || errors.message) {
      setError(errors);
    } else {
      setIsLoading(true);
      sendContactMessage(publicApi, formData)
        .then((result) => {
          alert(
            "Hello there! Thanks for reaching out! We've received your message and will get back to you as soon as possible."
          );
          setFormData(initialFormData);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const validateFields = () => {
    const errors: any = {};
    if (!formData.name) {
      errors.name = true;
    }
    if (!formData.email || !validator.validEmail(formData.email)) {
      errors.email = true;
    }
    if (!formData.message) {
      errors.message = true;
    }
    return errors;
  };

  return (
    <LandingPageLayout>
      <OddContainer>
        <img className="gridlines" src={gridlines} alt="gridlines" />
        <Container>
          <InnerContainer>
            <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInDown">
              <Welcome> Contact us✨</Welcome>
              <Text>
                We look forward to hearing from you and <br id="br-tag" />{" "}
                helping you achieve your trading goals
              </Text>
              {/* <Question >WANT TO CALL US?</Question>
                            <GreenText>SCHEDULE A CALL WITH US</GreenText> */}
              <Question>JUST WANT TO EMAIL US?</Question>
              <GreenLink href="mailto:support@algocipherquantitative.com">
                support@algocipherquantitative.com
              </GreenLink>
              <Stack direction={"row"} gap={3} sx={{ pt: 4 }} id="stack-logo">
                <SocialIcon
                  href="https://twitter.com/algo_Cipher"
                  target="_blank"
                >
                  <img src={XLogo} />
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/company/algocipher"
                  target="_blank"
                >
                  {" "}
                  <img src={LinkedinLogo} />{" "}
                </SocialIcon>
                <SocialIcon
                  href="https://web.facebook.com/algocipher"
                  target="_blank"
                >
                  <img src={FacebookLogo} />
                </SocialIcon>
                <SocialIcon
                  href="https://www.instagram.com/algo_cipher"
                  target="_blank"
                >
                  <img src={InstagramLogo} />
                </SocialIcon>
              </Stack>
            </AnimationOnScroll>
          </InnerContainer>

          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInUp" style={{width: "100%"}}>
            <InnerContainer>
              <InputSection>
                <InputLabel className={error?.name && "err-msg"}>
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Name
                  </span>{" "}
                  <span>*</span>
                </InputLabel>
                <InputWrap>
                  <User
                    size={20}
                    style={{
                      margin: "10px",
                      color: "#6A7368",
                    }}
                  />
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    autoFocus
                    placeholder="Enter Name"
                    aria-label="Email Name"
                    value={formData.name}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </InputWrap>
              </InputSection>
              <InputSection>
                <InputLabel className={error?.email && "err-msg"}>
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Email
                  </span>{" "}
                  <span>*</span>
                </InputLabel>
                <InputWrap>
                  <Envelope
                    size={20}
                    style={{
                      margin: "10px",
                      color: "#6A7368",
                    }}
                  />
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    autoFocus
                    placeholder="Enter Email"
                    aria-label="Email Email"
                    value={formData.email}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </InputWrap>
              </InputSection>
              <InputSection>
                <InputLabel className={error?.message && "err-msg"}>
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Message
                  </span>{" "}
                  <span>*</span>
                </InputLabel>
                <TextAreaWrap>
                  <TextArea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  ></TextArea>
                </TextAreaWrap>
              </InputSection>
              <Button
                className="submit-button"
                onClick={handleSubmit}
                disabled={isLoading}
                startIcon={
                  isLoading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : null
                }
              >
                <TitleBold>Send Us A Message</TitleBold>
              </Button>
            </InnerContainer>
          </AnimationOnScroll>
        </Container>
      </OddContainer>

      <EvenContainer>
        <Title>Our Services</Title>
        <Container>
          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInLeft">
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
                  algorithms/bits, tailored to the specific needs of each
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

          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInRight">
            <Column>
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
                  with various trading platforms, such as MetaTrader 4,
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
            </Column>
          </AnimationOnScroll>
        </Container>
      </EvenContainer>
    </LandingPageLayout>
  );
};

export default ContactPage;
