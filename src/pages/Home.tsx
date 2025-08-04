import styled from "styled-components";
import HomeLogo from "../components/Home/HomeLogo";
import Card from "../components/genericComponents/Card";
import { Description } from "../components/genericComponents/Description";
import { Title } from "../components/genericComponents/Title";
import {
  TitleContainer,
  SectionWrapper,
} from "../components/Common/Stylization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBrain,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { EndGap, SectionGap } from "../components/genericComponents/Gap";
import CardSelection from "../components/Home/CardSelection";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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
      <SectionGap />
      <SectionGap />
      <SectionWrapper>
        <TitleContainer>
          <Title>CHOOSE WHO YOU ARE</Title>
          <Description>your goals and what you’re passionate about</Description>
        </TitleContainer>
      </SectionWrapper>
      <SectionWrapper>

        <CardSelection></CardSelection>
      </SectionWrapper>
      
      <EndGap />
    </>
  );
};

export default Home;
