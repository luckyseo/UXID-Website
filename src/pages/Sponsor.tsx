import {
  TitleContainer,
  SectionWrapper,
} from "../components/Common/Stylization";
import Description from "../components/genericComponents/Description";
import { StartGap } from "../components/genericComponents/Gap";
import { Title } from "../components/genericComponents/Title";
function Sponsor() {
  return (
    <>
      <StartGap />
      <SectionWrapper>
        <TitleContainer style={{ width: "70%" }}>
          <Title style={{ marginBottom: "50px" }}>We're Looking for you</Title>
          <Description>
            Though our program and our events provide amazing services, the only
            way we can keep hosting them is through collecting enough funds as
            we don’t take any money from our clients in order to provide
            students with the best learning experience possible. But YOU can
            help that.
            <br />
            <br />
            Contact us now to see how we can help your company get across to a
            large network of students!
          </Description>
        </TitleContainer>
      </SectionWrapper>
    </>
  );
}
export default Sponsor;
