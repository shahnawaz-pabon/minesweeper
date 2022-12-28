import { useState } from "react";

const Board = (props) => {
  console.log("props");
  console.log(props);
  const [boardData, setBoardData] = useState({
    boardData: initBoardData(props.height, props.width, props.mines),
  });

  const [gameStatus, setGameStatus] = useState(false);
  const [mineCount, setMineCount] = useState(props.mines);

  const initializeArray = (height, width) => {
    let data = [];
    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
        };
      }
    }
    return data;
  };

  // get random number given a dimension
  const getRandomNumber = (dimension) => {
    return Math.floor(Math.random() * 1000 + 1) % dimension;
  };

  const setMines = (data, height, width, mines) => {
    let randomX,
      randomY,
      minesPut = 0;
    while (minesPut < mines) {
      randomX = getRandomNumber(width);
      randomY = getRandomNumber(height);
      if (!data[randomX][randomY].isMine) {
        data[randomX][randomY].isMine = true;
        minesPut++;
      }
    }
    return data;
  };

  const initBoardData = (height, width, mines) => {
    return {};
  };

  const renderBoard = (data) => {};

  return (
    <div className="board">
      <div className="game-info">
        <span className="info">mines: {mineCount}</span>
        <br />
        <span className="info">{gameStatus}</span>
      </div>
      {renderBoard(boardData)}
    </div>
  );
};

export default Board;
