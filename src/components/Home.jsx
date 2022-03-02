import styled from "styled-components";
import Section from "./Section";

const data = [
  {
    id: 0,
    title: "Model S",
    description: "Order Online For Touchless Delivery",
    backgroundImg: "model-s.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Exiting Inventory",
  },
  {
    id: 1,
    title: "Model Y",
    description: "Order Online For Touchless Delivery",
    backgroundImg: "model-y.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Exiting Inventory",
  },
  {
    id: 2,
    title: "Model 3",
    description: "Order Online For Touchless Delivery",
    backgroundImg: "model-3.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Exiting Inventory",
  },
  {
    id: 3,
    title: "Model X",
    description: "Order Online For Touchless Delivery",
    backgroundImg: "model-x.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Exiting Inventory",
  },
  {
    id: 4,
    title: "Lowest Cost Solar Panels in America",
    description: "Money-back guarantee",
    backgroundImg: "solar-panel.jpg",
    leftBtnText: "Order Now",
    rightBtnText: "Lead More",
  },
  {
    id: 5,
    title: "Accessories",
    description: "",
    backgroundImg: "accessories.jpg",
    leftBtnText: "Shop Now",
  },
];

function Home() {
  return (
    <Container>
      {data.map((details) => (
        <Section key={details.id} details={details} />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
