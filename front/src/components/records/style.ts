import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  height: 100%;
  padding: 16px;
  margin-top: 120px;
  h1 {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  font-family: "Roboto", sans-serif;
  padding: 10px 16px;
  p {
    padding: 0 20px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const style = {
  Container,
  RecordContainer,
};
export default style;
