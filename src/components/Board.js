import { useState } from "react";

const Board = (props) => {
  console.log("props");
  console.log(props);
  const [boardData, setBoardData] = useState({
    boardData: initBoardData(props.height, props.width, props.mines),
  });

  const [gameStatus, setGameStatus] = useState(false);
  const [mineCount, setMineCount] = useState(props.mines);

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
