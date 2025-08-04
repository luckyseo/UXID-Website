import {
  StartGap,
  SectionGap,
  EndGap,
} from "../components/genericComponents/Gap";
import {
  ThinTitle,
  AccentPosition,
} from "../components/genericComponents/Title";
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
import Question from "../components/Question";
import Tree from "../components/Tree";
function Mentor() {
    const myEvents = [
  { date: '19 August 2025', title: 'Induction Day', tick: true },
  { date: '2 September 2025', title: 'First Workshop', tick: false },
  { date: '16 September 2025', title: 'Second Workshop', tick: false },
  { date: '30 September 2025', title: 'Third Workshop', tick: false },
  { date: '7 October 2025', title: 'Pitch Practice Day', tick: false },
  { date: '14 October 2025', title: 'Competition Day', tick: true },
];
  return (
    <>
      <StartGap />
      <SectionGap />
      <SectionWrapper style={{ textAlign: "center", width: "80%;" }}>
        <ThinTitle>
          Welcome <AccentPosition color="var(--green)">Mentor</AccentPosition>{" "}
          to the <br />
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
        <SectionGap />
      </SectionWrapper>
         <SectionWrapper style={{ gap: "5px" }}>
        <TitleContainer>
          <Title style={{ marginBottom: "25px" }}>PROGRAM TIMELINE (SPRING SEMESTER 2025)</Title>
          <Description>The program will be 8 weeks and commitment varies on team agreement, mentors must attend the induction and competition day, workshops are optional</Description>
        </TitleContainer>
        
      </SectionWrapper>
      <Tree />
      <SectionGap />
      <SectionGap />
      <SectionGap />
      <SectionGap />
      <SectionGap />
       <SectionWrapper style={{ gap: "5px" }}>
        
        <Question></Question>
      </SectionWrapper>
      <EndGap />
    </>
  );
}
export default Mentor;
