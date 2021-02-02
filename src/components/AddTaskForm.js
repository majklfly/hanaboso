import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/globalSlice";

const Field = styled(TextField)`
  width: 60%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px lightgrey;
`;

export const AddTaskForm = () => {
  // form updating the store with a new task
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const submitTask = () => {
    // updating store with new value {[datenow]: [input]}, cleaning Text Field
    const date = Date.now();
    dispatch(addTask({ id: date, data: input }));
    setInput("");
  };
  return (
    <Form>
      <Field
        label="Type here"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button onClick={() => submitTask()}>Add Task</Button>
    </Form>
  );
};
