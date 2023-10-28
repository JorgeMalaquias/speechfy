import styled from "styled-components";

const Container = styled.div<{ newaudiourl: string }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.newaudiourl !== "" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #777777cc;
  font-family: "Roboto", sans-serif;
`;

const style = {
  Container,
};

export default style;
