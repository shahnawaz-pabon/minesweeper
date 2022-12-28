import { useState } from "react";
import Board from "./Board";

export const Game = () => {
  const [height, setHeight] = useState(8);
  const [width, setWidth] = useState(8);
  const [mines, setMines] = useState(10);

  return (
    <div className="game">
      <Board height={height} width={width} mines={mines} />
    </div>
  );
};
