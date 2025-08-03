import styled from "styled-components";

const CardBox = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  width: 370px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;
const Icon = styled.div`
  position: absolute;
  color: white;
  margin-bottom: 30px;
  transform: translate(0%, -50%);
  transition: transform 0.3s ease;

  ${CardBox}:hover & {
    transform: translate(0%, -150%) scale(0.6);
  }
`;
const Text = styled.p`
  visibility: hidden; /* hides but keeps space */
  opacity: 0; /* fully transparent */
  font-size: 1.5rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  transform: translateY(10px); /* slight movement */
  transition: opacity 0.5s ease, transform 0.5s ease, visibility 0.5s ease;

  ${CardBox}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateY(10px); /* slides up smoothly */
  }
`;
interface ICard {
  icon?: React.ReactNode; //you can insert Fontawesome component!
  text?: string;
}
function Card({ icon, text }: ICard) {
  return (
    <CardBox>
      {icon && <Icon>{icon}</Icon>}
      {text && <Text>{text}</Text>}
    </CardBox>
  );
}

export default Card;
