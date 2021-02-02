import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { CustomCard } from "../components/CustomCard";

const Container = styled.section`
  width: "100%";
  height: auto;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const TasksContainer = () => {
  // container containing all tasks
  const state = useSelector((state) => state.globalReducer);

  console.log(state);
  return (
    <Container>
      {Object.keys(state).map((key, index) => {
        return <CustomCard id={key} content={state[key]} key={index} />;
      })}
    </Container>
  );
};
