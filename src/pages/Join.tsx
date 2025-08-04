import {
  EndGap,
  StartGap,
  SectionGap,
} from "../components/genericComponents/Gap";
import {
  SectionWrapper,
  TitleContainer,
} from "../components/Common/Stylization";
import DownArrow from "../components/genericComponents/DownArrow";
import {
  Title,
  ThinTitle,
  AccentPosition,
} from "../components/genericComponents/Title";
import {
  Description,
  CardDescription,
} from "../components/genericComponents/Description";
import { CardGrid } from "../components/Common/Stylization";
import { CardG, LargeCard } from "../components/genericComponents/Card";
import { MApplyBtn } from "../components/genericComponents/Buttons";

import styled from "styled-components";
const CardJoin = styled(LargeCard)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 100px;
  padding-top: 100px;
`;
const JoinBtn = styled(MApplyBtn)`
  font-size: var(--font-size-xs);
`;

const JoinSection = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.08);
  align-items: center;
  width: 80%;
  height: 570px;
  padding: 100px;
  border-radius: 20px;
  color: white;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2),
    -1px -1px 1px rgba(255, 255, 255, 0.2);
  position: relative;
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* ensures left alignment */
  position: absolute;
`;

const RightImage = styled.img`
  width: 500px;
  height: auto;
  position: absolute;
  right: -50px;
  top: -50px;
`;

function Join() {
  return (
    <>
      {" "}
      <StartGap />
      <SectionWrapper>
        <JoinSection>
          <LeftContent>
            <ThinTitle style={{ textAlign: "left" }}>
              Entering the UTS <br />
              community with a <br />
              <AccentPosition color="var(--green)">BANG</AccentPosition>!
            </ThinTitle>
            <CardDescription style={{ textAlign: "left", paddingLeft: "0px" }}>
              Be a part of the future designers’ community <br />
              and become a member of our society!
            </CardDescription>
            <a
              href="https://www.activateuts.com.au/clubs/uxidsoc/"
              target="_blank"
            >
              <JoinBtn
                width={190}
                height={50}
                borderRadius={50}
                style={{
                  marginTop: "10px",
                  // position: "relative",
                  // left: "-80px",
                }}
                innerShadowColor="#f5f0f0"
                innerShadowBlur={0}
                innerShadowSpread={-5}
                glassTintColor="rgba(249, 248, 248, 0.127)"
                glassTintOpacity={0}
                frostBlurRadius={6}
                noiseFrequency={0.008}
                noiseStrength={77}
              >
                Become A Member Today!
              </JoinBtn>
            </a>
          </LeftContent>
          <RightImage src="../src/assets/img/logo.png" alt="UXID_logo" />
        </JoinSection>

        <DownArrow />
      </SectionWrapper>
      {/* <SectionWrapper>
        <CardJoin style={{ height: "570px", width: "80%" }}>
          <ThinTitle style={{ textAlign: "left", width: "50%" }}>
            Entering the UTS <br />
            community with a <br />
            <AccentPosition color="var(--green)">BANG</AccentPosition>!
          </ThinTitle>
          <CardDescription style={{ textAlign: "left", padding: "0px" }}>
            Be a part of the future designers’ community <br />
            and become a member of our society!
          </CardDescription>
        </CardJoin>

        <DownArrow />
      </SectionWrapper> */}
      <SectionGap />
      {/* Our Origin Section */}
      <SectionWrapper style={{ gap: "10px" }}>
        <TitleContainer>
          <Title>OUR ORIGINS</Title>
          <Description>
            It all started when our amazing founder Amelinda Jessica Mang had a
            vision
          </Description>
        </TitleContainer>
        <LargeCard>
          <CardDescription>
            She wanted to explore avenues of design. Specifically in tech.
            <br />
            <br />
            During this search she and many other students noticed the lack of
            opportunities for University students to explore the avenues of user
            experience & Interaction design at UTS. <br />
            <br />
            So began the journey of UXID. Bringing the opportunities for
            students and likeminded people to explore & connect. 
          </CardDescription>
        </LargeCard>
      </SectionWrapper>
      <SectionGap />
      <SectionGap />
      {/* what can you get section */}
      <SectionWrapper style={{ gap: "5px" }}>
        <TitleContainer style={{ marginBottom: "10px" }}>
          <Title>WHAT YOU CAN GET</Title>
          <Description>Benefits from joining our awesome society</Description>
        </TitleContainer>
        <CardGrid>
          <CardG>
            <CardDescription>
              Join awesome social events where you can relax, have fun, and make
              new friends
            </CardDescription>
          </CardG>
          <CardG>
            <CardDescription>
              Be able to join the amazing ProjectUX program and enhance your
              portfolio
            </CardDescription>
          </CardG>
          <CardG>
            <CardDescription>
              Make connections with industry speakers and improve your
              networking skills
            </CardDescription>
          </CardG>
          <CardG>
            <CardDescription>
              Join our industry events and learn more about the world of
              interaction design
            </CardDescription>
          </CardG>
        </CardGrid>
      </SectionWrapper>
      <EndGap />
    </>
  );
}
export default Join;
