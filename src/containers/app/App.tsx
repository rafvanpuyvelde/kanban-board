import React from "react";
import "./App.css";
import styled from "styled-components";

import { Typography } from "antd";
import Board from "../board/Board";
const { Title } = Typography;

export const App = () => {
  return (
    <DashboardWrapper>
      <DashboardTitle>Dashboard</DashboardTitle>
      <Board />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  height: 100vh;
  width: 85%;
  margin: 0 auto;
`;

const DashboardTitle = styled(Title)`
  padding: 1.5rem 0 0 0;
`;

export default App;
