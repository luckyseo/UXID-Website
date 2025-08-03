import {
  StartGap,
  SectionGap,
  EndGap,
} from "../components/genericComponents/Gap";
import { ThinTitle } from "../components/genericComponents/Title";
import {
  SectionWrapper,
  TitleContainer,
} from "../components/Common/Stylization";
import DownArrow from "../components/genericComponents/DownArrow";
import { Title } from "../components/genericComponents/Title";
import { CardGrid } from "../components/Common/Stylization";
import { CardG } from "../components/genericComponents/Card";
import {
  Description,
  CardDescription,
} from "../components/genericComponents/Description";
function Mentor() {
  return (
    <>
      <StartGap />
      <SectionGap />
      <SectionWrapper style={{ textAlign: "center", width: "80%;" }}>
        <ThinTitle>
          Welcome Mentor to the <br />
          ProjectUX program
        </ThinTitle>

        <DownArrow />
      </SectionWrapper>
      <SectionGap />
      <SectionGap />

      <SectionWrapper>
        <TitleContainer>
          <Title style={{ marginBottom: "30px" }}>WHAT IS PROJECTUX?</Title>
          <Description>
            ProjectUX is an 8-week program for students at the University of
            Technology Sydney created by the UTS UXID Society. Targeting those
            who take a degree related to interaction design or have an interest
            in pursuing a career in Interaction Design and need a project for
            their portfolio. It also aims to help businesses large and small
            with their design problems, giving a fresh perspective of a solution
            from the future generation of designers.
          </Description>
        </TitleContainer>
      </SectionWrapper>
      <SectionGap />
      <SectionGap />
      <SectionWrapper style={{ gap: "5px" }}>
        <TitleContainer>
          <Title style={{ marginBottom: "10px" }}>BENEFIT</Title>
          <Description>How can ProjectUX help you?</Description>
        </TitleContainer>
        <CardGrid>
          <CardG>
            <CardDescription>
              By providing you with a full project that can enhance your resume
              and portfolio
            </CardDescription>
          </CardG>
          <CardG>
            <CardDescription>
              By giving you soft and technical skills through our workshops, as
              well as advice from industry professionals
            </CardDescription>
          </CardG>
          <CardG>
            <CardDescription>
              By giving you opportunities to network with like-minded people as
              well as industry professionals, expanding your knowledge on where
              your degree can take you
            </CardDescription>
          </CardG>
          <CardG>
            <CardDescription>
              By giving you an experience to prepare you for your transition
              from Uni to the real world
            </CardDescription>
          </CardG>
        </CardGrid>
      </SectionWrapper>
      <EndGap />
    </>
  );
}
export default Mentor;
