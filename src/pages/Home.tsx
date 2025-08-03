import styled from "styled-components";
import HomeBanner from "../components/Home/HomeBanner";
import HomeLogo from "../components/Home/HomeLogo";
import Card from "../components/genericComponents/Card";
import Description from "../components/genericComponents/Description";
import Title from "../components/genericComponents/Title";
import { TitleContainer } from "../components/Common/Stylization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBrain,
  faBriefcase,
  faClock,
  faHeadSideMask,
} from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const SectionWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Home = () => {
  return (
    <>
      <HomeLogo />
      <SectionWrapper>
        <TitleContainer>
          <Title>OUR GOALS</Title>
          <Description>
            helping the interaction designers of tomorrow
          </Description>
        </TitleContainer>
        <CardContainer>
          <Card
            icon={<FontAwesomeIcon icon={faBriefcase} size={"4x"} />}
            text="To enhance the interaction designers of tomorrow’s portfolios by providing them with design projects from clients"
          />
          <Card
            icon={<FontAwesomeIcon icon={faArrowUp} size={"4x"} />}
            text="To help students improve their soft and technical skills through carefully thought-out workshops"
          />
          <Card
            icon={<FontAwesomeIcon icon={faBrain} size={"4x"} />}
            text="To provide an opportunity where students can ideate, cooperate, network, and improve themselves"
          />
        </CardContainer>
      </SectionWrapper>

      <HomeBanner></HomeBanner>
    </>
  );
};

export default Home;
