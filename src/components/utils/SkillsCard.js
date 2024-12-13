import React from "react";

const SkillsCard = ({ props }) => {
  const { img, name } = props;
  debugger;
  return (
    <div className="octagon">
      <img className="octagon" alt={`${name} logo`} src={img?.[name]} />
    </div>
  );
};

export default SkillsCard;
