import { useEffect, useRef, useState } from "react";

import { Cell } from "./Cell";
const Board = (props) => {
  console.log("props");
  console.log(props);

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

  const getRandomPosition = (dimension) => {
    return Math.floor(Math.random() * 1000 + 1) % dimension;
  };

  const setMines = (data, height, width, mines) => {
    let randomX,
      randomY,
      totalMinesPlaced = 0;
    while (totalMinesPlaced < mines) {
      randomX = getRandomPosition(width);
      randomY = getRandomPosition(height);
      if (!data[randomX][randomY].isMine) {
        data[randomX][randomY].isMine = true;
        totalMinesPlaced++;
      }
    }
    return data;
  };

  // looks for neighbouring cells and returns them
  const traverseBoard = (x, y, data) => {
    const el = [];
    //up
    if (x > 0) {
      el.push(data[x - 1][y]);
    }
    //down
    if (x < props.height - 1) {
      el.push(data[x + 1][y]);
    }
    //left
    if (y > 0) {
      el.push(data[x][y - 1]);
    }
    //right
    if (y < props.width - 1) {
      el.push(data[x][y + 1]);
    }
    // top left
    if (x > 0 && y > 0) {
      el.push(data[x - 1][y - 1]);
    }
    // top right
    if (x > 0 && y < props.width - 1) {
      el.push(data[x - 1][y + 1]);
    }
    // bottom right
    if (x < props.height - 1 && y < props.width - 1) {
      el.push(data[x + 1][y + 1]);
    }
    // bottom left
    if (x < props.height - 1 && y > 0) {
      el.push(data[x + 1][y - 1]);
    }
    return el;
  };

  const getNeighbours = (data, height, width) => {
    let updatedData = data;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (data[i][j].isMine !== true) {
          let mine = 0;
          const area = traverseBoard(data[i][j].x, data[i][j].y, data);
          area.map((value) => {
            if (value.isMine) {
              mine++;
            }
          });
          if (mine === 0) {
            updatedData[i][j].isEmpty = true;
          }
          updatedData[i][j].neighbour = mine;
        }
      }
    }
    return updatedData;
  };

  const initBoardData = (height, width, mines) => {
    let data = initializeArray(height, width);
    data = setMines(data, height, width, mines);
    data = getNeighbours(data, height, width);

    return data;
  };

  const [boardData, setBoardData] = useState(
    initBoardData(props.height, props.width, props.mines)
  );

  const [gameStatus, setGameStatus] = useState(false);
  const [mineCount, setMineCount] = useState(props.mines);

  const performCellClick = (x, y) => {
    console.log("Cell clicked");
  };

  const performContextMenu = (event, x, y) => {
    console.log("Right button clicked on the cell");
  };

  const renderBoard = (data) => {
    return (
      <div>
        {data.map((datarow) => {
          return (
            <>
              {datarow.map((dataitem) => {
                return (
                  <div key={dataitem.x * datarow.length + dataitem.y}>
                    <Cell
                      onClick={() => performCellClick(dataitem.x, dataitem.y)}
                      cMenu={(e) =>
                        performContextMenu(e, dataitem.x, dataitem.y)
                      }
                      value={dataitem}
                    />
                    {datarow[datarow.length - 1] === dataitem ? (
                      <div className="clear" />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    );
  };

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
