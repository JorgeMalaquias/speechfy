import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: blue;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  color: white;
  padding: 10px;
  z-index: 5;
`;

const style = {
  Header,
};

export default style;
