import React from "react";
import { useAppContext } from "../Context/DataRackContext.js";
import Card from "./Card.js";

const Hero = () => {
  const { cockTailData } = useAppContext();
  return (
    <div className="lala">
      {cockTailData.map(({ id, img, info, glassType, name }) => {
        return <Card props={{ id, img, info, glassType, name }} key={id} />;
      })}
    </div>
  );
};

export default Hero;
