import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { LightTheme } from "../../theme";
import { TextInput } from "../../components/Shared/Inputs";
import Plane from "../../assets/images/Plane.svg";
import {
  MessengerLogo,
  CaretRight,
  PaperPlaneRight,
  Envelope,
  FastForward,
} from "phosphor-react";
import { CircularProgress, IconButton, Stack } from "@mui/material";
import { TitleSemibold, BodyRegular, LinksSmall } from "../Shared/Texts";
import { AnimationOnScroll } from "react-animation-on-scroll";

// assets
import FloatingPhone from "../../assets/images/LottifileFloatingPhone.svg";
import alc from "../../assets/images/alc.svg";
import Mail from "../../assets/images/Mail.svg";
import Tel from "../../assets/images/Tel.svg";
import HandBag from "../../assets/images/HandBag.svg";
import alcIcon from "../../assets/images/side-icon.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import computerAnimation from "../../assets/animations/customerSupport.json";
import gridlines from "../../assets/images/gridlines.svg";
import useValidator from "../../hooks/useValidator";
import "./index.css";
import { joinWaitlist } from "../../services/api/publicApi";
import usePublicApi from "../../hooks/api/usePublicApi";

// import dashboard from "../../assets/images/dashboard.svg";

type PWaitlistProps = {
  bgColor: string;
  type: "first" | "second" | "both";
};

const Wrapper = styled.section`
  padding: 50px 0;
  position: relative;

  .spacer {
    padding-left: 80px;
  }
  input::placeholder {
    font-size: 20px;
  }
  .gridlines {
    position: absolute;
    top: 30px;
    right: 0px;
    cursor: default;

    @media (min-width: 768px) and (max-width: 991px) {
      height: 95%;
    }
    @media (max-width: 767px) {
      top: 0;
      right: -50%;
    }
  }

  @media (max-width: 992px) {
    #br-tag {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .spacer {
      padding-left: 0;
    }
    input {
      margin-left: -20px;
      margin-bottom: 5px;
    }
    input::placeholder {
      font-size: 14px;
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

  @media (min-width: 992px) and (max-width: 1313px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 767px) {
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
  @media (max-width: 767px) {
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
const Flexi = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -70px;

  @media (max-width: 767px) {
    margin-top: -40px;
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
    font-size: 20px;
  }
`;
const SmallText = styled.p`
  color: var(--GreyscaleTextIconBody);
  font-size: 17px;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 767px) {
    text-align: justify;
  }
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
    font-size: 25px;
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
  margin: 25px auto;

  @media (max-width: 767px) {
    width: 90vw;
`;
const ImgContainer = styled.div`
  background-color: var(--Grey50);
  padding: 30px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 20px;
  }
`;
const Alcicon = styled.img`
  position: absolute;
  top: 0;
  left: 3%;
  width: 1.75%;

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
  width: 1.75%;
  transform: rotate(180deg);

  @media (max-width: 1313px) {
    width: 2%;
    left: 2%;
    top: 15%
  }
  @media (max-width: 767px) {
    display: none
`;

const PWaitlist = ({ bgColor, type }: PWaitlistProps) => {
  const validator = useValidator();
  const { publicApi } = usePublicApi();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const canJoinWaitlist = useMemo(
    () => email && validator.validEmail(email.trim()),
    [email]
  );

  const handleJoinWaitList = () => {
    if (!email || !validator.validEmail(email.trim())) {
      return;
    }
    setIsLoading(true);
    joinWaitlist(publicApi, email.trim())
      .then((result) => {
        alert(
          "Fantastic! You're officially on our waitlist. Get ready for exclusive updates and be the first to know. Your patience is appreciated, and we can't wait to share the excitement with you!"
        );
        setEmail("");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      {type === "both" && (
        <img className="gridlines" src={gridlines} alt="gridlines" />
      )}
      <article
        style={{
          display: type === "first" || type === "both" ? "block" : "none",
        }}
      >
        <Alcicon src={alcIcon} alt="alcicon" />
        <Alcicon2 src={alcIcon} alt="alcicon" />
        <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeIn">
          <Subcontainer>
            <Subheader>OUR PLATFORM</Subheader>
            <SmallText>
              Elevate your algorithmic trading ideas with our user-friendly web
              platform. <br />
              Engage in direct messaging, and schedule calls effortlessly,{" "}
              <br />
              all in one place—empowering you to transform your ideas into
              reality.
            </SmallText>
          </Subcontainer>
        </AnimationOnScroll>

        <Container style={{ marginTop: "30px" }}>
          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInLeft">
            <Stack flexDirection={"column"} alignItems={"center"}>
              <Player
                src={computerAnimation}
                autoplay
                loop
                style={{
                  width: "90%",
                }}
              />
              <Btns href="#waitlist">
                Get started
                <CaretRight weight="bold" />
              </Btns>
            </Stack>
          </AnimationOnScroll>

          <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInRight">
            <Stack flexDirection={"column"} alignItems={"flex-start"}>
              <Flex style={{ columnGap: 20 }}>
                <ImgContainer>
                  <img src={Mail} width={48} height={48} />
                </ImgContainer>

                <Stack direction={"column"}>
                  <TitleSemibold sx={{ color: "var(--GreyscaleTextIconBody)" }}>
                    DIRECT MESSAGING
                  </TitleSemibold>
                  <BodyRegular sx={{ color: "var(--GreyscaleTextIconBody)" }}>
                    Reach out effortlessly through our direct messaging feature.{" "}
                    <br /> We're here to assist you with a quick and
                    personalized response.
                  </BodyRegular>
                </Stack>
              </Flex>

              <Flex>
                <div className="spacer" />
                <Flex style={{ columnGap: 20 }}>
                  <ImgContainer>
                    <img src={Tel} width={48} height={48} />
                  </ImgContainer>

                  <Stack direction={"column"}>
                    <TitleSemibold
                      sx={{ color: "var(--GreyscaleTextIconBody)" }}
                    >
                      SCHEDULE CALLS
                    </TitleSemibold>
                    <BodyRegular sx={{ color: "var(--GreyscaleTextIconBody)" }}>
                      Experience seamless communication with our scheduling
                      feature! <br /> Effortlessly arrange a call and connect
                      with us at your convenience.{" "}
                    </BodyRegular>
                  </Stack>
                </Flex>
              </Flex>

              <Flexi style={{ columnGap: 20 }}>
                <ImgContainer>
                  <img src={HandBag} width={48} height={48} />
                </ImgContainer>
                <Stack direction={"column"}>
                  <TitleSemibold sx={{ color: "var(--GreyscaleTextIconBody)" }}>
                    PROJECT MANAGEMENT
                  </TitleSemibold>
                  <BodyRegular sx={{ color: "var(--GreyscaleTextIconBody)" }}>
                    We offer services for building and editing trading
                    <br id="br-tag" /> algorithms/bots tailored to the specific needs of each
                    client.{" "}
                  </BodyRegular>
                </Stack>
              </Flexi>
            </Stack>
          </AnimationOnScroll>
        </Container>
      </article>

      <article
        id="waitlist"
        style={{
          display: type === "second" || type === "both" ? "block" : "none",
        }}
      >
        <AnimationOnScroll animateOnce delay={200} animateIn={"animate__shakeX"}>
          <Subcontainer style={{ padding: "50px 0" }}>
            <Flex>
              <Subheader>JOIN OUR WAITLIST</Subheader>
              <img src={alc} alt="alc" id="abt-alc" />
            </Flex>
            <Text>
              Stay in the know with our latest updates, exclusive offers, and
              valuable insights delivered right to your inbox. Leave your email
              today to join our newsletter community and never miss out on
              what's happening.
            </Text>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                border: "solid black 3px",
                borderRadius: "5px",
                p: 1,
                width: "100%",
              }}
              gap={2}
            >
              <IconButton
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "4px",
                  cursor: "default",
                }}
              >
                <Envelope
                  size={35}
                  weight="fill"
                  color={LightTheme.ButtonsSurfacePrimary}
                  cursor="default"
                />
              </IconButton>
              <TextInput
                placeholder="ENTER EMAIL ADDRESS"
                sx={{ width: "100%", zIndex: "1" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleJoinWaitList();
                  }
                }}
              />
              <IconButton
                onClick={handleJoinWaitList}
                className="join-waitlist"
                disabled={!canJoinWaitlist}
              >
                {isLoading ? (
                  <CircularProgress size={30} color="inherit" />
                ) : (
                  <PaperPlaneRight size={30} weight="fill" color="#fff" />
                )}
              </IconButton>
            </Stack>
          </Subcontainer>
        </AnimationOnScroll>
      </article>
    </Wrapper>
  );
};

export default PWaitlist;
