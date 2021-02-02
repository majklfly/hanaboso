import React from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

import { useDispatch } from "react-redux";
import { removeTask } from "../redux/slices/globalSlice";

const StyledDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  width: 300px;
  height: fit-content;
  position: relative;
  margin: 3%;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  position: relative;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
  }
`;

export const CustomCard = ({ id, content }) => {
  // card containing the task
  const dispatch = useDispatch();

  const dateConverter = () => {
    const date = new Date(parseInt(id));
    return date.toDateString();
  };

  return (
    <StyledCard>
      <CardContent>{content}</CardContent>
      <StyledCardActions>
        <div>
          <StyledDeleteIcon onClick={() => dispatch(removeTask({ id }))} />
        </div>
        <div>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <p>{dateConverter()}</p>
        </div>
      </StyledCardActions>
    </StyledCard>
  );
};
