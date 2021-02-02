import React from "react";
import styled from "styled-components";

import { AddTaskForm } from "../components/AddTaskForm";

const Container = styled.section`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddTaskContainer = () => {
  return (
    <Container>
      <AddTaskForm />
    </Container>
  );
};
