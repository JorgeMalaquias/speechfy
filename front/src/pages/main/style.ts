import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 16px;
  height: 100%;
  min-width: 250px;
  margin-top: 120px;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100px;
    > textarea {
      width: 100%;
      height: 70px;
      border-radius: 6px;
    }
  }
  font-family: "Roboto", sans-serif;
`;

const UserOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    margin-bottom: 10px;
  }
  margin-bottom: 40px;
`;
const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 4px;
  margin-bottom: 10px;
`;
const LeaveSessionModal = styled.div`
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
    background-color: white;
    min-width: 100px;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
  }
`;
const ConfirmButtons = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const ConfirmButton = styled.button<{ yesbutton: boolean }>`
  border-radius: 6px;
  background-color: ${(props) => (props.yesbutton ? "green" : "red")};
  color: white;
  min-width: 66px;
  min-height: 20px;
`;

const style = {
  Container,
  UserOptions,
  UserInfos,
  LeaveSessionModal,
  ConfirmButton,
  ConfirmButtons,
};

export default style;
