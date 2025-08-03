import { StartGap } from "../components/genericComponents/Gap";
import { SectionWrapper } from "../components/Common/Stylization";
import DownArrow from "../components/genericComponents/DownArrow";
import { ThinTitle } from "../components/genericComponents/Title";
function Client() {
  return (
    <>
      <StartGap />
      <SectionWrapper style={{ textAlign: "center", width: "80%;" }}>
        <ThinTitle>
          Welcome CLIENT to the <br />
          ProjectUX program
        </ThinTitle>
        <DownArrow />
      </SectionWrapper>
    </>
  );
}
export default Client;
