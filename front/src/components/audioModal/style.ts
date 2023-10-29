import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #777777cc;
  font-family: "Roboto", sans-serif;
  > div {
    background-color: blue;
    color: white;
    min-width: 160px;
    min-height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
  }
`;
const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px;
  button {
    border-radius: 6px;
  }
`;

const style = {
  Container,
  Options,
};

export default style;
