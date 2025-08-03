import { StartGap } from "../components/genericComponents/Gap";
import { ThinTitle } from "../components/genericComponents/Title";
import { SectionWrapper } from "../components/Common/Stylization";
import DownArrow from "../components/genericComponents/DownArrow";
function Student() {
  return (
    <>
      <StartGap />
      <SectionWrapper style={{ textAlign: "center", width: "80%;" }}>
        <ThinTitle>
          Welcome STUDENT to the <br />
          ProjectUX program
        </ThinTitle>
        <DownArrow />
      </SectionWrapper>
    </>
  );
}
export default Student;
