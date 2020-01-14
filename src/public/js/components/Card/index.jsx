import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export default function Card({ expressions }) {
  const { engWord, polWord, engSen, polSen } = expressions;

  return (
    <div className="card">
      <div className="card__left-side">
        <div className="card__words">
          <span className="card__eng-word">{engWord}</span>
          <ChevronRightIcon style={{ color: "#999" }} />
          <span className="card__pol-word">{polWord}</span>
        </div>
        <div className="card__sentences">
          <p className="card__eng-sentence">{engSen}</p>
          <p className="card__pol-sentence">{polSen}</p>
        </div>
      </div>
      <div className="card__right-side">
        <PlayCircleOutlineIcon style={{ fontSize: 40, color: "#999" }} />
      </div>
    </div>
  );
}
