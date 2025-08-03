import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;
const Desription = styled.p``;
function Sponsor() {
  return (
    <Container>
      <Title>We're Looking for you</Title>
      <Desription>
        Though our program and our events provide amazing services, the only way
        we can keep hosting them is through collecting enough funds as we don’t
        take any money from our clients in order to provide students with the
        best learning experience possible. But YOU can help that.
        <br />
        Contact us now to see how we can help your company get across to a large
        network of students!
      </Desription>
    </Container>
  );
}
export default Sponsor;
