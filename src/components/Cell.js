import React from "react";

const Cell = (props) => {
  let className =
    "cell" +
    (props.value.isRevealed ? "" : " hidden") +
    (props.value.isMine ? " is-mine" : "") +
    (props.value.isFlagged ? " is-flag" : "");

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
      ref="cell"
      onClick={props.onClick}
      className={className}
      onContextMenu={props.cMenu}
    >
      {getValue()}
    </div>
  );
};

export default Cell;
