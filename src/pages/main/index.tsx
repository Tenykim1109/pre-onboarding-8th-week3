import React from "react";
import styled from "styled-components";
import Search from "../../components/Search";

function Main() {
  return (
    <StMain>
      <StWrapper>
        <Search />
      </StWrapper>
    </StMain>
  );
}

export default Main;

const StMain = styled.div`
  display: flex;
  background-color: #cae9ff;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  min-height: calc(100vh - 120px);
`;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`;
