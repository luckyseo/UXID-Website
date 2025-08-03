import { EndGap, StartGap } from "../components/genericComponents/Gap";
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
import { SectionGap } from "../components/genericComponents/Gap";
import { CardGrid } from "../components/Common/Stylization";
import { CardG } from "../components/genericComponents/Card";

function Join() {
  return (
    <>
      {" "}
      <SectionGap />
      <SectionWrapper style={{ gap: "5px" }}>
        <TitleContainer style={{ marginBottom: "10px" }}>
          <Title>BENEFIT</Title>
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
export default Join;
