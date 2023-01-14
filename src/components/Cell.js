import React, { useRef } from "react";

export const Cell = (props) => {
  const cellRef = useRef("cell");
  // console.log("cell props");
  // console.log(props);

  let className =
    "cell" +
    (props.value.isRevealed ? "" : " hidden") +
    (props.value.isMine ? " is-mine" : "") +
    (props.value.isFlagged ? " is-flag" : "");

  const getColor = (number) => {
    switch (number) {
      case 1:
        return "#00B894";
      case 2:
        return "#0984E3";
      case 3:
        return "#D35400";
      case 4:
        return "#223DAA";
      case 5:
        return "#D63031";
      case 6:
        return "#8E44AD";
      case 7:
        return "#904323";
      case 8:
        return "#FC427B";
      default:
        return "black";
    }
  };

  const getValue = () => {
    if (!props.value.isRevealed) {
      return props.value.isFlagged ? "🇧🇩" : null;
    }
    if (props.value.isMine) {
      return "💣";
    }
    if (props.value.neighbour === 0) {
      return null;
    }
    return props.value.neighbour;
  };

  return (
    <div
      ref={cellRef}
      onClick={props.onClick}
      className={className}
      onContextMenu={props.cMenu}
      style={{
        color: getColor(props.value.neighbour),
        backgroundColor:
          props.mineCellColor && props.value.isMine && props.value.isRevealed
            ? "wheat"
            : "",
      }}
    >
      {getValue()}
    </div>
  );
};
