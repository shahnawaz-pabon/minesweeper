import { useState } from "react";

const Board = (props) => {
  const [boardData, setBoardData] = useState({
    boardData: initBoardData(props.height, props.width, props.mines),
  });

  const initBoardData = (height, width, mines) => {};

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
// Type checking With PropTypes
Board.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  mines: PropTypes.number,
};
