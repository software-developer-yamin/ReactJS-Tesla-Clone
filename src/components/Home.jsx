import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model-S"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exiting Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
