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
import { Title, ThinTitle } from "../components/genericComponents/Title";
import {
  Description,
  CardDescription,
} from "../components/genericComponents/Description";
import { CardGrid } from "../components/Common/Stylization";
import {
  CardG,
  CardBox,
  LargeCard,
} from "../components/genericComponents/Card";
import styled from "styled-components";

function Join() {
  return (
    <>
      {" "}
      <StartGap />
      <SectionWrapper>
        <DownArrow />
      </SectionWrapper>
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
