import "./board.css";
import React, { useState } from "react";
import { Card, Grid, CardContent } from "@material-ui/core";
import bingoItems from "./bingo_items.json";
import { styled } from "@material-ui/core";

const BingoItem = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "250px",
  height: "200px",
  background: "linear-gradient(45deg, #FE6B8B50 30%, #FF8E5360 90%)",
  color: "white",
  fontSize: "16px",
});

const CompletedItem = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "250px",
  height: "200px",
  background: "linear-gradient(45deg, #87CEEB50 30%, #78BFDC60 90%)",
  color: "white",
  fontSize: "16px",
});

function Board(props) {
  let initialStates = initStates(9);
  let [state, setState] = useState(initialStates);

  const title = () => {
    return <div className="bingo-title">{props.title}</div>;
  };

  const markComplete = (e) => {
    const id = e.target.id;
    initialStates[id] = !initialStates[id];
    setState(initialStates);
    initialStates = [...state];
  };

  const bingoRow = (row) => {
    let renderRow;
    switch (row) {
      case 1:
        renderRow = bingoItems.slice(0, 3);
        break;
      case 2:
        renderRow = bingoItems.slice(3, 6);
        break;
      case 3:
        renderRow = bingoItems.slice(6, 9);
        break;
      default:
        renderRow = bingoItems.slice(0, 3);
    }

    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={3}
      >
        {renderRow.map((item) => {
          if (state[item.id] === true) {
            return (
              <Grid
                item
                xs={3}
                key={item.id}
                id={item.id}
                onClick={markComplete}
              >
                <CompletedItem id={item.id} onClick={markComplete}>
                  <CardContent id={item.id} onClick={markComplete}>
                    {item.item}
                  </CardContent>
                </CompletedItem>
              </Grid>
            );
          } else {
            return (
              <Grid
                item
                xs={12} sm={6} md={3}
                key={item.id}
                id={item.id}
                onClick={markComplete}
              >
                <BingoItem id={item.id}>
                  <CardContent id={item.id} onClick={markComplete}>
                    {item.item}
                  </CardContent>
                </BingoItem>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  };

  return (
    <>
      {title()}
      {bingoRow(1)}
      {bingoRow(2)}
      {bingoRow(3)}
    </>
  );
}

function initStates(num_states) {
  let states = [];
  for (let i = 0; i < num_states; i++) {
    states.push(false);
  }
  return states;
}
export default Board;
